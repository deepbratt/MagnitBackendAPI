const express = require('express');

const caseStudiesController = require('../controller/caseStudiesController');

const router = express.Router();

router.route('/').get().post(caseStudiesController.createCaseStudy);

router.route('/:id').get().patch().delete();

module.exports = router;
