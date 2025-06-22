const productRepository = require("..//database/repositories/productRepository");
const expressAsyncHandler = require("express-async-handler");

const createProduct = expressAsyncHandler(async (req, res) => {
  const product = await productRepository.createProduct(
    req.body.name,
    req.body.description,
    req.body.price,
    req.body.quantityInStock,
    req.body.image,
    req.body.categoryId
  )
  res.status(201).send(product)
});

const editProduct = expressAsyncHandler(async (req, res) => {
  const product = await productRepository.editProduct(req.params.id, req.body)
  res.status(200).send(product)
});

const deleteProduct = expressAsyncHandler(async (req, res) => {
  const product = await productRepository.deleteProduct(req.params.id)
  res.status(200).send(product)
});

const getProduct = expressAsyncHandler(async (req, res) => {
  const product = await productRepository.getProduct(req.params.id)
  res.status(200).send(product)
});

const getAllProducts = expressAsyncHandler(async (req, res) => {
  const products = await productRepository.getAllProducts()
  res.status(200).send(products)
});

module.exports = {
  createProduct,
  editProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
};
