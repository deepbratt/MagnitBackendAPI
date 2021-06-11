const express = require('express');
const servicesController = require('../controller/servicesController');
const fileUpload = require('../utils/mluter');

const router = express.Router();

// Creating Service
/**
 *@swagger
 *  /v1/services:
 *  post:
 *    tags:
 *    - [Services API's]
 *    summary: "Use to Create Service"
 *    description: "This API used for creating Service"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Creating Service"
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
 *              buttonLabel:
 *                  type: "string"
 *              buttonLink:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Service Created Successfully"
 */

// Get single/one Service by ID
/**
 *@swagger
 *  /v1/services/60be7439f8e5642f8c8fb398:
 *  get:
 *    tags:
 *    - [Services API's]
 *    summary: "Use to find one Service"
 *    description: "This API used to find single/one Service"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show Service details of specific ID"
 */

// Get All Services
/**
 *@swagger
 *  /v1/services:
 *  get:
 *    tags:
 *    - [Services API's]
 *    summary: "Use to find All Services"
 *    description: "This API used to find All Services"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show All the Services"
 */

// Udpate/Patch Service
/**
 *@swagger
 *  /v1/services/60be7439f8e5642f8c8fb398:
 *  patch:
 *    tags:
 *    - [Services API's]
 *    summary: "Use to Update Service"
 *    description: "This API used for Updating Service"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Updating Service"
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
 *              buttonLabel:
 *                  type: "string"
 *              buttonLink:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Service Updated Successfully"
 */

// Delete Service by ID
/**
 *@swagger
 *  /v1/services/:id:
 *  delete:
 *    tags:
 *    - [Services API's]
 *    summary: "Use to Delete Service by ID"
 *    description: "This API used to Delete Service by ID"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Provide ID of Service to delete"
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
 *        description: "Service deleted Successfully"
 */

router
  .route('/')
  .get(servicesController.getAllServices)
  .post(fileUpload.upload.single('image'), servicesController.createService);

router
  .route('/:id')
  .get(servicesController.getService)
  .patch(fileUpload.upload.single('image'), servicesController.updateService)
  .delete(servicesController.deleteService);

module.exports = router;
