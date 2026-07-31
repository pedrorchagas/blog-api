function CustomError(httpCode, code, message) {
  return { httpCode, message: `code: ${code}, message: ${message}` };
}

module.exports = {
  postIdNotValid: CustomError(500, 1, 'Id de post inválido!'),
};
