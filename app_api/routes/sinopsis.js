const express = require("express")
const router = express.Router()

const sinopsisController = require("../controllers/sinopsisController")

router.get("/", sinopsisController.getAllSinopsis)
router.post("/", sinopsisController.createSinopsis)
router.get("/:id", sinopsisController.getSinopsisById)
router.put("/:id", sinopsisController.updateSinopsisById)
router.patch("/:id", sinopsisController.updateSinopsisById)
router.delete("/:id", sinopsisController.deleteSinopsisById)

module.exports = router
