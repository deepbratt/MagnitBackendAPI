const express = require('express');
const HiringController = require('../controller/adminPanel/hiringOptions');
const authController = require('../controller/auth/authController');
const router = express.Router();

// Creating Hiring Option
/**
 *@swagger
 *  /v1/hiringOptions:
 *  post:
 *    tags:
 *    - [Hiring Options API's]
 *    summary: "Use to Create Hiring Option"
 *    description: "This API used for creating Hiring Option"
 *    consumes:
 *    - "multipart/form-data"
 *    produces:
 *    - "multipart/form-data"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Creating Hiring Option"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              heading:
 *                  type: "string"
 *              text:
 *                  type: "string"
 *              items:
 *                  type: "array"
 *              buttonLink:
 *                  type: "string"
 *              buttonLabel:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Hiring Option Created Successfully"
 */

// Get single/one Hiring Option by ID
/**
 *@swagger
 *  /v1/hiringOptions/:id:
 *  get:
 *    tags:
 *    - [Hiring Options API's]
 *    summary: "Use to find one Hiring Option"
 *    description: "This API used to find single/one Hiring Option"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show Hiring Option details of specific ID"
 */

// Get All Hiring Option
/**
 *@swagger
 *  /v1/hiringOptions:
 *  get:
 *    tags:
 *    - [Hiring Options API's]
 *    summary: "Use to find All Hiring Options"
 *    description: "This API used to find All Hiring Options"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show All the Hiring Options"
 */

// Udpate/Patch Hiring Option
/**
 *@swagger
 *  /v1/hiringOptions/:id:
 *  patch:
 *    tags:
 *    - [Hiring Options API's]
 *    summary: "Use to Update Hiring Option"
 *    description: "This API used for Updating Hiring Option"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Updating Hiring Option"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              heading:
 *                  type: "string"
 *              text:
 *                  type: "string"
 *              items:
 *                  type: "array"
 *              buttonLabel:
 *                  type: "string"
 *              buttonLink:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Hiring Option Updated Successfully"
 */

// Delete Hiring Option by ID
/**
 *@swagger
 *  /v1/hiringOptions/:id:
 *  delete:
 *    tags:
 *    - [Hiring Options API's]
 *    summary: "Use to Delete Hiring Option by ID"
 *    description: "This API used to Delete Hiring Option by ID"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Provide ID of Hiring Option to delete"
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
 *        description: "Hiring Option deleted Successfully"
 */
router.use(authController.authenticate);
router
  .route('/')
  .get(HiringController.getAllHiringOptions)
  .post(HiringController.createHiringOption);

router
  .route('/:id')
  .get(HiringController.getHiringOption)
  .patch(HiringController.updateHiringOption)
  .delete(HiringController.deleteHiringOption);

module.exports = router;
