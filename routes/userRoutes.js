const express = require('express');
const { registerUsers, loginUsers, currentUsers } = require('../Controllers/userController');
const router = express.Router()
const validateToken = require('../Middleware/validateTokenHandler')

router.post("/register" , registerUsers)

router.post("/login" , loginUsers)

router.get("/current", validateToken, currentUsers)

module.exports = router