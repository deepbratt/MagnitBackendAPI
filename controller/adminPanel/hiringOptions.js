const Hiring = require('../../model/hiringOptionsModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/AppError');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;

exports.createHiringOption = catchAsync(async (req, res, next) => {
  const newHiring = await Hiring.create(req.body);

  res.status(201).json({
    status: SUCCESS,
    message: appSuccess.OPERATION_SUCCESSFULL,
    data: {
      result:newHiring,
    },
  });
});

exports.getAllHiringOptions = catchAsync(async (req, res, next) => {
  const hiringOptions = await Hiring.find();

  if (!hiringOptions) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    results: hiringOptions.length,
    data: {
      result:hiringOptions,
    },
  });
});

exports.getHiringOption = catchAsync(async (req, res, next) => {
  const hiringOption = await Hiring.findById(req.params.id);

  if (!hiringOption) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: {
      result:hiringOption,
    },
  });
});

exports.updateHiringOption = catchAsync(async (req, res, next) => {
  const hiringOption = await Hiring.findByIdAndUpdate(req.params.id, req.body, {
    runValidator: true,
    new: true,
  });

  if (!hiringOption) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: {
      result:hiringOption,
    },
  });
});

exports.deleteHiringOption = catchAsync(async (req, res, next) => {
  const hiringOption = await Hiring.findByIdAndDelete(req.params.id);

  if (!hiringOption) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    message: appSuccess.OPERATION_SUCCESSFULL,
    data: null,
  });
});
