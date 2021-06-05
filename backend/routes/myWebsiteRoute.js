const express = require("express")
const router = express.Router()
const {message} = require("../controllers/myWebsiteController") 

router.post("/message", message)

module.exports = router;