const Awards = require('../model/awardsModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { uploadFile } = require('../utils/s3');

exports.createAward = catchAsync(async (req, res, next) => {
  const file = req.file;
  const { Location } = await uploadFile(file);
  req.body.image = Location;

  const newAward = await Awards.create(req.body);

  res.status(201).json({
    status: 'Success',
    data: {
      data: newAward,
    },
  });
});

exports.getAllAwards = catchAsync(async (req, res, next) => {
  const awards = await Awards.find();

  if (!awards) {
    return next(new AppError(`No awards found.`), 404);
  }

  res.status(200).json({
    status: 'success',
    results: awards.length,
    data: {
      data: awards,
    },
  });
});

exports.getAward = catchAsync(async (req, res, next) => {
  const award = await Awards.findById(req.params.id);

  if (!award) {
    return next(new AppError(`No award found with this ID`), 404);
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: award,
    },
  });
});

exports.updateAward = catchAsync(async (req, res, next) => {
  if (req.file) {
    const { Location } = await uploadFile(req.file);
    req.body.image = Location;
  }

  const award = await Awards.findByIdAndUpdate(req.params.id, req.body, {
    runValidator: true,
    new: true,
  });

  if (!award) {
    return next(new AppError(`Cannot Update award, Something went wrong`), 404);
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: award,
    },
  });
});

exports.deleteAward = catchAsync(async (req, res, next) => {
  const award = await Awards.findByIdAndDelete(req.params.id);

  if (!award) {
    return next(new AppError(`No award found with this ID`));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: null,
    },
  });
});
