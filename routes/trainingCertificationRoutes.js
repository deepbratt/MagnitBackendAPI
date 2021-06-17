const express = require('express');
const trainingCertificationController = require('../controller/trainingCertification');
//const { quoteValidationRules, validationFunction } = require('../utils/validation');
const router = express.Router();

// CREATE trainingCertification
/**
 *@swagger
 *  /v1/trainingCertification:
 *  post:
 *    tags:
 *    - "trainingCertification"
 *    summary: "Use To create trainingCertification"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "trainingCertification data"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              jsonText:
 *                  type: "object"
 *              title:
 *                  type: "string"
 *              description:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Operation Successfull"
 */
router
	.route('/')
	.post(trainingCertificationController.createTrainingCertification)
	.get(trainingCertificationController.getAll);

// GET ALL Reviews
/**
 *@swagger
 *  /v1/trainingCertification:
 *  get:
 *    tags:
 *    - "trainingCertification"
 *    summary: "Use To get All trainingCertifications"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

// GET REVIEW
/**
 *@swagger
 *  /v1/trainingCertification/{id}:
 *  get:
 *    tags:
 *    - "trainingCertification"
 *    summary: "Use To get one trainingCertification"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the trainingCertification to get
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
	.get(trainingCertificationController.getOne)
	.put(trainingCertificationController.updateTrainingCertification)
	.delete(trainingCertificationController.deleteTrainingCertification);

// UPDATE trainingCertification

/**
 *@swagger
 *  /v1/trainingCertification/{id}:
 *  put:
 *    tags:
 *    - "trainingCertification"
 *    summary: "used to update trainingCertification"
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
 *              jsonText:
 *                  type: "object"
 *              title:
 *                  type: "string"
 *              description:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "200":
 *        description: "operation Successfull"
 */

// DELETE REVIEW
/**
 *@swagger
 *  /v1/trainingCertification/{id}:
 *  delete:
 *    tags:
 *    - "trainingCertification"
 *    summary: "Use To delete trainingCertification"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the trainingCertification to delete
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

module.exports = router;
