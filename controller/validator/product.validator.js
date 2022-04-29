const utils = require("../../utils")

module.exports = {
    addProductValidator: (req) => {
        if (!req.body.product_name || req.body.product_name === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'Please provide the product name' }
        }
        if (!req.body.product_description || req.body.product_description === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'Please provide the product description' }
        }
        if (!req.body.category || req.body.category === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'Please provide the category' }
        }
        if (!req.body.sub_category || req.body.sub_category === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'Please provide the sub category' }
        }
        if (!req.body.brand || req.body.brand === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'Please provide the brand' }
        }
        if (!req.body.cost || req.body.cost === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'Please provide cost' }
        }
        return { status: utils.CONSTANTS.SUCCESS }
    }
}