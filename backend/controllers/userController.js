const axios = require("axios");
const User = require("../models/userModel");

const userRegister = async (req, res) => {
  const { name, email, password, mobile, address } = req.body;
  try {
    const user = await User.create(req.body);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error: error.message,
    });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  console.log(user);

  if (user.password === password) {
    res.status(200).json({
      success: true,
      user,
    });
  } else {
    res.status(500).json({
      success: false,
      error: "invalid password",
    });
  }
};

module.exports = { userRegister, userLogin };
