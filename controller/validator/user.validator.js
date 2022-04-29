const utils = require('../../utils')
module.exports = {
    userLoginValidator: (req) => {
        if (!req.body.mobile || req.body.mobile === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'Please Provide mobile' }
        }
        if (!req.body.password || req.body.password === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'Please Provide password' }
        }
        return { status: utils.CONSTANTS.SUCCESS }
    },
    userRegisterValidator: (req) => {
        if (!req.body.email || req.body.email === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'Please Provide email' }
        }
        if (!req.body.mobile || req.body.mobile === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'Please Provide mobile' }
        }
        if (!req.body.password || req.body.password === '') {
            return { status: utils.CONSTANTS.FAILED, message: 'Please Provide password' }
        }
        return { status: utils.CONSTANTS.SUCCESS }
    }
}