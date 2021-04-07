const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoscontroller');

router.get('/', productoController.lis);


module.exports = router;