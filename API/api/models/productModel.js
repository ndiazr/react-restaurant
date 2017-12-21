'use strict';


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');

/* connect to your database here */

const connection = mongoose.createConnection("mongodb://localhost/Blogdb");

/* define your CounterSchema here */

autoIncrement.initialize(connection);

const ProductSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the product'
  },
  cost: {
    type: Number,
    Required: 'Kindly enter the name of the product'
  },
  // tags: Array,
  detail: {
    type: String,
    Required: 'Kindly enter the date of the product'
  },
});


ProductSchema.plugin(autoIncrement.plugin, 'Products');
// const product = mongoose.model('products', productSchema);

module.exports = mongoose.model('Products', ProductSchema);
