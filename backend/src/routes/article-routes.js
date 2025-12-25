import express from "express";
import {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
  improveArticleById
} from "../controller/article-controller.js";

const router = express.Router();


router.post("/", createArticle);
router.get("/", getAllArticles);
router.get("/:id", getArticleById);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);


router.post("/:id/improve", improveArticleById);

export default router;


