import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    originalContent: {
      type: String,
      required: true
    },

    updatedContent: {
      type: String,
      default: null
    },

    references: {
      type: [String],
      default: []
    },

    status: {
      type: String,
      enum: ["original", "updated"],
      default: "original"
    }
  },
  { timestamps: true }
);

export const blogModel = mongoose.model("Article", articleSchema);
