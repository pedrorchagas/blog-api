const userRepository = require('../repositories/userRepository');
const databaseService = require('./databaseService');
const errorService = require('./errorService');
const authService = require('./authService');

async function createUser({ user }) {
  try {
    const hashedPassowrd = await authService.hashPassword(user.password);

    const newUser = {
      ...user,
      password: hashedPassowrd,
    };

    const sequelize = await databaseService.getSequelizeInstance();
    const returnUser = await userRepository.createUser({ sequelize, user: newUser });

    return returnUser;
  } catch (exception) {
    throw errorService.cannotCreateUser;
  }
}

async function getOneUserByEmail({ email }) {
  const sequelize = await databaseService.getSequelizeInstance();
  const userResponse = await userRepository.getOneUser({ sequelize, filter: { email } });

  if (userResponse == null) {
    throw errorService.userNotFound;
  }

  return userResponse;
}

module.exports = {
  createUser,
  getOneUserByEmail,
};
