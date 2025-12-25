import axios from "axios";
import * as cheerio from "cheerio";


export const scrapeArticleContent = async (url) => {
  const { data } = await axios.get(url, { timeout: 10000 });

  const $ = cheerio.load(data);
  let content = "";

  $("p").each((i, el) => {
    const text = $(el).text();
    if (text.length > 50) {
      content += text + "\n";
    }
  });

  return content.substring(0, 3000);
};
