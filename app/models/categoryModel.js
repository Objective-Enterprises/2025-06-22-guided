const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
})

const CategoryModel = mongoose.model('category', categorySchema)

module.exports = CategoryModel