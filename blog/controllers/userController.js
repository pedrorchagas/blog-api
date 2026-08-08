const userService = require('../services/userService');
const authService = require('../services/authService');
const errorService = require('../services/errorService');

/**
 * Essa função controla o fluxo de ação de criação do usuário
 * @param {object} req Objeto da requisição do express
 * @param {res} res Objeto da resposta do express
 * @returns {number}
 */
async function createUser({ req, res }) {
  try {
    const { name, email, password } = req.body;

    const user = {
      name, email, password,
    };

    await userService.createUser({ user });

    res.send({ message: 'Usuário criado! Agora faça o login' });
  } catch (exception) {
    errorService.returnError(res, exception);
  }
}

/**
 * Essa função controla o fluxo de ação de login dos usuários
 * @param {object} req Objeto da requisição do express
 * @param {res} res Objeto da resposta do express
 * @returns {number}
 */
async function loginUser({ req, res }) {
  try {
    const { email, password } = req.body;

    const user = await userService.getOneUserByEmail({ email });

    const isValid = await authService.verifyPassword(password, user.password);

    if (isValid === false) {
      throw errorService.cannotLogin;
    }

    const token = authService.generateToken({ user });

    res.send({
      message: 'Usuário logado!',
      token,
    });
  } catch (exception) {
    errorService.returnError(res, exception);
  }
}

async function updateUser({ req, res }) {
  try {
    const lastUser = req.user;
    const newUser = req.body.user;

    await userService.updateUser({ lastUser, newUser });

    res.send({ message: 'Usuário alterado com sucesso!' });
  } catch (exception) {
    errorService.returnError(res, exception);
  }
}

async function getUser({ req, res }) {
  try {
    const userId = req.user.id;

    const user = await userService.getOneUserByID({ userId });

    res.send({ user });
  } catch (exception) {
    errorService.returnError(res, exception);
  }
}

module.exports = {
  createUser,
  loginUser,
  updateUser,
  getUser,
};
