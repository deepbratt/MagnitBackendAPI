const express = require('express');
const authController = require('../controller/authController');
const { signupValidationRules, validationFunction } = require('../utils/validation');
const router = express.Router();

// SIGNUP
/**
 *@swagger
 *  /api/v1/Users/signup:
 *  post:
 *    tags:
 *    - "Signup"
 *    summary: "use for signup"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "signup data"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              firstName:
 *                  type: "string"
 *              lastName:
 *                  type: "string"
 *              email:
 *                  type: "string"
 *              phone:
 *                  type: "string"
 *              password:
 *                  type: "string"
 *              passwordConfirm:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Account created Successfully"
 */
router.post('/signup', signupValidationRules, validationFunction, authController.signup);

//LOGIN

/**
 *@swagger
 *  /api/v1/Users/login:
 *  post:
 *    tags:
 *    - "login"
 *    summary: "use for login"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "login data"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              email:
 *                  type: "string"
 *              password:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "incorrect email or password"
 *      "200":
 *        description: "you are logged in Successfully"
 */
router.post('/login', authController.login);

//LGOUT
/**
 *@swagger
 *  /api/v1/Users/logout:
 *  get:
 *    tags:
 *    - "logout"
 *    summary: "use for logout"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "operation successfull"
 */

router.get('/logout', authController.logout);
router.get('/protected', authController.authenticate, authController.protectedRoute);

module.exports = router;
