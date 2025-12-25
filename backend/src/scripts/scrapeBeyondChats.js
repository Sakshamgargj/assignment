import axios from "axios";
import * as cheerio from "cheerio";
import mongoose from "mongoose";
import { blogModel } from "../models/Article-model.js";
import dotenv from "dotenv";

dotenv.config();

const BLOG_URL = "https://beyondchats.com/blogs/";

const scrapeBeyondChats = async () => {
  try {
    await mongoose.connect('mongodb+srv://anmolgarg1077:VVSQk26yyeYcCaBY@cluster0.uqp1v.mongodb.net/blogs');
    console.log("MongoDB connected for scraping");

    const response = await axios.get(BLOG_URL);
    const $ = cheerio.load(response.data);

    const articles = [];

    
    $(".blog-card a").each((_, el) => {
      const link = $(el).attr("href");
      if (link && link.includes("/blogs/")) {
        articles.push(`https://beyondchats.com${link}`);
      }
    });

    // Remove duplicates
    const uniqueArticles = [...new Set(articles)];

    // Pick last 5 (oldest)
    const oldestFive = uniqueArticles.slice(-5);

    for (const url of oldestFive) {
      try {
        const page = await axios.get(url);
        const $$ = cheerio.load(page.data);

        const title = $$("h1").text().trim();
        const content = $$("article").text().trim();

     

      
            if (!title || !content || content.length < 500) {
            console.log("Skipped low-quality article:", url);
            continue;
            }

       
        const exists = await blogModel.findOne({ title });
        if (exists) {
          console.log("Already exists:", title);
          continue;
        }

        await blogModel.create({
          title,
          originalContent: content,
          status: "original"
        });

        console.log("Saved:", title);
      } catch (err) {
        console.log("Failed scraping:", url);
      }
    }

    console.log("Scraping completed");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

scrapeBeyondChats();
