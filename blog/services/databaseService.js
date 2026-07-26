const { Sequelize } = require('sequelize');

const User = require('../models/user');
const Post = require('../models/post');
const associations = require('../models/associations');

let sequelizeConn;

async function initSequelize() {
  sequelizeConn = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
  });
  return sequelizeConn;
}

async function syncModels() {
  const user = await User(sequelizeConn);
  const post = await Post(sequelizeConn);

  await associations({
    user,
    post,
  });

  await sequelizeConn.sync();
}

async function getSequelizeInstance() {
  return sequelizeConn;
}

module.exports = {
  initSequelize,
  syncModels,
  getSequelizeInstance,
};
