const express = require('express');
const blogsController = require('../controller/adminPanel/blogsController');
const authController = require('../controller/auth/authController');
const fileUpload = require('../utils/mluter');

const router = express.Router();

// Creating Blog
/**
 *@swagger
 *  /v1/blogs:
 *  post:
 *    tags:
 *    - Blogs
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
 *              banner:
 *                  type: "multipart/form-data"
 *              title:
 *                  type: "string"
 *              description:
 *                  type: "string"
 *              descriptionLong:
 *                  type: "string"
 *              canonical:
 *                  type: "string"
 *              type:
 *                  type: "string"
 *              html:
 *                  type: "string"
 *              keywords:
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
 *    - Blogs
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

// Get single/one Blog by slug
/**
 *@swagger
 *  /v1/blogs/bySlug/{slug}:
 *  get:
 *    tags:
 *    - Blogs
 *    summary: "Use To find Blog by slug"
 *    description: ""
 *    parameters:
 *      - in: path
 *        name: slug
 *        schema:
 *          type: string
 *        required: true
 *        description: canonical to find blog
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
 *    - Blogs
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
 *    - Blogs
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
 *              banner:
 *                  type: "multipart/form-data"
 *              title:
 *                  type: "string"
 *              description:
 *                  type: "string"
 *              descriptionLong:
 *                  type: "string"
 *              canonical:
 *                  type: "string"
 *              type:
 *                  type: "string"
 *              html:
 *                  type: "string"
 *              keywords:
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
 *    - Blogs
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
//////////////////

router.route('/bySlug/:slug').get(blogsController.getBlogBySlug);

router
	.route('/')
	.get(blogsController.getAllBlogs)
	.post(
		authController.authenticate,
		fileUpload.upload().fields([
			{
				name: 'banner',
				maxCount: 1,
			},
			{
				name: 'html',
				maxCount: 1,
			},
		]),
		blogsController.createBlog
	);

//router.use(authController.authenticate);

router
	.route('/:id')
	.get(authController.authenticate, blogsController.getBlog)
	.patch(
		authController.authenticate,
		fileUpload.upload().fields([
			{
				name: 'banner',
				maxCount: 1,
			},
			{
				name: 'html',
				maxCount: 1,
			},
		]),
		blogsController.updateBlog
	)
	.delete(authController.authenticate, blogsController.deleteBlog);

module.exports = router;
