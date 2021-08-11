const express = require('express');
const adminPanelController = require('../controller/adminPanel/appAdminPanel');
const authController = require('../controller/auth/authController');
const fileUpload = require('../utils/mluter');
//const { quoteValidationRules, validationFunction } = require('../utils/validation');
const router = express.Router();

// CREATE PANEL
/**
 *@swagger
 *  /v1/adminPanel:
 *  post:
 *    tags:
 *    - "Admin Panel"
 *    summary: "Use To create a Admin Panel"
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
 *              description:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Operation Successfull"
 */
router.use(authController.authenticate);
router
	.route('/')
	.post(fileUpload.upload('image').single('image'), adminPanelController.createAdminPanel)
	.get(adminPanelController.getAll);

// GET ALL Panels
/**
 *@swagger
 *  /v1/adminPanel:
 *  get:
 *    tags:
 *    - "Admin Panel"
 *    summary: "Use To get All Admin Panel"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

// GET Admin Panel
/**
 *@swagger
 *  /v1/adminPanel/{id}:
 *  get:
 *    tags:
 *    - "Admin Panel"
 *    summary: "Use To get one Admin Panel"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the Admin Panel to get
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
	.get(adminPanelController.getOne)
	.patch(fileUpload.upload('image').single('image'), adminPanelController.updatePanel)
	.delete(adminPanelController.deletePanel);

// UPDATE Admin Panel

/**
 *@swagger
 *  /v1/adminPanel/{id}:
 *  patch:
 *    tags:
 *    - "Admin Panel"
 *    summary: "used to update Admin Panel"
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
 *              description:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "200":
 *        description: "operation Successfull"
 */

// DELETE Admin Panel
/**
 *@swagger
 *  /v1/adminPanel/{id}:
 *  delete:
 *    tags:
 *    - "Admin Panel"
 *    summary: "Use To delete Admin Panel"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the Admin Panel to get
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

module.exports = router;
