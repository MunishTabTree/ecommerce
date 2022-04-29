const utils = require('../utils');
const validator = require('./validator');
const db = require('../model')
module.exports = {
    userLogin: async (req, res) => {
        const validateInput = validator.UserValidator.userLoginValidator(req);
        if (validateInput.status === utils.CONSTANTS.FAILED) {
            return res.json(validateInput)
        } else {
            const checkUser = await db.user.findOne({ where: { mobile: req.body.mobile, password: req.body.password } });
            if (checkUser) {
                return res.json({
                    status: utils.CONSTANTS.SUCCESS,
                    message: utils.CONSTANTS.LOGIN_SUCCESS
                })
            } else {
                return res.json({
                    status: utils.CONSTANTS.FAILED,
                    message: utils.CONSTANTS.INVALID_LOGIN
                })
            }
        }
    },
    userRegister: async (req, res) => {
        console.log(req.body)
        const validateInput = validator.UserValidator.userRegisterValidator(req);
        if (validateInput.status === utils.CONSTANTS.FAILED) {
            return res.json(validateInput)
        } else {
            const checkUser = await db.user.findOne({ where: { mobile: req.body.mobile } })
            if (checkUser) {
                return res.json({
                    status: utils.CONSTANTS.FAILED,
                    message: utils.CONSTANTS.MOBILE_ALREADY_EXIST
                })
            } else {
                const createUser = await db.user.create({
                    email: req.body.email,
                    mobile: req.body.mobile,
                    password: req.body.password
                })
                return res.json({
                    status: utils.CONSTANTS.SUCCESS,
                    message: utils.CONSTANTS.USER_REGISTERED_SUCCESS
                })
            }
        }
    },
    verifyMobile: async (req, res) => {

    },
    verifyMobileOTP: async (req, res) => {

    },
    verifyEmail: async (req, res) => {

    },
    verifyEmailOTP: async (req, res) => {

    }
}