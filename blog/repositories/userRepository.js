const User = require('../models/user');

async function createUser({ sequelize, user }) {
  const newUser = await User(sequelize).create(user);
  return newUser;
}

module.exports = {
  createUser,
};
