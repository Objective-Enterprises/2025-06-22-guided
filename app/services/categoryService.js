const categoryRepository = require("..//database/repositories/categoryRepository");
const expressAsyncHandler = require("express-async-handler");

const createCategory = expressAsyncHandler(async (req, res) => {
  const category = await categoryRepository.createCategory(
    req.body.name, req.body.description
  )
  res.status(201).send(category)
});

const editCategory = expressAsyncHandler(async (req, res) => {
  const category = await categoryRepository.editCategory(
    req.params.id, req.body
  )
  res.status(200).send(category)
});

const deleteCategory = expressAsyncHandler(async (req, res) => {
  const category = await categoryRepository.deleteCategory(req.params.id)
  res.status(200).send(category)
});

const getCategory = expressAsyncHandler(async (req, res) => {
  const category = await categoryRepository.getCategory(req.params.id)
  res.status(200).send(category)
});

const getAllCategories = expressAsyncHandler(async (req, res) => {
  const categories = await categoryRepository.getAllCategories()
  res.status(200).send(categories)
});

module.exports = {
  createCategory,
  editCategory,
  deleteCategory,
  getCategory,
  getAllCategories,
};
