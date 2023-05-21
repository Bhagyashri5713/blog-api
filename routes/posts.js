import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  createPost,
  deletePost,
  likeOrDislike,
  getAllPosts,
  getUserPost,
  getExplorePosts,
} from "../controllers/post.js";

const router = express.Router();

//Create Posts
router.post("/", verifyToken, createPost);

//Delete Post
router.delete("/:id", verifyToken, deletePost);

//Like or Dislikes
router.put("/:id/like", likeOrDislike);

//Get All timeline Posts
router.get("/timeline/:id", getAllPosts);

//Get User Post only
router.get("/user/all/:id", getUserPost);

//explore
router.get("/explore", getExplorePosts);
export default router;
