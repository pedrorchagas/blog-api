const Post = require('../models/post');

async function getAllPosts({ sequelize, page = 1, limit = 10 }) {
  const safePage = Number.isInteger(page) && page > 0 ? page : 1;
  const safeLimit = Number.isInteger(limit) && limit > 0 ? limit : 10;
  const offset = (safePage - 1) * safeLimit;

  const { rows, count } = await Post(sequelize).findAndCountAll({
    attributes: ['id', 'tittle', 'header', 'createdAt'],
    limit: safeLimit,
    offset,
    order: [['createdAt', 'DESC']],
  });

  return {
    data: rows,
    pagination: {
      page: safePage,
      limit: safeLimit,
      totalItems: count,
      totalPages: Math.ceil(count / safeLimit),
    },
  };
}

async function createPost({ sequelize, post }) {
  const mewPost = await Post(sequelize).create(post);
  return mewPost;
}

async function getPostById({ sequelize, id }) {
  const post = await Post(sequelize).findOne({
    where: {
      id,
    },
  });

  return post;
}

async function deletePostById({ sequelize, id}) {
  await Post(sequelize).destroy({
    where: {
      id,
    }
  });
}

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  deletePostById,
};
