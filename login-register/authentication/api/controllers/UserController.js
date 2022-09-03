const { User } = require('../models');
const { encryptPass } = require('../helpers/bcrypt');

class UserController {
  static async getAllUsers(req, res) {
    try {
      // status 200 = berhasil
      let users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      // status 500 = error
      res.status(500).json(error);
    }
  }
  static async createUser(req, res) {
    try {
      const { username, email, password, image, age } = req.body;
      let result = await User.create({
        username,
        email,
        password,
        image,
        age,
      });
      //   status 201 = create
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async updateUser(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static deleteUser(req, res) {}
  static getUser(req, res) {}
}

module.exports = UserController;
