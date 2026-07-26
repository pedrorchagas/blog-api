const userRepository = require('../repositories/userRepository');
const databaseService = require('./databaseService');

async function createUser({ user }) {
  const sequelize = await databaseService.getSequelizeInstance();
  const newUser = await userRepository.createUser({ sequelize, user });

  return newUser;
}

module.exports = {
  createUser,
};
