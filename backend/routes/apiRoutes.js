const express = require("express")
const router = express.Router()
const {getusers, postusers, deleteusers, patchusers, putusers } = require("../controllers/apiController")

router.get("/get/users/:id", getusers)

router.post("/post/users", postusers)

router.patch("/patch/users/:id", patchusers)

router.put("/put/users/:id", putusers)

router.delete("/delete/users/:id", deleteusers)

module.exports = router

