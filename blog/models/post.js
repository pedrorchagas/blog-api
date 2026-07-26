const { DataTypes, Model } = require('sequelize');

class post extends Model {}

function Post(sequelize) {
  post.init(
    {
      likes: {
        type: DataTypes.INTEGER,
        default: 0,
      },
      tittle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      header: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Post',
      paranoid: true,
    },
  );

  return post;
}

module.exports = Post;
