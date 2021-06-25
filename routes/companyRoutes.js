const express = require('express');
const companyController = require('../controller/adminPanel/company');
const fileUpload = require('../utils/mluter');
const router = express.Router();

// CREATE Company
/**
 *@swagger
 *  /v1/companies:
 *  post:
 *    tags:
 *    - "Company"
 *    summary: "Use To create a Company"
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
 *              locations:
 *                  type: "object"
 *              contcatUs:
 *                  type: "object"
 *              socialMedia:
 *                  type: "object"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Operation Successfull"
 */

// GET ALL Company
/**
 *@swagger
 *  /v1/companies:
 *  get:
 *    tags:
 *    - "Company"
 *    summary: "Use To get All Company"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

// GET Company
/**
 *@swagger
 *  /v1/companies/{id}:
 *  get:
 *    tags:
 *    - "Company"
 *    summary: "Use To get one Company"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the Company to get
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

// UPDATE Company

/**
 *@swagger
 *  /v1/companies/{id}:
 *  patch:
 *    tags:
 *    - "Company"
 *    summary: "used to update Company"
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
 *              locations:
 *                  type: "object"
 *              contcatUs:
 *                  type: "object"
 *              socialMedia:
 *                  type: "object"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "200":
 *        description: "operation Successfull"
 */

// DELETE Company
/**
 *@swagger
 *  /v1/companies/{id}:
 *  delete:
 *    tags:
 *    - "Company"
 *    summary: "Use To delete Company"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the Company to delete
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */
router.route('/').post(companyController.createOne).get(companyController.getAll);

router
	.route('/:id')
	.get(companyController.getOne)
	.patch(companyController.updateOne)
	.delete(companyController.deleteOne);

module.exports = router;
