const express = require('express');
const router = express.Router();
const User = require('../models/User');
const alertMessage = require('../helpers/messenger');
var bcrypt = require('bcryptjs');
const passport = require('passport');


// Login&Signup Form POST => /user/LoginSignUp
router.post('/LoginSignUp', (req, res, next) => {
    //passport.authenticate('local', {
    //    successRedirect: '/', // Route to /video/listVideos URL
    //    failureRedirect: '/showLoginSignUp', // Route to /login URL
    //    failureFlash: true
        /* Setting the failureFlash option to true instructs Passport to flash an error
        message using the message given by the strategy's verify callback, if any.
        When a failure occur passport passes the message object as error */
    //})(req, res, next);

    let errors = [];
    // Retrieves fields from register page from request body
    let { email, password, password2, weight, height } = req.body;

    // Checks if both passwords entered are the same
    if (password !== password2) {
        errors.push({ text: 'Passwords do not match' });
    }

    // Checks that password length is more than 4
    if (password.length < 8) {
        errors.push({ text: 'Password must be at least 8 characters' });
    }
    /*if (errors.length > 0) {
        res.render('user/LoginSignUp', {
            errors,
            email,
            password,
            password2,
            weight,
            height
        });
    } else {
        // If all is well, checks if user is already registered
        User.findOne({ where: { email: req.body.email } })
            .then(user => {
                if (user) {
                    // If user is found, that means email has already been
                    // registered
                    res.render('user/LoginSignUp', {
                        error: user.email + ' already registered',
                        email,
                        password,
                        password2,
                        weight,
                        height
                    });
                } else {
                    // Encrypt the password
                    var salt = bcrypt.genSaltSync(10);
                    var hashedPassword = bcrypt.hashSync(password, salt);
                    password = hashedPassword;

                    // Create new user record
                    User.create({ email, password })
                        .then(user => {
                            alertMessage(res, 'success', user.name + ' added. Please login', 'fas fa-sign-in-alt', true);
                            res.redirect('/LoginSignUp');
                        })
                        .catch(err => console.log(err));
                }
            });
    }*/
});


router.post('', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.post('/ForgetPass', (req, res) => {
	res.render('../views/user/ForgetPass') // get out of user.js and enter views/user/ForgetPass.handlebars to render
});

router.post('/AdminLogin', (req, res) => {
	res.render('../views/user/AdminLogin') // get out of user.js and enter views/user/AdminLogin.handlebars to render
});

module.exports = router;