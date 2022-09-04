const { Item, User } = require('../models');
const { tokenVerifier } = require('../helpers/jsonwebtoken');

class ItemController {
  static async getAllItems(req, res) {
    try {
      let items = await Item.findAll({
        include: [User],
      });
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async createItem(req, res) {
    try {
      // di postman untuk UserId masuk ke header untuk ngetestnya lalu masukin access_token ambil dari login user,buat ambil otomatis UserId
      // untuk penamaan access_token bebas bisa di ganti sesuka hati
      // console.log(req.headers.access_token);
      // const { name, type, price, stock, image, UserId } = req.body;
      const { name, type, price, stock, image } = req.body;
      // di komen karena sudah menggunakan middleware
      // const access_token = req.headers.access_token;
      // // memanfaatkan token
      // let UserId = tokenVerifier(access_token).id;
      // userData diambil dari middleware yang ada di routes item
      let UserId = req.userData.id;
      let result = await Item.create({
        name,
        type,
        price,
        stock,
        image,
        UserId,
      });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static updateItem(req, res) {}
  static deleteItem(req, res) {}
  static getItem(req, res) {}
}

module.exports = ItemController;
