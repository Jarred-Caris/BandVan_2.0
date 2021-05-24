import express from "express";
import {getPosts, createPost} from '../controllers/posts.js'

const router = express.Router();

router.use('/', getPosts);
router.post('/', createPost);

export default router;