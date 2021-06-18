const express = require('express');
const blogsController = require('../controller/adminPanel/blogsController');
const fileUpload = require('../utils/mluter');

const router = express.Router();

// Creating Blog
/**
 *@swagger
/v1/blogs:
 *  post:
 *    tags:
 *    - [Blog's API's]
 *    summary: "Use to Create Blog"
 *    description: "This API used for creating Blog"
 *    consumes:
 *    - "multipart/form-data"
 *    produces:
 *    - "multipart/form-data"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Creating Blog"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              image:
 *                  type: "multipart/form-data"
 *              title:
 *                  type: "string"
 *              text:
 *                  type: "string"
 *              buttonLabel:
 *                  type: "string"
 *              link:
 *                  type: "string"
 *              views: 
 *                  type: "Number"
 *              date:
 *                  type: "Date"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Blog Created Successfully"
 */

// Get single/one Blog by ID
/**
 *@swagger
 *  /v1/blogs/:id:
 *  get:
 *    tags:
 *    - [Blogs's API's]
 *    summary: "Use to find one Blog's"
 *    description: "This API used to find single/one Blog's"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show Blog's details of specific ID"
 */

// Get All Blogs
/**
 *@swagger
 *  /v1/blogs:
 *  get:
 *    tags:
 *    - [Blog's API's]
 *    summary: "Use to find All Blogs"
 *    description: "This API used to find All Blogs"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Show All the Blogs"
 */

// Udpate/Patch Blog
/**
 *@swagger
 *  /v1/blogs/:id:
 *  patch:
 *    tags:
 *    - [Blog's API's]
 *    summary: "Use to Update Blog"
 *    description: "This API used for Updating Blog"
 *    consumes:
 *    - "multipart/form-data"
 *    produces:
 *    - "multipart/form-data"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Data for Updating Blog"
 *      required: true
 *      schema:
 *        type: "object"
 *        properties:
 *              image:
 *                  type: "multipart/form-data"
 *              title:
 *                  type: "string"
 *              text:
 *                  type: "string"
 *              buttonLabel:
 *                  type: "string"
 *              link:
 *                  type: "string"
 *              views:
 *                  type: "Number"
 *              date:
 *                  type: "Date"
 *    responses:
 *      "400":
 *        description: "Invalid input"
 *      "201":
 *        description: "Blog Updated Successfully"
 */

// Delete Blog by ID
/**
 *@swagger
 *  /v1/blogs/:id:
 *  delete:
 *    tags:
 *    - [Blog's API's]
 *    summary: "Use to Delete Blog by ID"
 *    description: "This API used to Delete Blog by ID"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Provide ID of Blog to delete"
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
 *        description: "Blog deleted Successfully"
 */

router
  .route('/')
  .get(blogsController.getAllBlogs)
  .post(fileUpload.upload('image').single('image'), blogsController.createBlog);

router
  .route('/:id')
  .get(blogsController.getBlog)
  .patch(fileUpload.upload('image').single('image'), blogsController.updateBlog)
  .delete(blogsController.deleteBlog);

module.exports = router;
