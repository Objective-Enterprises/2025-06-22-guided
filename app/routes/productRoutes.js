const express = require('express')
const middleware = require('../middleware/authenticationHandler')
const service = require('../services/productService')

const router = express.Router()

const root = router.route('/')
root.get(middleware.auth, service.getAllProducts)
root.post(middleware.auth, service.createProduct)

const id = router.route('/:id')
id.get(middleware.auth, service.getProduct)
id.put(middleware.auth, service.editProduct)
id.delete(middleware.auth, service.deleteProduct)

module.exports = router