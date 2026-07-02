const INDEXNOW_KEY = "9eac11ea51dc45fdba993f5b8527e4d9";
const HOST = "asuransibatam.com";

type IndexNowChunkResult = {
  status: number;
  count: number;
};

export async function submitToIndexNow(urls: string[]): Promise<{
  ok: boolean;
  submitted: number;
  results: IndexNowChunkResult[];
}> {
  if (!urls || urls.length === 0) {
    return { ok: true, submitted: 0, results: [] };
  }

  // IndexNow allows up to 10,000 URLs per request; we chunk at 500 to be safe
  const chunks: string[][] = [];
  for (let i = 0; i < urls.length; i += 500) {
    chunks.push(urls.slice(i, i + 500));
  }

  const results: IndexNowChunkResult[] = [];

  for (const chunk of chunks) {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: chunk,
      }),
    });

    results.push({ status: res.status, count: chunk.length });

    // small delay between chunks
    await new Promise((r) => setTimeout(r, 300));
  }

  const ok = results.every((r) => r.status === 200 || r.status === 202);
  const submitted = results.reduce((sum, r) => sum + r.count, 0);

  return { ok, submitted, results };
}
