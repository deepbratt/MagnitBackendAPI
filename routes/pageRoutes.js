const express = require('express');
const pageController = require('../controller/adminPanel/pageController');
const fileUpload = require('../utils/mluter');
//const { quoteValidationRules, validationFunction } = require('../utils/validation');
const router = express.Router();

router.route('/bySlug/:slug').get(pageController.getOneBySlug);

// CREATE Page
/**
 *@swagger
 *  /v1/pages:
 *  post:
 *    tags:
 *    - "Page"
 *    summary: "Use To create Page"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Page data"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              metaData:
 *                  type: "object"
 *              sections:
 *                  type: "object"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Operation Successfull"
 */
router.route('/').post(pageController.createOne).get(pageController.getAll);

// GET ALL Pages
/**
 *@swagger
 *  /v1/pages:
 *  get:
 *    tags:
 *    - "Page"
 *    summary: "Use To get All Page"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

// GET Page
/**
 *@swagger
 *  /v1/pages/{id}:
 *  get:
 *    tags:
 *    - "Page"
 *    summary: "Use To get one Page"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the Page to get
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

// GET Page By slug
/**
 *@swagger
 *  /v1/pages/bySlug/{slug}:
 *  get:
 *    tags:
 *    - "Page"
 *    summary: "Use To get one Page"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: slug
 *        schema:
 *          type: string
 *        required: true
 *        description: slug of the Page to get
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
	.get(pageController.getOne)
	.patch(pageController.updateOne)
	.delete(pageController.deleteOne);

// UPDATE Page

/**
 *@swagger
 *  /v1/pages/{id}:
 *  patch:
 *    tags:
 *    - "Page"
 *    summary: "used to update Page"
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
 *              meyaData:
 *                  type: "object"
 *              sections:
 *                  type: "object"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "200":
 *        description: "operation Successfull"
 */

// DELETE Page
/**
 *@swagger
 *  /v1/pages/{id}:
 *  delete:
 *    tags:
 *    - "Page"
 *    summary: "Use To delete Page"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the Page to delete
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

module.exports = router;
