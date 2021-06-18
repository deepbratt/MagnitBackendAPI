const express = require('express');
const workflowController = require('../controller/adminPanel/workflow');
const fileUpload = require('../utils/mluter');

const router = express.Router();

// Creating Workflow
/**
 *@swagger
/v1/workflows:
 *  post:
 *    tags:
 *    - [Workflow's API's]
 *    summary: "Use to Create Workflow"
 *    description: "This API used for creating Workflow"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Creating Workflow"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              image:
 *                  type: "multipart/form-data"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Workflow Created Successfully"
 */

// Get single/one Workflow by ID
/**
 *@swagger
 *  /v1/workflows/60be7439f8e5642f8c8fb398:
 *  get:
 *    tags:
 *    - [Workflow's API's]
 *    summary: "Use to find one Workflow"
 *    description: "This API used to find single/one Workflow"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show Workflow details of specific ID"
 */

// Get All Workflows
/**
 *@swagger
 *  /v1/workflows:
 *  get:
 *    tags:
 *    - [Workflow's API's]
 *    summary: "Use to find All Workflows"
 *    description: "This API used to find All Workflows"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show All the Workflows"
 */

// Udpate/Patch Workflow
/**
 *@swagger
 *  /v1/workflows/60be7439f8e5642f8c8fb398:
 *  patch:
 *    tags:
 *    - [Workflow's API's]
 *    summary: "Use to Update Workflow"
 *    description: "This API used for Updating Workflow"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Updating Workflow"
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
 *        description: "Workflow Updated Successfully"
 */

// Delete Workflow by ID
/**
 *@swagger
 *  /v1/workflows/:id:
 *  delete:
 *    tags:
 *    - [Workflow's API's]
 *    summary: "Use to Delete Workflow by ID"
 *    description: "This API used to Delete Workflow by ID"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Provide ID of Workflow to delete"
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
 *        description: "Workflow deleted Successfully"
 */

router
  .route('/')
  .get(workflowController.getAllWorkflows)
  .post(fileUpload.upload('image').single('image'), workflowController.createWorkflow);

router
  .route('/:id')
  .get(workflowController.getWorkflow)
  .patch(fileUpload.upload('image').single('image'), workflowController.updateWorkflow)
  .delete(workflowController.deleteWorkflow);

module.exports = router;
