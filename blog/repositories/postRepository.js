const Post = require('../models/post');

async function getAllPosts({ sequelize, page = 1, limit = 10 }) {
  const safePage = Number.isInteger(page) && page > 0 ? page : 1;
  const safeLimit = Number.isInteger(limit) && limit > 0 ? limit : 10;
  const offset = (safePage - 1) * safeLimit;

  const { rows, count } = await Post(sequelize).findAndCountAll({
    attributes: ['id', 'title', 'header', 'createdAt'],
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
    attributes: ['id', 'title', 'header', 'createdAt'],
    where: {
      id,
    },
  });

  return post;
}

async function deletePostById({ sequelize, id, user }) {
  await Post(sequelize).destroy({
    where: {
      id,
      userId: user.id,
    },
  });
}

async function editPostById({ sequelize, id, data }) {
  await Post(sequelize).update(data, {
    where: {
      id,
    },
  });
}

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
  deletePostById,
  editPostById,
};
