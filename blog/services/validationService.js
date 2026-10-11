const errorService = require('./errorService');

/**
 * Essa função realiza a validação do id do post
 * @param {Number} id id do post
 */
function validatePostId(id) {
  if (typeof id !== 'string') throw errorService.postIdNotValid;
  if (!Number.isInteger(Number(id))) throw errorService.postIdNotValid;
}

function validatePostNotFound(post) {
  if (post == null) throw errorService.postNotFound;
}

function validadeCreateInfoPost({
  title, header, body, userId,
}) {
  if (
    typeof title !== 'string'
    || typeof header !== 'string'
    || typeof body !== 'string'
    || typeof userId !== 'string'
  ) {
    throw errorService.infoNotNullOrEmpty;
  }
  if (title === '' || header === '' || body === '' || userId === '') {
    throw errorService.infoNotNullOrEmpty;
  }
}

module.exports = {
  validatePostId,
  validatePostNotFound,
  validadeCreateInfoPost,
};
