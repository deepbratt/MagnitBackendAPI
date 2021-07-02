const express = require('express');
const howItWorksController = require('../controller/adminPanel/howItWorks');
const authController = require('../controller/auth/authController');
const fileUpload = require('../utils/mluter');

const router = express.Router();

// Creating How It Works Section
/**
 *@swagger
 *  /v1/howitworks:
 *  post:
 *    tags:
 *    - [How It Works API's]
 *    summary: "Use to Create How It Work Section"
 *    description: "This API used for creating How It Work Section"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Creating How It Work Section"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              image:
 *                  type: "string"
 *              text:
 *                  type: "string"
 *              title:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "How It Work Section Created Successfully"
 */

// Get single/one How It Works Section by ID
/**
 *@swagger
 *  /v1/howitworks/60c1faceb83a711e2cc342e1:
 *  get:
 *    tags:
 *    - [How It Works API's]
 *    summary: "Use to find one How it Work's Section"
 *    description: "This API used to find single/one How it Work's Section"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show How it Work's Section details of specific ID"
 */

// Get All How it Work's Sections
/**
 *@swagger
 *  /v1/howitworks:
 *  get:
 *    tags:
 *    - [How It Works API's]
 *    summary: "Use to find All How it Works Sections"
 *    description: "This API used to find All How it Works Sections"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show All the How it Works Sections"
 */

// Udpate/Patch How it Works Section
/**
 *@swagger
 *  /v1/howitworks/60c1faceb83a711e2cc342e1:
 *  patch:
 *    tags:
 *    - [How It Works API's]
 *    summary: "Use to Update How it Work Section"
 *    description: "This API used for Updating How it Work Section"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Updating How it Work Section"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              image:
 *                  type: "string"
 *              text:
 *                  type: "string"
 *              title:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "How it Work Section Updated Successfully"
 */

// Delete How It Work Section by ID
/**
 *@swagger
 *  /v1/howitworks/:id:
 *  delete:
 *    tags:
 *    - [How It Works API's]
 *    summary: "Use to Delete How It Works Section by ID"
 *    description: "This API used to Delete How It Works Section by ID"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Provide ID of How It Works Section to delete"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              id:
 *                  type: "string"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "How It Works Section deleted Successfully"
 */
router.use(authController.authenticate);
router
  .route('/')
  .get(howItWorksController.getAllHowItWorks)
  .post(
    fileUpload.upload('image').single('image'),
    howItWorksController.createHowItWorks,
  );

router
  .route('/:id')
  .get(howItWorksController.getHowItWork)
  .patch(
    fileUpload.upload('image').single('image'),
    howItWorksController.updateHowItWork,
  )
  .delete(howItWorksController.deleteHowItWork);

module.exports = router;
