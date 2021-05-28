const express = require('express');
const emailController = require('../controller/emailController');
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
 *              firstName:
 *                  type: "string"
 *              lastName:
 *                  type: "string"
 *              email:
 *                  type: "string"
 *    responses:
 *      "200":
 *        description: "Operation Successfull"
 */

router.post('/subscribe', emailController.userSubscribe);

module.exports = router;
