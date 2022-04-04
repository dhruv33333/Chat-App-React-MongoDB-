const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  accessChat,
  fetchchats,
  createGroupChat,
  renameGroupChat,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchchats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroupChat);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;
