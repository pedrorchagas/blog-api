const postRepository = require('../repositories/postRepository');
const databaseService = require('./databaseService');
const errorService = require('./errorService');

/**
 * Essa função realiza a busca de todos os posts
 * @param {Object} filter Filtro na busca dos posts
 * @param {number} filter.page Numero da página consultada
 * @param {number} filter.limit Limite de posts por páginas
 * @returns {Promise<Array>} Lista dos posts
 */
async function getAllPosts({ page, limit }) {
  const sequelize = await databaseService.getSequelizeInstance();
  const posts = await postRepository.getAllPosts({
    sequelize,
    page,
    limit,
  });

  return posts;
}

/**
 * Essa função realiza a criação do post
 * @param {Object} Post Filtro na busca dos posts
 * @returns {Promise} Promessa de criação do post
 */
async function createPost({ post }) {
  const sequelize = await databaseService.getSequelizeInstance();
  const newPost = await postRepository.createPost({ sequelize, post });

  return newPost;
}

/**
 * Essa função realiza a busca de post pelo ID
 * @param {number} id Filtro na busca dos posts
 * @returns {Promise} Post consultado pelo ID
 */
async function getPostById({ id }) {
  const sequelize = await databaseService.getSequelizeInstance();
  const post = await postRepository.getPostById({ sequelize, id });

  return post;
}

async function deletePostById({ user, id }) {
  try {
    const sequelize = await databaseService.getSequelizeInstance();
    await postRepository.deletePostById({ sequelize, id, user });
  } catch (exception) {
    throw errorService.unableDeletePost;
  }
}

async function editPostById({ postId, data }) {
  try {
    const sequelize = await databaseService.getSequelizeInstance();
    await postRepository.editPostById()
  }
}

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  deletePostById,
  editPostById,
};
