const express = require('express');
const emailController = require('../controller/email/emailController');
const { quoteValidationRules, validEmail, validationFunction } = require('../utils/validation');
const router = express.Router();

//Email

/**
 *@swagger
 *  /v1/Email/subscribe:
 *  post:
 *    tags:
 *    - "Subscribe"
 *    summary: "Use for user subscription"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "user data"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              email:
 *                  type: "string"
 *    responses:
 *      "200":
 *        description: "Operation Successfull"
 */

// router.post('/subscribe', validEmail, validationFunction, emailController.userSubscribe);


module.exports = router;
