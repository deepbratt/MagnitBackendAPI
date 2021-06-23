const express = require('express');
const reviewController = require('../controller/adminPanel/reviews');
const fileUpload = require('../utils/mluter');
//const { quoteValidationRules, validationFunction } = require('../utils/validation');
const router = express.Router();

// CREATE QUOTE
/**
 *@swagger
 *  /v1/Reviews:
 *  post:
 *    tags:
 *    - "Review"
 *    summary: "Use To create a Review"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Review data"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              clientName:
 *                  type: "string"
 *              projectName:
 *                  type: "string"
 *              projectType:
 *                  type: "string"
 *              rating:
 *                  type: "number"
 *              review:
 *                  type: "string"
 *              image:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Operation Successfull"
 */
router
	.route('/')
	.post(fileUpload.upload('image').single('image'), reviewController.addReview)
	.get(reviewController.getAllReviews);

// GET ALL Reviews
/**
 *@swagger
 *  /v1/Reviews:
 *  get:
 *    tags:
 *    - "Review"
 *    summary: "Use To get All Reviews"
 *    description: ""
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

// GET REVIEW
/**
 *@swagger
 *  /v1/Reviews/{id}:
 *  get:
 *    tags:
 *    - "Review"
 *    summary: "Use To get one Review"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the Review to get
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
	.get(reviewController.getReview)
	.patch(fileUpload.upload('image').single('image'), reviewController.updateReview)
	.delete(reviewController.deleteReview);

// UPDATE REVIEW

/**
 *@swagger
 *  /v1/Reviews/{id}:
 *  patch:
 *    tags:
 *    - "Review"
 *    summary: "used to update review"
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
 *              clientName:
 *                  type: "string"
 *              projectName:
 *                  type: "string"
 *              projectType:
 *                  type: "string"
 *              rating:
 *                  type: "number"
 *              review:
 *                  type: "string"
 *              image:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "200":
 *        description: "operation Successfull"
 */

// DELETE REVIEW
/**
 *@swagger
 *  /v1/Reviews/{id}:
 *  delete:
 *    tags:
 *    - "Review"
 *    summary: "Use To delete Review"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: mongodb object ID of the Review to get
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "200":
 *        description: "Success"
 */

module.exports = router;
