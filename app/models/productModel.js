const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantityInStock: {
    type: Number
    required: true
  },
  image: {
    type: String,
    required: true
  },
  categoryId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
})