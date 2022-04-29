const db = require('../model');
const utils = require('../utils');
const validator = require('./validator');
const fs = require('fs');
module.exports = {
    addProduct: async (req, res) => {
        const validateInput = validator.ProductValidator.addProductValidator(req);
        if (validateInput.status === utils.CONSTANTS.FAILED) {
            return res.json(validateInput)
        } else {
            const createProduct = await db.product.create({
                product_name: req.body.product_name,
                product_description: req.body.product_description,
                category: req.body.category,
                sub_category: req.body.sub_category,
                brand: req.body.brand,
                cost: req.body.cost
            })
            const imagePath = __dirname + '/../filestorage/product/' + createProduct.id
            if (!fs.existsSync(imagePath)) {
                fs.mkdirSync(imagePath);
            }
            const file = req.files.files
            file.mv(imagePath + '/'+ file.name)
            const updateProduct = await db.product.update(
                { product_image_path: file.name },
                { where: { id: createProduct.id } }
            )
            return res.json({ status: utils.CONSTANTS.SUCCESS, message: 'Product Added Successfully' })
        }
    },
    getAllProductList: async (req, res) => {
        const productList = await db.product.findAll({raw: true});
        console.log(productList)
        return productList
    },
    getProductListByBrand: async (req, res) => {

    },
    getProductListByCategory: async (req, res) => {

    },
    getProductListBySubCategory: async (req, res) => {

    },
    searchProduct: async (req, res) => {

    },
    deleteProduct: async (req, res) => {

    }
}