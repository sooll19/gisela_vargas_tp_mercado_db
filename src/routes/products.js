// ************ Require's ************
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')

// ************ Controller Require ************
const { index, store, detail, edit, update, destroy, create } = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', create);  
router.post('/create',store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', detail)
//router.patch('/detail/:id', detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', edit); 
router.put('/update/:id', update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', destroy); 


module.exports = router;
