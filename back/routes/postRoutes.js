import express from 'express'
import { getAllPosts, createPosts } from '../src/controllers/postsController.js'

const router = express.Router()

// GET all posts, ruta
router.get('/posts', getAllPosts)
// POST a new post, ruta
router.post('/posts', createPosts)

router.delete('/posts', deletePost)

router.put('/posts', likePost)

export default router;