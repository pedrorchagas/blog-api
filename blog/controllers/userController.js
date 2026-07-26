const userService = require('../services/userService');

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

    const newUser = await userService.createUser({ user });

    res.send({ newUser });
  } catch (exception) {
    res.send({ exception });
  }
}

module.exports = {
  createUser,
};
