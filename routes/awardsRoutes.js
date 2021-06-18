const express = require('express');
const awardsController = require('../controller/adminPanel/awards');
const fileUpload = require('../utils/mluter');
const router = express.Router();

// Creating Award
/**
 *@swagger
 *  /v1/awards:
 *  post:
 *    tags:
 *    - [Award's API's]
 *    summary: "Use to Create Award"
 *    description: "This API used for creating Award"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Creating Award"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              clientName:
 *                  type: "string"
 *              image:
 *                  type: "string"
 *              link:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Award Created Successfully"
 */

// Get single/one Award by ID
/**
 *@swagger
 *  /v1/awards/60c12b642ab48d1a647f99c6:
 *  get:
 *    tags:
 *    - [Award's API's]
 *    summary: "Use to find one Award"
 *    description: "This API used to find single/one Award"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show Award details of specific ID"
 */

// Get All Award
/**
 *@swagger
 *  /v1/awards:
 *  get:
 *    tags:
 *    - [Award's API's]
 *    summary: "Use to find All Awards"
 *    description: "This API used to find All Awards"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show All the Awards"
 */

// Udpate/Patch Award
/**
 *@swagger
 *  /v1/awards/60c12b642ab48d1a647f99c6:
 *  patch:
 *    tags:
 *    - [Award's API's]
 *    summary: "Use to Update Award"
 *    description: "This API used for Updating Award"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Updating Award"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              clientName:
 *                  type: "string"
 *              image:
 *                  type: "string"
 *              link:
 *                  type: "string"

 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Award Updated Successfully"
 */

// Delete Award by ID
/**
 *@swagger
 *  /v1/awards/:id:
 *  delete:
 *    tags:
 *    - [Award's API's]
 *    summary: "Use to Delete Award by ID"
 *    description: "This API used to Delete Award by ID"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Provide ID of Award to delete"
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
 *        description: "Award deleted Successfully"
 */

router
  .route('/')
  .get(awardsController.getAllAwards)
  .post(fileUpload.upload('image').single('image'), awardsController.createAward);

router
  .route('/:id')
  .get(awardsController.getAward)
  .patch(fileUpload.upload('image').single('image'), awardsController.updateAward)
  .delete(awardsController.deleteAward);

module.exports = router;
