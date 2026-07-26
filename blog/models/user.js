const { DataTypes, Model } = require('sequelize');

class user extends Model {}

function User(sequelize) {
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
      paranoid: true,
    },
  );

  return user;
}

module.exports = User;
