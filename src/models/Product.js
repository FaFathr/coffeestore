// import { Schema, models, model } from "mongoose";
// const coffeeSchema = new Schema({
//   id: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   caffeineContent: {
//     type: Number,
//     required: false,
//   },
//   coffeeVariety: {
//     type: String,
//     required: false,
//   },
//   ingredients: {
//     type: [String],
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: () => Date.now(),
//     immutable: true,
//   },
//   updatedAt: {
//     type: Date,
//     default: () => Date.now(),
//   },
// });
// const Product = models.Product || model("Product", coffeeSchema);
// export default Product;
// models/Product.js
import { Schema, models, model } from 'mongoose';

const coffeeSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  caffeineContent: {
    type: Number,
    required: false,
  },
  coffeeVariety: {
    type: String,
    required: false,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Product = models.Product || model('Product', coffeeSchema);
export default Product;
