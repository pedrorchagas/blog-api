async function associations({
  user,
  post,
}) {
  post.belongsTo(user, {
    foreignKey: 'userId',
    as: 'user',
  });

  user.hasMany(post, {
    foreignKey: 'userId',
    as: 'posts',
  });
}

module.exports = associations;
