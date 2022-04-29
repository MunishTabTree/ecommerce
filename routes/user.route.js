const express = require('express');
const controller = require('../controller')

const router = express.Router();

/**
 * Landing Routes
 */
router.get('/', (req, res) => { res.render('user/index') });
router.get('/login', (req, res) => { res.render('user/login') });
router.get('/register', (req, res) => { res.render('user/register') });



/**
 * API Routes
 */
router.post('/api/register', (req, res) => { controller.User.userRegister(req, res) });
router.post('/api/login', (req, res) => { controller.User.userLogin(req, res) });

module.exports = router;