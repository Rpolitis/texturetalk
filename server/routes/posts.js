// add all the routes that have something to do with posts
import express from 'express';
//import functions from controllers/post.js
import {getPosts, createPost} from '../controllers/posts.js'
const router = express.Router();

// http://localhost:5000/posts

//getPosts is a function call
router.get('/', getPosts);
router.post('/', createPost)

export default router;