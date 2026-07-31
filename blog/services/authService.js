const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function hashPassword(password) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}

async function verifyPassword(password, hash) {
  const valido = await bcrypt.compare(password, hash);
  return valido;
}

function generateToken({ user }) {
  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h', // tempo de expiração
  });

  return token;
}

module.exports = {
  hashPassword,
  verifyPassword,
  generateToken,
};
