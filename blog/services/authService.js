const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errorService = require('./errorService');

async function hashPassword(password) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}

async function verifyPassword(password, hash) {
  const isValid = await bcrypt.compare(password, hash);
  if (isValid === false) {
    throw errorService.cannotLogin;
  }
}

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
