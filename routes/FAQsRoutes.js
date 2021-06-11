const express = require('express');
const FAQsController = require('../controller/FAQsController');

const router = express.Router();

// Creating FAQ
/**
 *@swagger
 *  /v1/faqs:
 *  post:
 *    tags:
 *    - [FAQ's API's]
 *    summary: "Use to Create Feedback And Question"
 *    description: "This API used for creating Feedback And Question"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Creating Feedback And Question"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              questions:
 *                  type: "string"
 *              answers:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Feedback And Question Created Successfully"
 */

// Get single/one FAQ by ID
/**
 *@swagger
 *  /v1/faqs/60c262031ffe253928bcf477   :
 *  get:
 *    tags:
 *    - [FAQ's API's]
 *    summary: "Use to find one Feedback And Question"
 *    description: "This API used to find single/one Feedback And Question"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show Feedback And Question details of specific ID"
 */

// Get All FAQ's
/**
 *@swagger
 *  /v1/faqs:
 *  get:
 *    tags:
 *    - [FAQ's API's]
 *    summary: "Use to find All Feedback And Questions"
 *    description: "This API used to find All Feedback And Questions"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show All the Feedback And Questions"
 */

// Udpate/Patch Slider
/**
 *@swagger
 *  /v1/faqs/60c262031ffe253928bcf477:
 *  patch:
 *    tags:
 *    - [FAQ's API's]
 *    summary: "Use to Update Feedback and Question"
 *    description: "This API used for Updating Feedback and Question"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Updating Feedback and Question"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              questions:
 *                  type: "string"
 *              answers:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Feedback and Question Updated Successfully"
 */

// Delete FAQ by ID
/**
 *@swagger
 *  /v1/faqs/:id:
 *  delete:
 *    tags:
 *    - [FAQ'S API's]
 *    summary: "Use to Delete Feedback and Questions by ID"
 *    description: "This API used to Delete Feedback and Questions by ID"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Provide ID of Feedback and Questions to delete"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              id:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Feedback and Questions deleted Successfully"
 */

router.route('/').get(FAQsController.getAllFAQs).post(FAQsController.createFAQ);

router
  .route('/:id')
  .get(FAQsController.getFAQ)
  .patch(FAQsController.updateFAQ)
  .delete(FAQsController.deleteFAQ);

module.exports = router;
