const express = require('express');
const appSolutionController = require('../controller/adminPanel/appSolution');
const fileUpload = require('../utils/mluter');
const router = express.Router();

// CREATE App Solution
/**
 *@swagger
 *  /v1/appSolutions:
 *  post:
 *    tags:
 *    - "App Solution"
 *    summary: "Use To create a App Solution"
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
 *              dataArray:
 *                  type: "[]"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Operation Successfull"
 */

 // GET ALL App Solution
/**
 *@swagger
 *  /v1/appSolutions:
 *  get:
 *    tags:
 *    - "App Solution"
 *    summary: "Use To get All App Solution"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

// GET App Solution
/**
 *@swagger
 *  /v1/appSolutions/{id}:
 *  get:
 *    tags:
 *    - "App Solution"
 *    summary: "Use To get one App Solution"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the App Solution to get
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

 // UPDATE Admin Panel

/**
 *@swagger
 *  /v1/appSolutions/{id}:
 *  patch:
 *    tags:
 *    - "App Solution"
 *    summary: "used to update App Solution"
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
 *              dataArray:
 *                  type: "[]"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "200":
 *        description: "operation Successfull"
 */

// DELETE App Solution
/**
 *@swagger
 *  /v1/appSolutions/{id}:
 *  delete:
 *    tags:
 *    - "App Solution"
 *    summary: "Use To delete App Solution"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the App Solution to delete
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */
router.route('/').post(appSolutionController.createOne).get(appSolutionController.getAll);

router
	.route('/:id')
	.get(appSolutionController.getOne)
	.patch(appSolutionController.updateOne)
	.delete(appSolutionController.deleteOne);

module.exports = router;
