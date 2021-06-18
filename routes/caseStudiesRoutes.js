const express = require('express');
const caseStudiesController = require('../controller/adminPanel/caseStudies');
const fileUpload = require('../utils/mluter');

const router = express.Router();

// Creating Case Study Section
/**
 *@swagger
 *  /v1/casestudies:
 *  post:
 *    tags:
 *    - [Case Studies Section API's]
 *    summary: "Use to Create Case Study Section"
 *    description: "This API used for creating Case Study Section"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Creating Case Study Section"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              title:
 *                  type: "string"
 *              text:
 *                  type: "string"
 *              icon:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Case Study Section Created Successfully"
 */

// Get single/one Case Study Section by ID
/**
 *@swagger
 *  /v1/casestudies/60bfd124762ce94784f0ccdf:
 *  get:
 *    tags:
 *    - [Case Studies Section API's]
 *    summary: "Use to find one Case Study Section"
 *    description: "This API used to find single/one Case Study Section"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show Case Study Section details of specific ID"
 */

// Get All Case Studies Sections
/**
 *@swagger
 *  /v1/casestudies:
 *  get:
 *    tags:
 *    - [Case Studies Section API's]
 *    summary: "Use to find All Case Studies Sections"
 *    description: "This API used to find All Case Studies Sections"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show All the Case Studies Section"
 */

// Udpate/Patch Case Study section
/**
 *@swagger
 *  /v1/casestudies/60bfd124762ce94784f0ccdf:
 *  patch:
 *    tags:
 *    - [Case Studies Section API's]
 *    summary: "Use to Update Case Study Section"
 *    description: "This API used for Updating Case Study Section"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Updating Case Study Section"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              title:
 *                  type: "string"
 *              text:
 *                  type: "string"
 *              icon:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Case Study Section Updated Successfully"
 */

// Delete Case Study Section by ID
/**
 *@swagger
 *  /v1/casestudies/:id:
 *  delete:
 *    tags:
 *    - [Case Studies Section API's]
 *    summary: "Use to Delete Case Study Section by ID"
 *    description: "This API used to Delete Case Study Section by ID"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Provide ID of Case Study Section to delete"
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
 *        description: "Case Study Section deleted Successfully"
 */

router
  .route('/')
  .get(caseStudiesController.getAllCaseStudies)
  .post(
    fileUpload.upload('image').single('icon'),
    caseStudiesController.createCaseStudy,
  );

router
  .route('/:id')
  .get(caseStudiesController.getCaseStudy)
  .patch(
    fileUpload.upload('image').single('icon'),
    caseStudiesController.updateCaseStudy,
  )
  .delete(caseStudiesController.deleteCaseStudy);

module.exports = router;
