const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * Essa função transforma a string password em um hash
 * @param {string} password senha a ser transformada em hash
 * @returns {string}
 */
async function hashPassword(password) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}


/**
 * Essa função realiza a comparação entre a senha inserida e o hash da senha armazanada no banco.
 * @param {string} password Senha inserida no login
 * @param {string} hash Hash da senha armazenada no banco
 * @returns {boolean} 
 */
async function verifyPassword(password, hash) {
  const isValid = await bcrypt.compare(password, hash);
  return isValid;
}

/**
 * Essa função gera o token JWT de acordo com a informações do usuário.
 * @param {object} user Objeto usuário
 * @returns {string} Token JWT
 */
function generateToken({ user }) {
  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return token;
}

module.exports = {
  hashPassword,
  verifyPassword,
  generateToken,
};
