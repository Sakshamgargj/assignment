import { blogModel } from "../models/Article-model.js";
import { improveArticle } from "../services/improveArticle.service.js";

export const createArticle = async (req, res) => {
  try {
    const { title, originalContent } = req.body;

    if (!title || !originalContent) {
      return res.status(400).json({ message: "Title and content required" });
    }

    const article = await blogModel.create({
      title,
      originalContent,
      status: "original"
    });

    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getAllArticles = async (req, res) => {
  try {
    const articles = await blogModel.find().sort({ createdAt: -1 });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getArticleById = async (req, res) => {
  try {
    const article = await blogModel.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const article = await blogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    await blogModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const improveArticleById = async (req, res) => {
  try {
    const article = await blogModel.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    const result = await improveArticle(article);

    article.updatedContent = result.updatedContent;
    article.references = result.references;
    article.status = "updated";

    await article.save();

    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


