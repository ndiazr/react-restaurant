const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Product = require('./api/models/productModel');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Blogdb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


var routes = require('./api/routes/productRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: `${req.originalUrl} not found`})
});

app.listen(port);

console.log('product list RESTful API server started on: ' + port);
