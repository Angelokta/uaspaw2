const express = require("express")
const router = express.Router()

// impor penulisController
const penulisController = require("../controllers/penulisController")

router.get("/", penulisController.getAllPenulis)
router.post("/", penulisController.createPenulis)
router.get("/:id", penulisController.getPenulisById)
router.delete("/:id", penulisController.deletePenulisById)
router.put("/:id", penulisController.updatePenulisById)
router.patch("/:id", penulisController.updatePenulisById)

// export module
module.exports = router
