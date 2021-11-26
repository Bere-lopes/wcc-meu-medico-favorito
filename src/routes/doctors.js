const express = require("express")
const router = express.Router()
const controller = require("../controllers/doctorContreller")

router.post("/", controller.createDoctor)
router.get("/", controller.getAllDoctor)


module.exports = router;