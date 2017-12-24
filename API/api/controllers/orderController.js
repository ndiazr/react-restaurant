'use strict';

const mongoose = require('mongoose'),
order = mongoose.model('Orders');



//exports.list_all_orders = function(req, res) {
exports.list_all_orders = function(req, res) {
  order.find({}, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};


exports.create_a_order = function(req, res) {
  const new_order = new order(req.body);
  new_order.save(function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.read_a_order = function(req, res) {
  order.findById(req.params.orderId, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.update_a_order = function(req, res) {
  order.findOneAndUpdate({_id:req.params.orderId}, req.body, {new: true}, function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};
// post.remove({}).exec(function(){});
exports.delete_a_order = function(req, res) {

  order.remove({
    _id: req.params.orderId
  }, function(err, order) {
    if (err)
      res.send(err);
    res.json({ message: 'order successfully deleted' });
  });
};
