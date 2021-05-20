const express = require('express');
const quoteController = require('../controller/quoteController');
const router = express.Router();

// CREATE QUOTE
/**
 *@swagger
 *  /api/v1/Quote/createQuote:
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
router.post('/createQuote', quoteController.addQuote);

// GET ALL QUOTES
/**
 *@swagger
 *  /api/v1/Quote/allQuote:
 *  get:
 *    tags:
 *    - "All Quotes"
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
router.get('/allQuote', quoteController.getAllQuote);

router.get('/getQuote/:id', quoteController.getQuote);

module.exports = router;
