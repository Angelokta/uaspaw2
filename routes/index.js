// Import library Express
var express = require('express');

// Membuat instance router dari Express
var router = express.Router();

/*
  GET Home Page
  Route utama saat user mengakses '/'
*/
router.get('/', function (req, res, next) {

  // Render file view 'index'
  // Mengirim data ke view agar bisa ditampilkan dinamis
  res.render('index', {
    title: 'Welcome to Novel App',
  });

});

// Export router agar bisa digunakan di app.js
module.exports = router;
