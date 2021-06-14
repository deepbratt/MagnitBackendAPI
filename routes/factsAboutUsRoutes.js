const express = require('express');
const factsController = require('../controller/factsAboutUsController');
const fileUpload = require('../utils/mluter');

const router = express.Router();

// Creating Facts About Us
/**
 *@swagger
/v1/factsAboutUs:
 *  post:
 *    tags:
 *    - [Facts About Us API's]
 *    summary: "Use to Create Fact about us"
 *    description: "This API used for creating Fact about us"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Creating Fact about us"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              icon:
 *                  type: "multipart/form-data"
 *              title:
 *                  type: "string"
 *              text:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Fact about us Created Successfully"
 */

// Get single/one Fact About Us by ID
/**
 *@swagger
 *  /v1/factsAboutUs/60be7439f8e5642f8c8fb398:
 *  get:
 *    tags:
 *    - [Facts About Us API's]
 *    summary: "Use to find one Fact About Us"
 *    description: "This API used to find single/one Fact About Us"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show Fact About Us details of specific ID"
 */

// Get All Facts About Us
/**
 *@swagger
 *  /v1/factsAboutUs:
 *  get:
 *    tags:
 *    - [Facts About Us API's]
 *    summary: "Use to find All Facts About Us"
 *    description: "This API used to find All Facts About Us"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show All the Facts About Us"
 */

// Udpate/Patch Fact About Us
/**
 *@swagger
 *  /v1/factsAboutUs/60be7439f8e5642f8c8fb398:
 *  patch:
 *    tags:
 *    - [Facts About Us API's]
 *    summary: "Use to Update Fact About Us"
 *    description: "This API used for Updating Fact About Us"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Updating Fact About Us"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              icon:
 *                  type: "multipart/form-data"
 *              title:
 *                  type: "string"
 *              text:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Fact About Us Updated Successfully"
 */

// Delete Fact About Us by ID
/**
 *@swagger
 *  /v1/factsAboutUs/:id:
 *  delete:
 *    tags:
 *    - [Facts About Us API's]
 *    summary: "Use to Delete Fact About Us by ID"
 *    description: "This API used to Delete Fact About Us by ID"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Provide ID of Fact About Us to delete"
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
 *        description: "Fact About Us deleted Successfully"
 */

router
  .route('/')
  .get(factsController.getAllFactsAboutUs)
  .post(fileUpload.upload.single('icon'), factsController.createFactsAboutUs);

router
  .route('/:id')
  .get(factsController.getFactAboutUs)
  .patch(fileUpload.upload.single('icon'), factsController.updateFactAboutUs)
  .delete(factsController.deleteFactAboutUs);

module.exports = router;
