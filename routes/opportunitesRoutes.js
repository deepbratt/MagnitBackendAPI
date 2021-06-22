const express = require('express');
const opportunitesController = require('../controller/adminPanel/opportunites');
//const fileUpload = require('../utils/mluter');
//const { quoteValidationRules, validationFunction } = require('../utils/validation');
const router = express.Router();

// CREATE opportunites
/**
 *@swagger
 *  /v1/opportunites:
 *  post:
 *    tags:
 *    - "Opportunites"
 *    summary: "Use To create opportunites"
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
 *              title:
 *                  type: "string"
 *              location:
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

// GET ALL opportunites
/**
 *@swagger
 *  /v1/opportunites:
 *  get:
 *    tags:
 *    - "Opportunites"
 *    summary: "Use To get All opportunites"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */
router.route('/').post(opportunitesController.createOne).get(opportunitesController.getAll);

// GET opportunite
/**
 *@swagger
 *  /v1/opportunites/{id}:
 *  get:
 *    tags:
 *    - "Opportunites"
 *    summary: "Use To get one opportunites"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the opportunites to get
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

// UPDATE opportunites

/**
 *@swagger
 *  /v1/opportunites/{id}:
 *  patch:
 *    tags:
 *    - "Opportunites"
 *    summary: "used to update opportunites"
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
 *              title:
 *                  type: "string"
 *              location:
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

// DELETE opportunites
/**
 *@swagger
 *  /v1/opportunites/{id}:
 *  delete:
 *    tags:
 *    - "Opportunites"
 *    summary: "Use To delete opportunite"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the opportunite to delete
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
	.get(opportunitesController.getOne)
	.patch(opportunitesController.updateOne)
	.delete(opportunitesController.deleteOne);

module.exports = router;
