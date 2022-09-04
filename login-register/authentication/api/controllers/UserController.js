const { User } = require('../models');
const { decryptPass } = require('../helpers/bcrypt');
const { tokenGenerator, tokenVerifier } = require('../helpers/jsonwebtoken');

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
  static async register(req, res) {
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
      const id = +req.params.id;
      // const { username, email, password } = req.body;
      let result = await User.update(req.body, {
        where: { id },
        // buat 3ger hooknya
        individualHooks: true,
      });
      result[0] === 1
        ? res.status(200).json({
            message: `User id ${id} has been updated`,
          })
        : // 404 not found
          res.status(404).json({
            message: `User id ${id} not found`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async deleteUser(req, res) {
    try {
      const id = +req.params.id;
      let result = await User.destroy({
        where: { id },
      });
      result === 1
        ? res.status(200).json({
            message: `User id ${id} has been deleted`,
          })
        : // 404 not found
          res.status(404).json({
            message: `User id ${id} not found`,
          });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getUser(req, res) {
    try {
      const id = +req.params.id;
      let result = await User.findByPk(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      let emailFound = await User.findOne({
        where: { email },
      });
      if (emailFound) {
        if (decryptPass(password, emailFound.password)) {
          let access_token = tokenGenerator(emailFound);
          res.status(200).json({
            access_token,
          });
          let verifyToken = tokenVerifier(access_token);
          console.log(verifyToken);
        } else {
          res.status(404).json({ message: `User ${email} not found` });
        }
      } else {
        res.status(403).json({ message: `Invalid password` });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = UserController;
