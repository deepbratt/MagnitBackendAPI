const express = require('express');
const adminPanelController = require('../controller/appAdminPanelController');
const fileUpload = require('../utils/mluter');
//const { quoteValidationRules, validationFunction } = require('../utils/validation');
const router = express.Router();

// CREATE PANEL
/**
 *@swagger
 *  /v1/adminPanel/create:
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
router.post('/create', fileUpload.upload.single('image'), adminPanelController.createAdminPanel);

// GET ALL Panels
/**
 *@swagger
 *  /v1/adminPanel/getAll:
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
router.get('/getAll', adminPanelController.getAll);

// GET Admin Panel
/**
 *@swagger
 *  /v1/adminPanel/getOne/{id}:
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
router.get('/getOne/:id', adminPanelController.getOne);

// UPDATE Admin Panel

/**
 *@swagger
 *  /v1/adminPanel/update/{id}:
 *  put:
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

router.put('/update/:id', fileUpload.upload.single('image'), adminPanelController.updatePanel);

// DELETE Admin Panel
/**
 *@swagger
 *  /v1/adminPanel/delete/{id}:
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
router.delete('/delete/:id', adminPanelController.deletePanel);

module.exports = router;
