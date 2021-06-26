const express = require('express');
const  solutionsController = require('../controller/adminPanel/ourSolutions');
const fileUpload = require('../utils/mluter');
//const { quoteValidationRules, validationFunction } = require('../utils/validation');
const router = express.Router();

// CREATE OURSOLUTION
/**
 *@swagger
 *  /v1/ourSolutions:
 *  post:
 *    tags:
 *    - "ourSolutions"
 *    summary: "Use To create solution"
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
 *              image:
 *                  type: "string"
 *              title:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Operation Successfull"
 */

// GET ALL
/**
 *@swagger
 *  /v1/ourSolutions:
 *  get:
 *    tags:
 *    - "ourSolutions"
 *    summary: "Use To get All SOLUTIONS"
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
	.post(fileUpload.upload('image').single('image'),  solutionsController.createOne)
	.get( solutionsController.getAll);

// GET ONE
/**
 *@swagger
 *  /v1/ourSolutions/{id}:
 *  get:
 *    tags:
 *    - "ourSolutions"
 *    summary: "Use To get one SOLUTION"
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

// UPDATE

/**
 *@swagger
 *  /v1/ourSolutions/{id}:
 *  patch:
 *    tags:
 *    - "ourSolutions"
 *    summary: "used to update SOLUTION"
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
 *              image:
 *                  type: "string"
 *              title:
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
 *  /v1/ourSolutions/{id}:
 *  delete:
 *    tags:
 *    - "ourSolutions"
 *    summary: "Use To delete SOLUTION"
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
	.get( solutionsController.getOne)
	.patch(fileUpload.upload('image').single('image'),  solutionsController.updateOne)
	.delete( solutionsController.deleteOne);

module.exports = router;
