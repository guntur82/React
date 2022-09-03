'use strict';
const { encryptPass } = require('../helpers/bcrypt');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Item);
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'Username must not be empty',
          },
        },
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: function (user, options) {
          user.password = encryptPass(user.password);
          // apabila img dan age tidak diisi bisa di setting disini tidak usah di controller
          user.image = user.image || 'https://via.placeholder.com/150';
          user.age = user.age || 0;
        },
      },
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
