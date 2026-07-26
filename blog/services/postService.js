const postRepository = require('../repositories/postRepository');
const databaseService = require('./databaseService');

async function getAllPosts({ page, limit }) {
  const sequelize = await databaseService.getSequelizeInstance();
  const posts = await postRepository.getAllPosts({
    sequelize,
    page,
    limit,
  });

  return posts;
}

async function createPost({ post }) {
  const sequelize = await databaseService.getSequelizeInstance();
  const newPost = await postRepository.createPost({ sequelize, post });

  return newPost;
}

async function getPostById({ id }) {
  const sequelize = await databaseService.getSequelizeInstance();
  const post = await postRepository.getPostById({ sequelize, id });

  return post;
}

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
};
