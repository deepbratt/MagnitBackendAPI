const Benifits = require('../../model/benifitsModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/AppError');
const { uploadFile } = require('../../utils/s3');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const { appErrors, appSuccess } = require('../../constants/appConstants');

exports.createBenifit = catchAsync(async (req, res, next) => {
  const file = req.file;
  const { Location } = await uploadFile(file, next);
  req.body.image = Location;

  const newBenifit = await Benifits.create(req.body);

  res.status(201).json({
    status: SUCCESS,
    message: appSuccess.OPERATION_SUCCESSFULL,
    data: {
      result:newBenifit,
    },
  });
});
exports.getAllBenifits = catchAsync(async (req, res, next) => {
  const benifit = await Benifits.find();

  if (!benifit) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    results: benifit.length,
    data: {
      result:benifit,
    },
  });
});

exports.getBenifit = catchAsync(async (req, res, next) => {
  const benifit = await Benifits.findById(req.params.id);

  if (!benifit) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: {
      result:benifit,
    },
  });
});

exports.updateBenifit = catchAsync(async (req, res, next) => {
  if (req.file) {
    const { Location } = await uploadFile(req.file, next);
    req.body.image = Location;
  }

  const benifit = await Benifits.findByIdAndUpdate(req.params.id, req.body, {
    runValidator: true,
    new: true,
  });

  if (!benifit) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: {
      result:benifit,
    },
  });
});

exports.deleteBenifit = catchAsync(async (req, res, next) => {
  const benifit = await Benifits.findByIdAndDelete(req.params.id);

  if (!benifit) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    message: appSuccess.OPERATION_SUCCESSFULL,
    data: null,
  });
});
