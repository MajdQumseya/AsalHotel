 // var MongoClient = require('mongodb').MongoClient;

 

 // const session = require('express-session');
 // const MongoStore = require('connect-mongo')(session);
 const passport = require('passport');
 const multer = require('multer');
 const path = require('path');
 // const dotenv = require('dotenv');
 // dotenv.load({ path: '.env.example' });
 const upload = multer({ dest: path.join('./public') });
 // const uploadProfile = multer({ dest: path.join('../uploads')})

module.exports = function(app) {
    var express = require('express');
    var router = express.Router();


app.route('/')
.get(require('../controllers/home').index)      

app.route('/hotels')
.get(require('../controllers/hotels').hotels)

app.route('/hotel_template/:id')
.get(require('../controllers/hotel_template').template)
// .post(require('../controllers/user').postBooking)
.post(require('../config/passport').isAuthenticated, require('../controllers/user').postBooking)

// app.route('/hotel_template/:id')
// .post(require('../config/passport').isAuthenticated, require('../controllers/user').postBooking)


app.route('/profile')
.get(require('../controllers/profile').profile)
    
app.route('/about')
.get(require('../controllers/about').index)

app.route('/login')
.get(require('../controllers/user').getLogin)
.post(require('../controllers/user').postLogin)

app.route('/logout')
.get(require('../controllers/user').logout) 

app.route('/forgot')
.get(require('../controllers/user').getForgot)
.post(require('../controllers/user').postForgot)

app.route('/reset/:token')
.get(require('../controllers/user').getReset)
.post(require('../controllers/user').postReset)

app.route('/signup')
.get(require('../controllers/user').getSignup)
.post(require('../controllers/user').postSignup)

app.route('/contact')
.get(require('../controllers/contact').getContact)
.post(require('../controllers/contact').postContact)

app.route('/account')
.get(require('../config/passport').isAuthenticated, require('../controllers/user').getAccount)
 
app.route('/account/profile')
.post(require('../config/passport').isAuthenticated, require('../controllers/user').postUpdateProfile)

app.route('/account/password')
.post(require('../config/passport').isAuthenticated, require('../controllers/user').postUpdatePassword)
 
app.route('/account/delete')
.post(require('../config/passport').isAuthenticated, require('../controllers/user').postDeleteAccount)

app.route('/account/unlink/:provider')
.get(require('../config/passport').isAuthenticated, require('../controllers/user').getOauthUnlink)    

    /**
     * Controllers (route handlers).
     */
    
    const passportConfig = require('../config/passport');
    const apiController = require('../controllers/api');

      
    

    
    
    /**
     * API examples routes.
     */
    app.get('/api', apiController.getApi);
    app.get('/api/lastfm', apiController.getLastfm);
    app.get('/api/nyt', apiController.getNewYorkTimes);
    app.get('/api/aviary', apiController.getAviary);
    app.get('/api/steam', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getSteam);
    app.get('/api/stripe', apiController.getStripe);
    app.post('/api/stripe', apiController.postStripe);
    app.get('/api/scraping', apiController.getScraping);
    app.get('/api/twilio', apiController.getTwilio);
    app.post('/api/twilio', apiController.postTwilio);
    app.get('/api/clockwork', apiController.getClockwork);
    app.post('/api/clockwork', apiController.postClockwork);
    app.get('/api/foursquare', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFoursquare);
    app.get('/api/tumblr', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getTumblr);
    app.get('/api/facebook', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFacebook);
    app.get('/api/github', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getGithub);
    app.get('/api/twitter', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getTwitter);
    app.post('/api/twitter', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.postTwitter);
    app.get('/api/linkedin', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getLinkedin);
    app.get('/api/instagram', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getInstagram);
    app.get('/api/paypal', apiController.getPayPal);
    app.get('/api/paypal/success', apiController.getPayPalSuccess);
    app.get('/api/paypal/cancel', apiController.getPayPalCancel);
    app.get('/api/lob', apiController.getLob);
    app.post('/profile', upload.single('myFile'), apiController.postFileUpload);
    app.get('/api/upload', apiController.getFileUpload);
    app.post('/api/upload', upload.single('myFile'), apiController.postFileUpload);
    app.get('/api/pinterest', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getPinterest);
    app.post('/api/pinterest', passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.postPinterest);
    app.get('/api/google-maps', apiController.getGoogleMaps);

    /**
     * OAuth authentication routes. (Sign in)
     */
    app.get('/auth/facebook',passport.authenticate('facebook'));
    app.get('/auth/facebook/callback',passport.authenticate('facebook', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/');
        });
    app.get('/auth/instagram', passport.authenticate('instagram'));
    app.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/login' }), (req, res) => {
        res.redirect(req.session.returnTo || '/');
    });
    app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
        res.redirect(req.session.returnTo || '/');
    });
    app.get('/auth/github', passport.authenticate('github'));
    app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
        res.redirect(req.session.returnTo || '/');
    });
    app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
        res.redirect(req.session.returnTo || '/');
    });
    app.get('/auth/twitter', passport.authenticate('twitter'));
    app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), (req, res) => {
        res.redirect(req.session.returnTo || '/');
    });
    app.get('/auth/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' }));
    app.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), (req, res) => {
        res.redirect(req.session.returnTo || '/');
    });

    /**
     * OAuth authorization routes. (API examples)
     */
    app.get('/auth/foursquare', passport.authorize('foursquare'));
    app.get('/auth/foursquare/callback', passport.authorize('foursquare', { failureRedirect: '/api' }), (req, res) => {
        res.redirect('/api/foursquare');
    });
    app.get('/auth/tumblr', passport.authorize('tumblr'));
    app.get('/auth/tumblr/callback', passport.authorize('tumblr', { failureRedirect: '/api' }), (req, res) => {
        res.redirect('/api/tumblr');
    });
    app.get('/auth/steam', passport.authorize('openid', { state: 'SOME STATE' }));
    app.get('/auth/steam/callback', passport.authorize('openid', { failureRedirect: '/login' }), (req, res) => {
        res.redirect(req.session.returnTo || '/');
    });
    app.get('/auth/pinterest', passport.authorize('pinterest', { scope: 'read_public write_public' }));
    app.get('/auth/pinterest/callback', passport.authorize('pinterest', { failureRedirect: '/login' }), (req, res) => {
        res.redirect('/api/pinterest');
    });

    
};