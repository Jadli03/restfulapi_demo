const express = require("express");
const userController = require("../controllers/users");
const router = new express.Router();

const {
  createUser,
  showUsers,
  showUserById,
  updateUserData,
  deleteUserById,
} = userController;

router.post("/users", createUser);
router.get("/users", showUsers);
router.get("/users/:id", showUserById);
router.patch("/users/:id", updateUserData);
router.delete("/users/:id", deleteUserById);

module.exports = router;
