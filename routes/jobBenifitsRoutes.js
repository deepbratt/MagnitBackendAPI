const express = require('express');
const jobBenifitController = require('../controller/adminPanel/jobBenifits');
const authController = require('../controller/auth/authController');
const fileUpload = require('../utils/mluter');
//const { uploadFile } = require('../utils/s3');
//const { quoteValidationRules, validationFunction } = require('../utils/validation');
const router = express.Router();

// CREATE JobBenifit
/**
 *@swagger
 *  /v1/jobBenifits:
 *  post:
 *    tags:
 *    - "JobBenifits"
 *    summary: "Use To create JobBenifits"
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
 *              link:
 *                  type: "string"
 *              buttonLabel:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Operation Successfull"
 */

// GET ALL Teams
/**
 *@swagger
 *  /v1/jobBenifits:
 *  get:
 *    tags:
 *    - "JobBenifits"
 *    summary: "Use To get All JobBenifits"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */
router.use(authController.authenticate);
router
	.route('/')
	.post(fileUpload.upload('image').single('icon'), jobBenifitController.createOne)
	.get(jobBenifitController.getAll);

// GET JobBenifits
/**
 *@swagger
 *  /v1/jobBenifits/{id}:
 *  get:
 *    tags:
 *    - "JobBenifits"
 *    summary: "Use To get one JobBenifit"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the JobBenifit to get
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

// UPDATE JobBenifits

/**
 *@swagger
 *  /v1/jobBenifits/{id}:
 *  patch:
 *    tags:
 *    - "JobBenifits"
 *    summary: "used to update JobBenifit"
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
 *              link:
 *                  type: "string"
 *              buttonLabel:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "200":
 *        description: "operation Successfull"
 */

// DELETE JobBenifit
/**
 *@swagger
 *  /v1/jobBenifits/{id}:
 *  delete:
 *    tags:
 *    - "JobBenifits"
 *    summary: "Use To delete JobBenifit"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the JobBenifits to delete
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
	.get(jobBenifitController.getOne)
	.patch(fileUpload.upload('image').single('icon'), jobBenifitController.updateOne)
	.delete(jobBenifitController.deleteOne);

module.exports = router;
