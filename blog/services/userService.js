const userRepository = require('../repositories/userRepository');
const databaseService = require('./databaseService');
const errorService = require('./errorService');
const authService = require('./authService');

/**
 * Essa função realiza a criação do usuário
 * @param {Object} user Objeto do usuário
 * @returns {Promise} promessa de criação do usuário
 */
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

/**
 * Essa função realiza a busca de usuário de acordo com o email
 * @param {string} email Email do usuário a ser buscado
 * @returns {Promise} Promessa de retorno do usuário
 */
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
