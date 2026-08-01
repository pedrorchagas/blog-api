const userService = require('../services/userService');
const authService = require('../services/authService');
const errorService = require('../services/errorService');

/**
 * Essa função controla o fluxo de ação de busca de todos os voos.
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
    res.send({ exception });
  }
}

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
    res.send({ exception });
  }
}

module.exports = {
  createUser,
  loginUser,
};
