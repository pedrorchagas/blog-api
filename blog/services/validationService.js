const errorService = require('./errorService');

function validatePostId(id) {
  if (typeof id !== 'string') throw errorService.postIdNotValid;
  if (!Number.isInteger(Number(id))) throw errorService.postIdNotValid;
}

module.exports = {
  validatePostId,
};
