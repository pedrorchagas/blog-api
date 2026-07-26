const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Get by id
router.get('/{id}', async (req, res) => {
  await userController({ req, res });
});

// Create
router.post('/', async (req, res) => {
  await userController.createUser({ req, res });
});

router.put('/{id}', async (req, res) => {

});

router.delete('/{id}', async (req, res) => {

});

module.exports = router;
