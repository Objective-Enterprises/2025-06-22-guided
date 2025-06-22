const ProductModel = require("../../models/productModel");
const category = require('./categoryRepository')

const createProduct = async (
  name,
  description,
  price,
  quantityInStock,
  image,
  categoryId
) => {
  await category.getCategory(categoryId)
  const product = await ProductModel.create({
    name, description, price, quantityInStock, image, categoryId
  })
  return product
};

const editProduct = async (productId, newData) => {
  const existing = await ProductModel.findOne({
    _id: productId,
    isActive: true
  })

  if (!existing) {
    throw new Error('Product not found')
  }

  existing.name = newData.name
  existing.description = newData.description
  existing.price = newData.price
  existing.quantityInStock = newData.quantityInStock
  existing.image = newData.image
  existing.categoryId = newData.categoryId
  const updated = await existing.save()
  return updated
};

const deleteProduct = async (productId) => {
  const existing = await ProductModel.findOne({
    _id: productId,
    isActive: true
  })

  if (!existing) {
    throw new Error('Product not found')
  }

  existing.isActive = false
  const updated = await existing.save()
  return updated
};

const getProduct = async (productId) => {
  const existing = await ProductModel.findOne({
    _id: productId,
    isActive: true
  })

  if (!existing) {
    throw new Error('Product not found')
  }
  
  return existing
};

const getAllProducts = async () => {
  const products = await ProductModel.find({
    isActive: true
  })
  return products
};


module.exports = {
  createProduct,
  editProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
};
