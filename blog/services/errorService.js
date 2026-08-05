/**
 * Essa função controla a criação do erro customizado.
 * @param {number} httpCode Codigo de retorno do http
 * @param {number} errorCode Codigo de erro interno do código
 * @param {string} message Mensagem de erro
 * @returns {object} Objeto formatado do erro customizado
 */
function CustomError(httpCode, errorCode, message) {
  return { httpCode, message, errorCode };
}

module.exports = {
  postIdNotValid: CustomError(500, 1, 'Id de post inválido!'),
  cannotCreateUser: CustomError(505, 2, 'Não foi possível criar o usuário'),
  userNotFound: CustomError(500, 3, 'Não foi possível encontrar o usuário'),
  cannotLogin: CustomError(500, 4, 'Não foi possível realizar o login!'),
};
