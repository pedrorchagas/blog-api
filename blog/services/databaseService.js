const { Sequelize } = require('sequelize');

const User = require('../models/user');
const Post = require('../models/post');
const associations = require('../models/associations');

let sequelizeConn;

/**
 * Essa função inicializa a conexão com o banco de dados
 * @returns {object} Conexão do sequelize
 */
async function initSequelize() {
  sequelizeConn = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
  });
  return sequelizeConn;
}

/**
 * Essa função realiza a sincronização dos modelos e associações no banco de dados
 */
async function syncModels() {
  const user = await User(sequelizeConn);
  const post = await Post(sequelizeConn);

  await associations({
    user,
    post,
  });

  await sequelizeConn.sync();
}

/**
 * Essa função retorna a conexão do sequelize inicializada
 * @returns {object} Conexão do sequelize
 */
async function getSequelizeInstance() {
  return sequelizeConn;
}

module.exports = {
  initSequelize,
  syncModels,
  getSequelizeInstance,
};
