const express = require("express")
const router = express.Router()

// impor penerbitController
const penerbitController = require("../controllers/penerbitController")

router.get("/", penerbitController.getAllPenerbit)
router.post("/", penerbitController.createPenerbit)
router.get("/:id", penerbitController.getPenerbitById)
router.delete("/:id", penerbitController.deletePenerbitById)
router.put("/:id", penerbitController.updatePenerbitById)
router.patch("/:id", penerbitController.updatePenerbitById)

// export module
module.exports = router
