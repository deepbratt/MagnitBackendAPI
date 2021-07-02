const express = require('express');
const benifitsController = require('../controller/adminPanel/benifits');
const authController = require('../controller/auth/authController');
const fileUpload = require('../utils/mluter');

const router = express.Router();

// Creating Benifit Section
/**
 *@swagger
 *  /v1/benifits:
 *  post:
 *    tags:
 *    - [Benifit Section API's]
 *    summary: "Use to Create Benifit Section"
 *    description: "This API used for creating Benifit Section"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Creating Benifit Section"
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
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Benifit Section Created Successfully"
 */

// Get single/one Benifit Section by ID
/**
 *@swagger
 *  /v1/benifits/60bfd124762ce94784f0ccdf:
 *  get:
 *    tags:
 *    - [Benifit Section API's]
 *    summary: "Use to find one Benifit Section"
 *    description: "This API used to find single/one Benifit Section"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show Benifit Section details of specific ID"
 */

// Get All Benfit Sections
/**
 *@swagger
 *  /v1/benifits:
 *  get:
 *    tags:
 *    - [Benifit Section API's]
 *    summary: "Use to find All Benifits Sections"
 *    description: "This API used to find All Benifits Sections"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show All the Benifits Section"
 */

// Udpate/Patch Benifit section
/**
 *@swagger
 *  /v1/benifits/60bfd124762ce94784f0ccdf:
 *  patch:
 *    tags:
 *    - [Benifit Section API's]
 *    summary: "Use to Update Benifit Section"
 *    description: "This API used for Updating Benifit Section"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Updating Benifit Section"
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
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Benifit Section Updated Successfully"
 */

// Delete Benifit Section by ID
/**
 *@swagger
 *  /v1/benifits/:id:
 *  delete:
 *    tags:
 *    - [Benifit Section API's]
 *    summary: "Use to Delete Benifit Section by ID"
 *    description: "This API used to Delete Benifit Section by ID"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Provide ID of Benifit Section to delete"
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
 *        description: "Benifit Section deleted Successfully"
 */
router.use(authController.authenticate);
router
  .route('/')
  .get(benifitsController.getAllBenifits)
  .post(fileUpload.upload('image').single('image'), benifitsController.createBenifit);

router
  .route('/:id')
  .get(benifitsController.getBenifit)
  .patch(fileUpload.upload('image').single('image'), benifitsController.updateBenifit)
  .delete(benifitsController.deleteBenifit);

module.exports = router;
