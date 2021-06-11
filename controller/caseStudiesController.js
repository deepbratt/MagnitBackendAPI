const CaseStudies = require('../model/caseStudiesModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

exports.createCaseStudy = catchAsync(async (req, res, next) => {
  const caseStudy = await CaseStudies.create(req.body);

  res.status(201).json({
    status: 'Success',
    data: {
      data: caseStudy,
    },
  });
});
