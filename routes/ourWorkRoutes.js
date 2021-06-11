const express = require('express');
const ourWorkController = require('../controller/ourworkController');
const Ourwork = require('../model/ourWorkModel');

const router = express.Router();

// Creating Our Work
/**
 *@swagger
 *  /v1/ourwork:
 *  post:
 *    tags:
 *    - [Our Work API's]
 *    summary: "Use to Create Our Work"
 *    description: "This API used for creating Our Work"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Creating Our Work"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              image:
 *                  type: "string"
 *              title:
 *                  type: "string"
 *              description:
 *                  type: "string"
 *              buttonLink:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Our Work Created Successfully"
 */

// Get single/one Our Work Section by ID
/**
 *@swagger
 *  /v1/ourwork/60bfe6ce662235424c17e0a8:
 *  get:
 *    tags:
 *    - [Our Work API's]
 *    summary: "Use to find one Our Work"
 *    description: "This API used to find single/one Our Work"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show Our Work details of specific ID"
 */

// Get All Our Works
/**
 *@swagger
 *  /v1/ourwork:
 *  get:
 *    tags:
 *    - [Our Work API's]
 *    summary: "Use to find All Our Works"
 *    description: "This API used to find All Our Works"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show All the Our Works"
 */

// Udpate/Patch Our Work
/**
 *@swagger
 *  /v1/ourwork/60bfe6ce662235424c17e0a8:
 *  patch:
 *    tags:
 *    - [Our Work API's]
 *    summary: "Use to Update Our Work"
 *    description: "This API used for Updating Our Work"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Updating Our Work"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              image:
 *                  type: "string"
 *              title:
 *                  type: "string"
 *              description:
 *                  type: "string"
 *              buttonLink:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Our Work Updated Successfully"
 */

// Delete Our Work by ID
/**
 *@swagger
 *  /v1/ourwork/60bfe6ce662235424c17e0a8:
 *  delete:
 *    tags:
 *    - [Our Work API's]
 *    summary: "Use to Delete Our Work by ID"
 *    description: "This API used to Delete Our Work by ID"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Provide ID of Our Work to delete"
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
 *        description: "Our Work deleted Successfully"
 */

router
  .route('/')
  .get(ourWorkController.getAllOurWorks)
  .post(ourWorkController.createOurWork);

router
  .route('/:id')
  .get(ourWorkController.getOurWork)
  .patch(ourWorkController.updateOurWork)
  .delete(ourWorkController.deleteOurWork);

module.exports = router;
