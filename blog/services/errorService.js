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

function returnError(res, exception) {
  if (exception.httpCode != null && exception.errorCode != null && exception.message != null) {
    res.status(exception.httpCode).send({
      exception: exception.message,
      errorCode: exception.errorCode,
    });
  } else {
    res.status(500).send(exception);
  }
}

module.exports = {
  returnError,
  postIdNotValid: CustomError(500, 1, 'Id de post inválido!'),
  cannotCreateUser: CustomError(505, 2, 'Não foi possível criar o usuário'),
  userNotFound: CustomError(500, 3, 'Não foi possível encontrar o usuário'),
  cannotLogin: CustomError(500, 4, 'Não foi possível realizar o login!'),
  unableDeletePost: CustomError(500, 5, 'Não foi possível apagar o post'),
  invalidToken: CustomError(403, 5, 'Token inválido ou expirado.'),
  tokenNotFound: CustomError(401, 6, 'O token de acesso não foi encontrado!'),
  errorPostEdit: CustomError(500, 7, 'Não foi possível editar o post.'),
};
