import { submitToIndexNow } from "../src/lib/indexnow";
import sitemap from "../src/app/sitemap";

async function main() {
  const entries = sitemap();
  const urls = entries.map((entry) => entry.url);

  console.log(`Submitting ${urls.length} URLs to IndexNow...`);
  const result = await submitToIndexNow(urls);
  console.log(JSON.stringify(result, null, 2));

  if (!result.ok) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
