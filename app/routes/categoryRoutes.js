const express = require('express')
const middleware = require('../middleware/authenticationHandler')
const service = require('../services/categoryService')

const router = express.Router()

const root = router.route('/')
root.get(middleware.auth, service.getAllCategories)
root.post(middleware.auth, service.createCategory)

const id = router.route('/:id')
id.get(middleware.auth, service.getCategory)
id.put(middleware.auth, service.editCategory)
id.delete(middleware.auth, service.deleteCategory)

module.exports = router