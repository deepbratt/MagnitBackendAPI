const express = require('express');
const quoteController = require('../controller/quote/quoteController');
const authController = require('../controller/auth/authController');
const { quoteValidationRules, validationFunction } = require('../utils/validation');
const router = express.Router();

// CREATE QUOTE
/**
 *@swagger
 *  /v1/Quote/createQuote:
 *  post:
 *    tags:
 *    - "Quote"
 *    summary: "Use To create a Quote"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Quote data"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              name:
 *                  type: "string"
 *              email:
 *                  type: "string"
 *              companyName:
 *                  type: "string"
 *              phone:
 *                  type: "string"
 *              projectDetails:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Quote created Successfully"
 */
router.post('/createQuote', quoteValidationRules, validationFunction, quoteController.addQuote);

// GET ALL QUOTES
/**
 *@swagger
 *  /v1/Quote/allQuote:
 *  get:
 *    tags:
 *    - "Quote"
 *    summary: "Use To get All Quotes"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */
router.use(authController.authenticate);
router.get('/allQuote', quoteController.getAllQuote);

/**
 *@swagger
 *  /v1/Quote/getQuote/{id}:
 *  get:
 *    tags:
 *    - "Quote"
 *    summary: "Use To one Quote"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the Quote to get
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */
router.get('/getQuote/:id', quoteController.getQuote);

module.exports = router;
