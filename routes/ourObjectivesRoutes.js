const express = require('express');
const objectivesController = require('../controller/ourObjectiveController');
const fileUpload = require('../utils/mluter');
//const { quoteValidationRules, validationFunction } = require('../utils/validation');
const router = express.Router();

// CREATE OBJECTIVE
/**
 *@swagger
 *  /v1/ourObjectives:
 *  post:
 *    tags:
 *    - "OurObjectives"
 *    summary: "Use To create objectives"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "data"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              icon:
 *                  type: "string"
 *              title:
 *                  type: "string"
 *              text:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Operation Successfull"
 */

// GET ALL Objectives
/**
 *@swagger
 *  /v1/ourObjectives:
 *  get:
 *    tags:
 *    - "OurObjectives"
 *    summary: "Use To get All Reviews"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */
router
	.route('/')
	.post(fileUpload.upload.single('icon'), objectivesController.createObjective)
	.get(objectivesController.getAllObjectives);

// GET ourObjective
/**
 *@swagger
 *  /v1/ourObjectives/{id}:
 *  get:
 *    tags:
 *    - "OurObjectives"
 *    summary: "Use To get one objective"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the Objective to get
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

// UPDATE ourObjectives

/**
 *@swagger
 *  /v1/ourObjectives/{id}:
 *  put:
 *    tags:
 *    - "OurObjectives"
 *    summary: "used to update objective"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *        required: true
 *        description: objectID
 *    - in: "body"
 *      name: "body"
 *      description: "Data"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              icon:
 *                  type: "string"
 *              title:
 *                  type: "string"
 *              text:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "200":
 *        description: "operation Successfull"
 */

// DELETE ourObjectives
/**
 *@swagger
 *  /v1/ourObjectives/{id}:
 *  delete:
 *    tags:
 *    - "OurObjectives"
 *    summary: "Use To delete Objectives"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the Objectives to delete
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */
router
	.route('/:id')
	.get(objectivesController.getObjective)
	.put(fileUpload.upload.single('icon'), objectivesController.updateObjective)
	.delete(objectivesController.deleteObjective);

module.exports = router;
