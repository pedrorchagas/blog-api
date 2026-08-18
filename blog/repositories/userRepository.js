const User = require('../models/user');

async function createUser({ sequelize, user }) {
  await User(sequelize).create(user);
  return true;
}

async function getOneUser({ sequelize, filter, attributes = ['id', 'email', 'createdAt'] }) {
  const user = await User(sequelize).findOne({
    attributes,
    where: filter,
  });
  return user;
}

async function updateUser({ sequelize, user, newUserData }) {
  await User(sequelize).update({
    email: newUserData.email,
  }, {
    where: {
      id: user.id,
    },
  });
}

module.exports = {
  getOneUser,
  createUser,
  updateUser,
};
