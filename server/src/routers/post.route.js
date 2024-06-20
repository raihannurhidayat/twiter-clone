import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {
  commentOnPost,
  createPost,
  deletePost,
  getAllPost,
  getFollowingPost,
  getLikedPosts,
  getUserPost,
  likeUnlikePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/all", protectRoute, getAllPost);
router.get("/following", protectRoute, getFollowingPost); // get all post on follow (mengambil data post yang di follow nya)
router.get("/likes/:id", protectRoute, getLikedPosts); // get post yang di like
router.get("/user/:username", protectRoute, getUserPost); // get all post user
router.post("/create", protectRoute, createPost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.delete("/:id", protectRoute, deletePost);

export default router;
