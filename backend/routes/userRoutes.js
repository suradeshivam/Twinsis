const express = require("express");
const {
  userRegister,
  userLogin,
  updateInfo,
  check,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(check);
router.route("/").post(userRegister);
router.route("/login").post(userLogin);
router.route("/:id").put(updateInfo);

module.exports = router;
