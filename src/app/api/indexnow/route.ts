import { NextResponse } from "next/server";
import { submitToIndexNow } from "@/lib/indexnow";
import sitemap from "@/app/sitemap";

// POST with { "urls": ["https://asuransibatam.com/..."] } to submit specific URLs.
// POST with no body (or { "all": true }) to submit every URL currently in sitemap.ts.
export async function POST(req: Request) {
  let body: { urls?: string[]; all?: boolean } = {};

  try {
    body = await req.json();
  } catch {
    // empty body is fine, treated as "submit all"
  }

  const urls =
    body.urls && body.urls.length > 0
      ? body.urls
      : sitemap().map((entry) => entry.url);

  const result = await submitToIndexNow(urls);

  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}
