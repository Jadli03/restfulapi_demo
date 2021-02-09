const User = require("../models/users");

//creating user 
const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//displaying user 
const showUsers = async (req, res) => {
  try {
    const resu = await User.find();
    res.status(200).send(resu);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//displaying user by id
const showUserById = async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await User.findById(_id);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//updating user data
const updateUserData = async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

//deleting user by id 
const deleteUserById = async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await User.findOneAndDelete(_id);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
    createUser,
    showUsers,
    showUserById,
    updateUserData,
    deleteUserById
};
