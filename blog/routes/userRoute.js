const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Get by id
router.get('/', authMiddleware, async (req, res) => {
  await userController.getUser({ req, res });
});

// Create
router.post('/register', async (req, res) => {
  await userController.createUser({ req, res });
});

router.post('/login', async (req, res) => {
  await userController.loginUser({ req, res });
});

router.put('/', authMiddleware, async (req, res) => {
  await userController.updateUser({ req, res });
});

router.delete('/', authMiddleware, async (req, res) => {

});

module.exports = router;
