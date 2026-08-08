const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Get all
router.get('/', async (req, res) => {
  await postController.getAllPosts({ req, res });
});

// Get by id
router.get('/:id', async (req, res) => {
  await postController.getPostById({ req, res });
});

// Create do post
// apenas usuários logados
router.post('/', authMiddleware, async (req, res) => {
  await postController.createPost({ req, res });
});

// Edit by id
// apenas usuários logados
router.put('/:id', authMiddleware, async (req, res) => {
  await postController.editPostById({ req, res });
});

// Delete
// apenas usuários logados
router.delete('/:id', authMiddleware, async (req, res) => {
  await postController.deleteById({ req, res });
});

module.exports = router;
