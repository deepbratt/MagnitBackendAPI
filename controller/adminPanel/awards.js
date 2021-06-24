const Awards = require('../../model/awardsModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/AppError');
const { uploadFile } = require('../../utils/s3');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;

exports.createAward = catchAsync(async (req, res, next) => {
  const file = req.file;
  const { Location } = await uploadFile(file, next);
  req.body.image = Location;

  const newAward = await Awards.create(req.body);

  res.status(201).json({
    status: SUCCESS,
    message: appSuccess.OPERATION_SUCCESSFULL,
    data: {
      result:newAward,
    },
  });
});

exports.getAllAwards = catchAsync(async (req, res, next) => {
  const awards = await Awards.find();

  if (!awards) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    results: awards.length,
    data: {
      result:awards,
    },
  });
});

exports.getAward = catchAsync(async (req, res, next) => {
  const award = await Awards.findById(req.params.id);

  if (!award) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: {
      result:award,
    },
  });
});

exports.updateAward = catchAsync(async (req, res, next) => {
  if (req.file) {
    const { Location } = await uploadFile(req.file, next);
    req.body.image = Location;
  }

  const award = await Awards.findByIdAndUpdate(req.params.id, req.body, {
    runValidator: true,
    new: true,
  });

  if (!award) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: {
      result:award,
    },
  });
});

exports.deleteAward = catchAsync(async (req, res, next) => {
  const award = await Awards.findByIdAndDelete(req.params.id);

  if (!award) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    message: appSuccess.OPERATION_SUCCESSFULL,
    data: null,
  });
});
