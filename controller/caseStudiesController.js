const CaseStudies = require('../model/caseStudiesModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const { uploadFile } = require('../utils/s3');

exports.createCaseStudy = catchAsync(async (req, res, next) => {
  const file = req.file;
  const { Location } = await uploadFile(file);
  req.body.icon = Location;

  const caseStudy = await CaseStudies.create(req.body);

  console.log(req.body);

  res.status(201).json({
    status: 'Success',
    data: {
      data: caseStudy,
    },
  });
});

exports.getAllCaseStudies = catchAsync(async (req, res, next) => {
  const caseStudy = await CaseStudies.find();

  if (!caseStudy) {
    return next(new AppError(`No Case Study found.`), 404);
  }

  res.status(200).json({
    status: 'success',
    results: caseStudy.length,
    data: {
      data: caseStudy,
    },
  });
});

exports.getCaseStudy = catchAsync(async (req, res, next) => {
  const caseStudy = await CaseStudies.findById(req.params.id);

  if (!caseStudy) {
    return next(new AppError(`No Case Study found with this ID`), 404);
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: caseStudy,
    },
  });
});

exports.updateCaseStudy = catchAsync(async (req, res, next) => {
  if (req.file) {
    const { Location } = await uploadFile(req.file);
    req.body.icon = Location;
  }

  const caseStudy = await CaseStudies.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      runValidator: true,
      new: true,
    },
  );

  if (!caseStudy) {
    return next(
      new AppError(`Cannot Update Csase Study, Something went wrong`),
      404,
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: caseStudy,
    },
  });
});

exports.deleteCaseStudy = catchAsync(async (req, res, next) => {
  const caseStudy = await CaseStudies.findByIdAndDelete(req.params.id);

  if (!caseStudy) {
    return next(new AppError(`No Case Study found with this ID`));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: null,
    },
  });
});
