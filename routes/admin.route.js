const express = require('express');
const controller = require('../controller');
const router = express.Router();

/**
 * Landing Page Routes
 */
router.get('/', (req, res) => { res.render('admin/login') });
router.get('/home', (req, res) => { res.render('admin/index') });
router.get('/product', async (req, res) => {
    res.render('admin/product', { products: await controller.Product.getAllProductList(req, res) })
});
router.get('/orders', (req, res) => { res.render('admin/orders') });
router.get('/addproduct', (req, res) => { res.render('admin/product_add') });
router.get('/config', (req, res) => { res.render('admin/configuration') })


/**
 * API Routes
 */
router.post('/addCategory', (req, res) => { controller.Category.addCategory(req, res) });
router.get('/getCategoryList', (req, res) => { controller.Category.getCategoryList(req, res) });
router.post('/deleteCategory', (req, res) => { controller.Category.deleteCategory(req, res) });
router.post('/addSubCategory', (req, res) => { controller.Category.addSubCategory(req, res) });
router.get('/getSubCategoryList', (req, res) => { controller.Category.getSubCategoryList(req, res) });
router.post('/deleteSubCategory', (req, res) => { controller.Category.deleteSubCategory(req, res) });
router.post('/addBrand', (req, res) => { controller.Category.addBrand(req, res) });
router.get('/getBrandList', (req, res) => { controller.Category.getBrandList(req, res) });
router.post('/deleteBrand', (req, res) => { controller.Category.deleteBrand(req, res) });

router.post('/addProduct', (req, res) => { controller.Product.addProduct(req, res) });

module.exports = router;