const CategoryModel = require("../../models/categoryModel");

const createCategory = async (name, description) => {
  const category = await CategoryModel.create({
    name, description
  })
  return category
};

const editCategory = async (categoryId, newData) => {
  const existing = await CategoryModel.findOne({
    _id: categoryId,
    isActive: true
  })

  if (!existing) {
    throw new Error('Category not found')
  }

  existing.name = newData.name
  existing.description = newData.description

  const updated = await existing.save()
  return updated
};

const deleteCategory = async (categoryId) => {
  const existing = await CategoryModel.findOne({
    _id: categoryId,
    isActive: true
  })

  if (!existing) {
    throw new Error('Category not found')
  }

  existing.isActive = false
  const updated = await existing.save()
  return updated
};

const getCategory = async (categoryId) => {
  const existing = await CategoryModel.findOne({
    _id: categoryId,
    isActive: true
  })

  if (!existing) {
    throw new Error('Category not found')
  }

  return existing
};

const getAllCategories = async () => {
  const categories = await CategoryModel.find({
    isActive: true
  })
  return categories
};

module.exports = {
  createCategory,
  editCategory,
  deleteCategory,
  getCategory,
  getAllCategories,
};
