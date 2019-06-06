const express = require('express');
const router = express.Router();
const alertMessage = require('../helpers/messenger')

router.get('/', (req, res) => {
	const title = 'Video Jotter';
	res.render('index', { title: title }) // renders views/index.handlebars
});

// Logout User
router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

router.get('/about', (req, res) => {

	let success_msg = 'Success message';
	let error_msg = 'Error message using error_msg';

	alertMessage(res, 'success',
		'This is an important message', 'fas fa-sign-in-alt', true);
	alertMessage(res, 'danger',
		'Unauthorised access', 'fas fa-exclamation-circle', false);

	var errorTexts = [
		{ text: "Error message using error object" },
		{ text: "First error message🙅‍♀️" },
		{ text: "Second error message 🚫" },
		{ text: "Third error message⛔" }
	];


	var dev_name = "🧐 Happy 脸😀"
	res.render('about', {
		developer_name: dev_name,
		success_msg: success_msg,
		error_msg: error_msg,
		errors: errorTexts
	}) // renders views/about.handlebars
});

router.get('/showLogin', (req, res) => {
	res.render('user/login') // renders views/user/login.handlebars
});

router.get('/showRegister', (req, res) => {
	res.render('user/register') // renders views/register.handlebars
});

router.get('/blog', (req, res) => {
	res.render('blog') 
});

router.get('/404', (req, res) => {
	res.render('404') 
});
router.get('/about', (req, res) => {
	res.render('about') 
});
router.get('/blog-single', (req, res) => {
	res.render('blog') 
});
router.get('/cart', (req, res) => {
	res.render('cart') 
});
router.get('/checkout', (req, res) => {
	res.render('checkout') 
});
router.get('/contactus', (req, res) => {
	res.render('contact-us') 
});
router.get('/login', (req, res) => {
	res.render('login') 
});
router.get('/productdetails', (req, res) => {
	res.render('product-details') 
});
router.get('/shop', (req, res) => {
	res.render('shop') 
});
module.exports = router;
