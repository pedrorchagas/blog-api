const express = require('express');
const postController = require('../controllers/postController');

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
router.post('/', async (req, res) => {
  await postController.createPost({ req, res });
});

// Edit by id
// apenas usuários logados
router.put('/{id}', async (req, res) => {
  await postController(req, res);
});

// Delete
// apenas usuários logados
router.delete('/{id}', async (req, res) => {
  await postController(req, res);
});

module.exports = router;
