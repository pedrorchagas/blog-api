const errorService = require('./errorService');

/**
 * Essa função realiza a validação do id do post
 * @param {Number} id id do post
 */
function validatePostId(id) {
  if (typeof id !== 'string') throw errorService.postIdNotValid;
  if (!Number.isInteger(Number(id))) throw errorService.postIdNotValid;
}

module.exports = {
  validatePostId,
};
