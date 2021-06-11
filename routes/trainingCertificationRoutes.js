const express = require('express');
const trainingCertificationController = require('../controller/trainingCertification');
//const { quoteValidationRules, validationFunction } = require('../utils/validation');
const router = express.Router();

// CREATE trainingCertification
/**
 *@swagger
 *  /v1/trainingCertification/create:
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
router.post('/create',trainingCertificationController.createTrainingCertification);

// GET ALL Reviews
/**
 *@swagger
 *  /v1/trainingCertification/getAll:
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
router.get('/getAll', trainingCertificationController.getAll);

// GET REVIEW
/**
 *@swagger
 *  /v1/trainingCertification/getOne/{id}:
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
router.get('/getOne/:id', trainingCertificationController.getOne);

// UPDATE trainingCertification

/**
 *@swagger
 *  /v1/trainingCertification/update/{id}:
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

router.put('/update/:id', trainingCertificationController.updateTrainingCertification);

// DELETE REVIEW
/**
 *@swagger
 *  /v1/trainingCertification/delete/{id}:
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
router.delete('/delete/:id', trainingCertificationController.deleteTrainingCertification);

module.exports = router;
