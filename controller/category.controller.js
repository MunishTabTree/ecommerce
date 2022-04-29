const utils = require('../utils');
const validator = require('./validator')
const db = require('../model')
module.exports = {
    /**
     * Category Module
     */
    addCategory: async (req, res) => {
        const validateInput = validator.CategoryValidator.addCategoryValidator(req);
        if (validateInput.status === utils.CONSTANTS.FAILED) {
            return res.json(validateInput)
        } else {
            const checkCategory = await db.category.findOne({ where: { category: req.body.category } });
            if (checkCategory) {
                return res.json({
                    status: utils.CONSTANTS.FAILED,
                    message: 'Category Already Exist'
                })
            } else {
                const createCategory = await db.category.create({
                    category: req.body.category
                })
                return res.json({
                    status: utils.CONSTANTS.SUCCESS,
                    message: 'Category Added Successfully'
                })
            }
        }
    },
    getCategoryList: async (req, res) => {
        const categoryList = await db.category.findAll();
        return res.json({
            status: utils.CONSTANTS.SUCCESS,
            categoryList
        })
    },
    deleteCategory: async (req, res) => {
        const validateInput = validator.CategoryValidator.deleteCategoryValidator(req);
        if (validateInput.status === utils.CONSTANTS.FAILED) {
            return res.json(validateInput)
        } else {
            const deleteCategory = await db.category.destroy({ where: { id: req.body.id } })
            return res.json({
                status: utils.CONSTANTS.SUCCESS,
                message: 'Category deleted successfully'
            })
        }
    },

    /**
     * Sub Category Module
     */
    addSubCategory: async (req, res) => {
        const validateInput = validator.CategoryValidator.addSubCategoryValidator(req, res);
        if (validateInput.status === utils.CONSTANTS.FAILED) {
            return res.json(validateInput)
        } else {
            const category = req.body.category;
            const subcategory = req.body.subcategory;
            const checkSubCategory = await db.sub_category.findOne({ where: { category: category, sub_category: subcategory } })
            if (checkSubCategory) {
                return res.json({
                    status: utils.CONSTANTS.FAILED,
                    message: 'Sub category with category combination already exist'
                })
            } else {
                const createSubCategory = await db.sub_category.create({
                    category: category,
                    sub_category: subcategory
                })
                return res.json({
                    status: utils.CONSTANTS.SUCCESS,
                    message: 'SubCategory added successfully'
                })
            }
        }
    },
    getSubCategoryList: async (req, res) => {
        const subcategorylist = await db.sub_category.findAll();
        return res.json({
            status: utils.CONSTANTS.SUCCESS,
            subcategorylist
        })
    },
    deleteSubCategory: async (req, res) => {
        const validateInput = validator.CategoryValidator.deleteSubCategoryValidator(req);
        if (validateInput.status === utils.CONSTANTS.FAILED) {
            return res.json(validateInput)
        } else {
            const deleteSubCategory = await db.sub_category.destroy({ where: { id: req.body.id } })
            return res.json({
                status: utils.CONSTANTS.SUCCESS,
                message: 'SubCategory deleted successfully'
            })
        }
    },

    /**
     * Brand Module
     */
    addBrand: async (req, res) => {
        const validateInput = validator.CategoryValidator.addBrandValidator(req);
        if (validateInput.status === utils.CONSTANTS.FAILED) {
            return res.json(validateInput)
        } else {
            const checkBrand = await db.brand.findOne({ where: { brand: req.body.brand } });
            if (checkBrand) {
                return res.json({
                    status: utils.CONSTANTS.FAILED,
                    message: 'Brand Name already exist'
                })
            } else {
                const addBrand = await db.brand.create({
                    brand: req.body.brand
                })
                return res.json({
                    status: utils.CONSTANTS.SUCCESS,
                    message: 'Brand Added successfully'
                })
            }
        }
    },
    getBrandList: async (req, res) => {
        const brandList = await db.brand.findAll();
        return res.json({
            status: utils.CONSTANTS.SUCCESS,
            brandList
        })
    },
    deleteBrand: async (req, res) => {
        const validateInput = validator.CategoryValidator.deleteBrandValidator(req);
        if (validateInput.status === utils.CONSTANTS.FAILED) {
            return res.json(validateInput)
        } else {
            const deleteBrand = await db.brand.destroy({ where: { id: req.body.id } })
            return res.json({
                status: utils.CONSTANTS.SUCCESS,
                message: 'Brand Deleted Successfully'
            })
        }
    }
}