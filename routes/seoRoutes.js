const express = require('express');
const seoController = require('../controller/adminPanel/seo');
const authController = require('../controller/auth/authController');
//const fileUpload = require('../utils/mluter');
//const { quoteValidationRules, validationFunction } = require('../utils/validation');
const router = express.Router();

// CREATE seo
/**
 *@swagger
 *  /v1/seoText:
 *  post:
 *    tags:
 *    - "SeoText"
 *    summary: "Use To create seo"
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
 *              h1Detail:
 *                  type: "string"
 *              h2Detail:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Operation Successfull"
 */

// GET ALL seo's
/**
 *@swagger
 *  /v1/seoText:
 *  get:
 *    tags:
 *    - "SeoText"
 *    summary: "Use To get All seo's"
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
router.route('/').post(seoController.createOne).get(seoController.getAll);

// GET seo
/**
 *@swagger
 *  /v1/seoText/{id}:
 *  get:
 *    tags:
 *    - "SeoText"
 *    summary: "Use To get one seo"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the seo to get
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

// UPDATE seo

/**
 *@swagger
 *  /v1/seoText/{id}:
 *  patch:
 *    tags:
 *    - "SeoText"
 *    summary: "used to update seo"
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
 *              h1Detail:
 *                  type: "string"
 *              h2Detail:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "200":
 *        description: "operation Successfull"
 */

// DELETE seo
/**
 *@swagger
 *  /v1/seoText/{id}:
 *  delete:
 *    tags:
 *    - "SeoText"
 *    summary: "Use To delete seo"
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
	.get(seoController.getOne)
	.patch(seoController.updateOne)
	.delete(seoController.deleteOne);

module.exports = router;
