const express = require('express');
const bannerController = require('../controller/adminPanel/banners');
const fileUpload = require('../utils/mluter');

const router = express.Router();

// Creating Banner
/**
 *@swagger
/v1/banners:
 *  post:
 *    tags:
 *    - [Banner's API's]
 *    summary: "Use to Create Banner"
 *    description: "This API used for creating Banner"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Creating Banner"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              heading:
 *                  type: "multipart/form-data"
 *              subHeading:
 *                  type: "string"
 *              image:
 *                  type: "string"
 *              link:
 *                  type: "string"
 *              type:
 *                  type: "string"
 *              buttonLabel:
 *                  type: "string"
 *              buttonLink:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Banner Created Successfully"
 */

// Get single/one Banner by ID
/**
 *@swagger
 *  /v1/banners/60be7439f8e5642f8c8fb398:
 *  get:
 *    tags:
 *    - [Banner's API's]
 *    summary: "Use to find one Banner"
 *    description: "This API used to find single/one Banner"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show Banner details of specific ID"
 */

// Get All Banners
/**
 *@swagger
 *  /v1/banners:
 *  get:
 *    tags:
 *    - [Banner's API's]
 *    summary: "Use to find All Banners"
 *    description: "This API used to find All Banners"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show All the Banners"
 */

// Udpate/Patch Banner
/**
 *@swagger
 *  /v1/banners/60be7439f8e5642f8c8fb398:
 *  patch:
 *    tags:
 *    - [Banner's API's]
 *    summary: "Use to Update Banner"
 *    description: "This API used for Updating Banner"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Updating Banner"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              heading:
 *                  type: "string"
 *              subHeading:
 *                  type: "string"
 *              image:
 *                  type: "string"
 *              link:
 *                  type: "string"
 *              type:
 *                  type: "string"
 *              buttonLabel:
 *                  type: "string"
 *              buttonLink:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Banner Updated Successfully"
 */

// Delete Banner by ID
/**
 *@swagger
 *  /v1/banners/:id:
 *  delete:
 *    tags:
 *    - [Banner's API's]
 *    summary: "Use to Delete Banner by ID"
 *    description: "This API used to Delete Banner by ID"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Provide ID of Banner to delete"
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
 *        description: "Banner deleted Successfully"
 */

router
  .route('/')
  .get(bannerController.getAllBanners)
  .post(fileUpload.upload('image').single('image'), bannerController.createBanner);

router
  .route('/:id')
  .get(bannerController.getBanner)
  .patch(fileUpload.upload('image').single('image'), bannerController.updateBanner)
  .delete(bannerController.deleteBanner);

module.exports = router;
