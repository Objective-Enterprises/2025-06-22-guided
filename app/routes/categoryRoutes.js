const express = require('express')
const middleware = require('../middleware/authenticationHandler')
const service = require('../services/categoryService')

const router = express.Router()

const root = router.route('/')
root.post(middleware.auth, service.createCategory)

module.exports = router