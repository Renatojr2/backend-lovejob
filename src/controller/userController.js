const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secrete = process.env.JWT_TOKEN

module.exports = {



  //criar novo usuario
  async store(req, res) {
    const { name, email, password } = req.body;
    let user = new User({
      name,
      email,
      password
    });
    try {
      await user.save();
      res.status(200).json(user)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "resgistering erro" })

    }

  }
}