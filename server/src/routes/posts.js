import express from 'express';
import auth from "../middleware/auth.js";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);

export default router;
