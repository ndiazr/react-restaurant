'use strict';


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrement = require('mongoose-auto-increment');

/* connect to your database here */

const connection = mongoose.createConnection("mongodb://localhost/Blogdb");

/* define your CounterSchema here */

autoIncrement.initialize(connection);

const OrderSchema = new Schema({
  nameConsumer: {
    type: String,
    Required: 'Kindly enter the name of the order'
  },
  productItems: {
    type: [],
    Required: 'Kindly enter the name of the order'
  },
  // tags: Array,
  date: {
    type: String,
    Required: 'Kindly enter the date of the order'
  },
});


OrderSchema.plugin(autoIncrement.plugin, 'Orders');
// const product = mongoose.model('products', productSchema);

module.exports = mongoose.model('Orders', OrderSchema);
