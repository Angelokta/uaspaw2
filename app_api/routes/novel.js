const express = require("express");
const router = express.Router();

const novelController = require("../controllers/novelController");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, novelController.getAllNovel);
router.get("/:id", auth, novelController.getNovelById);
router.post("/", auth, novelController.createNovel);
router.put("/:id", auth, novelController.updateNovelById);
router.put("/:id", auth, novelController.updateNovelById);
router.delete("/:id", auth, novelController.deleteNovelById);

module.exports = router;
