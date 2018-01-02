import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
import * as passportConfig from '../passport/passport';
import passport from 'passport';
const router = new Router();

// login
router.route('/login').get(UserController.getLogin);
router.route('/login').get(UserController.postLogin);

// logout
router.route('/logout').get(UserController.logout);

// forget password
router.route('/forgot').get(UserController.getForgot);
router.route('/forgot').post(UserController.postForgot);

// token reset
router.route('/reset/:token').get(UserController.getReset);
router.route('/reset/:token').post(UserController.postReset);

// signup
router.route('/signup').get(UserController.getSignup);
router.route('/signup').post(UserController.postSignup);

// account info
router.route('/account').get(passportConfig.isAuthenticated, UserController.getAccount);
router.route('/account/profile').post(passportConfig.isAuthenticated, UserController.postUpdateProfile);
router.route('/account/password').post(passportConfig.isAuthenticated, UserController.postUpdatePassword);
router.route('/account/delete').post(passportConfig.isAuthenticated, UserController.postDeleteAccount);

// Delete a post by provider
router.route('/account/unlink/:provider').get(passportConfig.isAuthenticated, UserController.getOauthUnlink);

/**
 * OAuth authentication routes. (Sign in)
 */
router.route('/auth/facebook').get(passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
router.route('/auth/facebook/callback').get(passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
  res.redirect(req.session.returnTo || '/');
});
router.route('/auth/google').get(passport.authenticate('google', { scope: 'profile email' }));
router.route('/auth/google/callback').get(passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect(req.session.returnTo || '/');
});




export default router;
