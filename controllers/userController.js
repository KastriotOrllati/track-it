const Models = require("../models");
const bcrypt = require("bcrypt");
const User = Models.User;
const dotenv = require("dotenv");
dotenv.config();

const register = async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    phone_number,
    country_id,
    city_id,
    address,
    location,
    role_id,
  } = req.body;

  if (
    !first_name ||
    !last_name ||
    !email ||
    !password ||
    !phone_number ||
    !city_id ||
    !country_id ||
    !address ||
    !location ||
    !role_id
  ) {
    return res.status(400).json({
      message: "Please fill your form correctly, something is missing!",
    });
  }
  const salt = await bcrypt.genSalt(10);
  const user = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: await bcrypt.hash(password, salt),
    phone_number: phone_number,
    country_id: country_id,
    city_id: city_id,
    address: address,
    location: location,
    role_id: role_id,
    salt: salt,
  };

  const userExists = await User.findOne({ where: { email: email } });

  if (userExists) {
    return res
      .status(403)
      .json({ message: "Something went wrong, try again!" });
  }
  try {
    create_user = await User.create(user).then(
      res.status(201).json({
        message: "Profile created successfully.",
      })
    );
    // return res.status(201).json({
    //   message: "Profile created successfully.",
    // });
  } catch (error) {
    console.log(error);
  }
};

const editUser = async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    phone_number,
    country_id,
    state_id,
    address,
    location,
    role_id,
  } = req.body;
  const id = req.userId; //get id from auth Middleware
  const user = await User.findOne({ where: { id: id } });
  let selectedUser = {
    first_name: first_name || user.first_name,
    last_name: last_name || user.last_name,
    email: email || user.email,
    phone_number: phone_number || user.phone_number,
    country_id: country_id || user.country_id,
    state_id: state_id || user.state_id,
    address: address || user.address,
    location: location || user.location,
    role_id: user.role_id,
  };

  try {
    if (!user) {
      res.status(400).json({ message: "Couldn't find the profile!" });
    }

    await User.update(selectedUser, { where: { id: id } });

    res.status(200).json({
      token: token,
      id: user.id,
      name: first_name,
      email: email,
      role: user.role_id,
      isAuthenticated: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const id = req.userId; //get id from auth Middleware
  const user = await User.findOne({
    where: {
      id: id,
    },
  });
  const password_valid = await bcrypt.compare(oldPassword, user.password);
  const samePassword = await bcrypt.hash(newPassword, user.salt);
  if (password_valid === true) {
    if (user.password === samePassword) {
      return res
        .status(403)
        .json({ message: "New password cannot be the same as old password!" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    await User.update(
      { password: hashedPassword, salt: salt },
      { where: { id: id } }
    );
    return res.status(200).json({ message: "Password changed successfully!" });
  } else {
    return res.status(200).json({ message: "you don't have acess" });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const userId = req.userId; //get id from auth Middleware

  console.log("userID and authId", id, userId);
  if (!userId === id) {
    return res.status(400).json({ message: "Something went wrong!" });
  }
  const user = await User.findOne({ where: { id: id } });
  try {
    if (user) {
      return res.status(200).json({ user });
    } else {
      return res.status(404).json({ message: "User not found!" });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  const { password } = req.body;
  const id = req.userId; //get id from auth Middleware
  const user = await User.findOne({
    where: {
      id: id,
    },
  });
  const password_valid = await bcrypt.compare(password, user.password);
  try {
    if (password_valid) {
      await User.destroy({
        where: {
          id: id,
        },
      });
      return res
        .sendStatus(201)
        .json({ message: "User Deleted Successfully." });
    } else {
      return res.sendStatus(401).json({ message: "Password Incorrect" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  editUser,
  changePassword,
  getUserById,
  deleteUser,
};
