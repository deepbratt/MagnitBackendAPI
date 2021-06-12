const express = require('express');
const reviewController = require('../controller/reviewController');
const fileUpload = require('../utils/mluter');
//const { quoteValidationRules, validationFunction } = require('../utils/validation');
const router = express.Router();

// CREATE QUOTE
/**
 *@swagger
 *  /v1/Review/addReview:
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
router.post('/addReview', fileUpload.upload.single('image'), reviewController.addReview);

// GET ALL Reviews
/**
 *@swagger
 *  /v1/Review/getAllRewiews:
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
router.get('/getAllRewiews', reviewController.getAllReviews);

// GET REVIEW
/**
 *@swagger
 *  /v1/Review/getReview/{id}:
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
router.get('/getReview/:id', reviewController.getReview);


// UPDATE REVIEW

/**
 *@swagger
 *  /v1/Review/updateReview/{id}:
 *  put:
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

router.put('/updateReview/:id', fileUpload.upload.single('image'), reviewController.updateReview);

// DELETE REVIEW
/**
 *@swagger
 *  /v1/Review/deleteReview/{id}:
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
router.delete('/deleteReview/:id', reviewController.deleteReview);

module.exports = router;
