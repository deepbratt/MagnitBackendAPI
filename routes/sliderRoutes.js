const express = require('express');
const sliderController = require('../controller/sliderController');
const fileUpload = require('../utils/mluter');

const router = express.Router();

// Creating Slider
/**
 *@swagger
/v1/sliders:
 *  post:
 *    tags:
 *    - [Slider API's]
 *    summary: "Use to Create Slider"
 *    description: "This API used for creating Slider"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Creating Slider"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              backgroundImage:
 *                  type: "string"
 *              title:
 *                  type: "string"
 *              items:
 *                  type: "string"
 *              buttonLabel:
 *                  type: "string"
 *              buttonLink:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Slider Created Successfully"
 */

// Get single/one Slider by ID
/**
 *@swagger
 *  /v1/sliders/60be7439f8e5642f8c8fb398:
 *  get:
 *    tags:
 *    - [Slider API's]
 *    summary: "Use to find one Slider"
 *    description: "This API used to find single/one Slider"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show Slider details of specific ID"
 */

// Get All Sliders
/**
 *@swagger
 *  /v1/sliders:
 *  get:
 *    tags:
 *    - [Slider API's]
 *    summary: "Use to find All Sliders"
 *    description: "This API used to find All Sliders"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show All the Sliders"
 */

// Udpate/Patch Slider
/**
 *@swagger
 *  /v1/sliders/60be7439f8e5642f8c8fb398:
 *  patch:
 *    tags:
 *    - [Slider API's]
 *    summary: "Use to Update Slider"
 *    description: "This API used for Updating Slider"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Updating Slider"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              backgroundImage:
 *                  type: "string"
 *              title:
 *                  type: "string"
 *              items:
 *                  type: "string"
 *              buttonLabel:
 *                  type: "string"
 *              buttonLink:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Slider Updated Successfully"
 */

// Delete Slider by ID
/**
 *@swagger
 *  /v1/sliders/:id:
 *  delete:
 *    tags:
 *    - [Slider API's]
 *    summary: "Use to Delete Slider by ID"
 *    description: "This API used to Delete Slider by ID"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Provide ID of slider to delete"
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
 *        description: "Slider deleted Successfully"
 */

router
  .route('/')
  .get(sliderController.getAllSliders)
  .post(
    fileUpload.upload.single('backgroundImage'),
    sliderController.createSlider,
  );

router
  .route('/:id')
  .get(sliderController.getSlider)
  .patch(
    fileUpload.upload.single('backgroundImage'),
    sliderController.updateSlider,
  )
  .delete(sliderController.deleteSlider);

module.exports = router;
