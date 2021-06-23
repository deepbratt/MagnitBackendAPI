const express = require('express');
const trainingCertificationController = require('../controller/adminPanel/trainingCertification');
const fileUpload = require('../utils/mluter');
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
 *              jsonFile:
 *                  type: "string"
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
	.post(
		fileUpload.upload('application/json').single('jsonFile'),
		trainingCertificationController.createTrainingCertification
	)
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
	.patch(fileUpload.upload('application/json').single('jsonFile'),trainingCertificationController.updateTrainingCertification)
	.delete(trainingCertificationController.deleteTrainingCertification);

// UPDATE trainingCertification

/**
 *@swagger
 *  /v1/trainingCertification/{id}:
 *  patch:
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
 *              jsonFile:
 *                  type: "string"
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
