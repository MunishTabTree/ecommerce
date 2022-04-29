const utils = require("../../utils")

module.exports = {
    addCategoryValidator: (req) => {
        if (!req.body.category || req.body.category === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'please provide the category' }
        }
        return { status: utils.CONSTANTS.SUCCESS }
    },
    deleteCategoryValidator: (req) => {
        if (!req.body.id || req.body.id === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'Please provide the category ID' }
        }
        return { status: utils.CONSTANTS.SUCCESS }
    },
    addSubCategoryValidator: (req) => {
        if (!req.body.subcategory || req.body.subcategory === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'please provide subcategory' }
        }
        if (!req.body.category || req.body.category === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'please provide category' }
        }
        return { status: utils.CONSTANTS.SUCCESS }
    },
    deleteSubCategoryValidator: (req) => {
        if (!req.body.id || req.body.id === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'Please provide the sub category ID' }
        }
        return { status: utils.CONSTANTS.SUCCESS }
    },
    addBrandValidator: (req) => {
        if (!req.body.brand || req.body.brand === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'please provide the brand' }
        }
        return { status: utils.CONSTANTS.SUCCESS }
    },
    deleteBrandValidator: (req) => {
        if (!req.body.id || req.body.id === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'Please provide the sub category ID' }
        }
        return { status: utils.CONSTANTS.SUCCESS }
    }
}