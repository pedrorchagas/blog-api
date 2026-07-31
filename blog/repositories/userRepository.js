const User = require('../models/user');

async function createUser({ sequelize, user }) {
  await User(sequelize).create(user);
  return true;
}

async function getOneUser({ sequelize, filter }) {
  const user = await User(sequelize).findOne({
    where: filter,
  });
  return user;
}

module.exports = {
  getOneUser,
  createUser,
};
