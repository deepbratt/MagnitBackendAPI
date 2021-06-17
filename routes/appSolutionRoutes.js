const express = require('express');
const appSolutionController = require('../controller/appSolutionController');
const fileUpload = require('../utils/mluter');
const router = express.Router();

router.route('/').post(
	fileUpload.upload.fields([
		{
			name: 'image',
			maxCount: 1,
		},
		{
			name: 'icon',
			maxCount: 5,
		},
	]),
	appSolutionController.createOne
);


module.exports = router;