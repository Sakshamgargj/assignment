import axios from "axios";

export const searchGoogle = async (query) => {
  const response = await axios.get("https://serpapi.com/search", {
    params: {
      q: query,
      api_key: process.env.SERP_API_KEY,
      num: 5
    }
  });

  const results = response.data.organic_results || [];

  return results
    .filter(r => r.link)
    .slice(0, 2)
    .map(r => ({
      title: r.title,
      link: r.link
    }));
};
