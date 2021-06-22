const express = require('express');
const joinTeamController = require('../controller/adminPanel/joinTeam');
//const fileUpload = require('../utils/mluter');
//const { quoteValidationRules, validationFunction } = require('../utils/validation');
const router = express.Router();

// CREATE joinTeam
/**
 *@swagger
 *  /v1/teams:
 *  post:
 *    tags:
 *    - "JoinTeam"
 *    summary: "Use To create joinTeam"
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
 *  /v1/teams:
 *  get:
 *    tags:
 *    - "JoinTeam"
 *    summary: "Use To get All Teams"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */
router.route('/').post(joinTeamController.createOne).get(joinTeamController.getAll);

// GET joinTeam
/**
 *@swagger
 *  /v1/teams/{id}:
 *  get:
 *    tags:
 *    - "JoinTeam"
 *    summary: "Use To get one Team"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the Team to get
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

// UPDATE joinTeam

/**
 *@swagger
 *  /v1/teams/{id}:
 *  patch:
 *    tags:
 *    - "JoinTeam"
 *    summary: "used to update Team"
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

// DELETE joinTeam
/**
 *@swagger
 *  /v1/teams/{id}:
 *  delete:
 *    tags:
 *    - "JoinTeam"
 *    summary: "Use To delete Team"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the Team to delete
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
	.get(joinTeamController.getOne)
	.patch(joinTeamController.updateOne)
	.delete(joinTeamController.deleteOne);

module.exports = router;
