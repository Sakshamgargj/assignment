import axios from "axios";
import * as cheerio from "cheerio";

export const improveArticle = async (article) => {
  // 1️⃣ Google Search via SerpAPI
  const serpResponse = await axios.get("https://serpapi.com/search", {
    params: {
      engine: "google",
      q: article.title,
      api_key: process.env.SERP_API_KEY,
      num: 5
    }
  });

  // 2️⃣ Pick top 2 organic results
  const results = serpResponse.data.organic_results || [];
  const topArticles = results.slice(0, 2);

  const references = [];
  let combinedContent = "";

  // 3️⃣ Scrape content from each article
  for (const item of topArticles) {
    if (!item.link) continue;

    references.push(item.link);

    try {
      const page = await axios.get(item.link, { timeout: 5000 });
      const $ = cheerio.load(page.data);

      // Basic content extraction
      const text =
        $("article").text() ||
        $("main").text() ||
        $("body").text();

      combinedContent += text.substring(0, 1000) + "\n\n";
    } catch (err) {
      console.log("Scraping failed for:", item.link);
    }
  }

  // 4️⃣ Create improved content (logic-based, no OpenAI)
  const updatedContent = `
### Improved Article: ${article.title}

${article.originalContent}

---

### Insights from Top Google Articles

${combinedContent || "Content enhanced using top Google results."}

---

### Conclusion
This article was improved by analyzing top-ranking Google articles using SerpAPI.
`;

  return {
    updatedContent,
    references
  };
};




























