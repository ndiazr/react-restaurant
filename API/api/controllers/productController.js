'use strict';

const mongoose = require('mongoose'),
product = mongoose.model('Products');



//exports.list_all_products = function(req, res) {
exports.list_all_products = function(req, res) {
  product.find({}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.create_a_product = function(req, res) {
  const new_product = new product(req.body);
  new_product.save(function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.read_a_product = function(req, res) {
  product.findById(req.params.productId, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.update_a_product = function(req, res) {
  product.findOneAndUpdate({_id:req.params.productId}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};
// post.remove({}).exec(function(){});
exports.delete_a_product = function(req, res) {

  product.remove({
    _id: req.params.productId
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'product successfully deleted' });
  });
};
