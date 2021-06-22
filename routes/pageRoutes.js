const express = require('express');
const pageController= require('../controller/adminPanel/pageController');
const fileUpload = require('../utils/mluter');
//const { quoteValidationRules, validationFunction } = require('../utils/validation');
const router = express.Router();

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
 *              title:
 *                  type: "string"
 *              canonical:
 *                  type: "string"
 *              description:
 *                  type: "string"
 *              keywords:
 *                  type: "string"
 *              banner:
 *                  type: "string"
 *              services:
 *                  type: "string"
 *              reviews:
 *                  type: "string"
 *              homeSlider:
 *                  type: "string"
 *              awards:
 *                  type: "string"
 *              company:
 *                  type: "string"
 *              opportunites:
 *                  type: "string"
 *              trainingCertification:
 *                  type: "string"
 *              workFlow:
 *                  type: "string"
 *              joinTeam:
 *                  type: "string"
 *              jobBenifits:
 *                  type: "string"
 *              FAQs:
 *                  type: "string"
 *              appAdminPanel:
 *                  type: "string"
 *              appSolutions:
 *                  type: "string"
 *              blogs:
 *                  type: "string"
 *              benefits:
 *                  type: "string"
 *              hiringOptions:
 *                  type: "string"
 *              factsAboutUs:
 *                  type: "string"
 *              ourWork:
 *                  type: "string"
 *              ourObjectives:
 *                  type: "string"
 *              howitWorks:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Operation Successfull"
 */
router
	.route('/')
	.post(pageController.createOne)
	.get(pageController.getAll);

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
 *              title:
 *                  type: "string"
 *              canonical:
 *                  type: "string"
 *              description:
 *                  type: "string"
 *              keywords:
 *                  type: "string"
 *              banner:
 *                  type: "string"
 *              services:
 *                  type: "string"
 *              reviews:
 *                  type: "string"
 *              homeSlider:
 *                  type: "string"
 *              awards:
 *                  type: "string"
 *              company:
 *                  type: "string"
 *              opportunites:
 *                  type: "string"
 *              trainingCertification:
 *                  type: "string"
 *              workFlow:
 *                  type: "string"
 *              joinTeam:
 *                  type: "string"
 *              jobBenifits:
 *                  type: "string"
 *              FAQs:
 *                  type: "string"
 *              appAdminPanel:
 *                  type: "string"
 *              appSolutions:
 *                  type: "string"
 *              blogs:
 *                  type: "string"
 *              benefits:
 *                  type: "string"
 *              hiringOptions:
 *                  type: "string"
 *              factsAboutUs:
 *                  type: "string"
 *              ourWork:
 *                  type: "string"
 *              ourObjectives:
 *                  type: "string"
 *              howitWorks:
 *                  type: "string"
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
