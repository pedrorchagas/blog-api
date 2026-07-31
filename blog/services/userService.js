const userRepository = require('../repositories/userRepository');
const databaseService = require('./databaseService');
const errorService = require('./errorService');
const authService = require('./authService');

async function createUser({ user }) {
  const hashedPassowrd = await authService.hashPassword(user.password);

  const newUser = {
    ...user,
    password: hashedPassowrd,
  };

  const sequelize = await databaseService.getSequelizeInstance();
  const userCreated = await userRepository.createUser({ sequelize, user: newUser });

  if (userCreated === false) {
    throw errorService.cannotCreateUser;
  }
}

async function getOneUser({ infos }) {
  const sequelize = await databaseService.getSequelizeInstance();
  const userResponse = await userRepository.getOneUser({ sequelize, filter: infos });

  if (userResponse == null) {
    throw errorService.userNotFound;
  }

  return userResponse;
}

module.exports = {
  createUser,
  getOneUser,
};
