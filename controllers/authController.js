const Models = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const User = Models.User;
dotenv.config();

const login = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({
      message: "Please fill your form correctly, something is missing!",
    });
  }

  try {
    if (user) {
      const password_valid = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (password_valid) {
        token = jwt.sign(
          {
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            role: user.role_id,
          },
          process.env.SECRET
        );
        res.status(200).json({
          token: token,
          id: user.id,
          name: user.first_name,
          email: user.email,
          role: user.role_id,
          isAuthenticated: true,
        });
        console.log("you are logged in");
      } else {
        res.status(401).json({ error: "Password or Email Incorrect" });
      }
    } else {
      res.status(404).json({ error: "User does not exist" });
    }
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req, res) => {
  res.status(200).json({ token: "" });
};

module.exports = {
  login,
  logout,
};
