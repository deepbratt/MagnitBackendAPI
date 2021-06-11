const Benifits = require('../model/benifitsModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { UploadFile, uploadFile } = require('../utils/s3');

exports.createBenifit = catchAsync(async (req, res, next) => {
  const file = req.file;
  const { Location } = await uploadFile(file);
  req.body.image = Location;

  const newBenifit = await Benifits.create(req.body);

  res.status(201).json({
    status: 'Success',
    data: {
      data: newBenifit,
    },
  });
});
exports.getAllBenifits = catchAsync(async (req, res, next) => {
  const benifit = await Benifits.find();

  if (!benifit) {
    return next(new AppError(`No benifit found.`), 404);
  }

  res.status(200).json({
    status: 'success',
    results: benifit.length,
    data: {
      data: benifit,
    },
  });
});

exports.getBenifit = catchAsync(async (req, res, next) => {
  const benifit = await Benifits.findById(req.params.id);

  if (!benifit) {
    return next(new AppError(`No benifit found with this ID`), 404);
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: benifit,
    },
  });
});

exports.updateBenifit = catchAsync(async (req, res, next) => {
  if (req.file) {
    const { Location } = await uploadFile(req.file);
    req.body.image = Location;
  }

  const benifit = await Benifits.findByIdAndUpdate(req.params.id, req.body, {
    runValidator: true,
    new: true,
  });

  if (!benifit) {
    return next(
      new AppError(`Cannot Update benifit, Something went wrong`),
      404,
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: benifit,
    },
  });
});

exports.deleteBenifit = catchAsync(async (req, res, next) => {
  const benifit = await Benifits.findByIdAndDelete(req.params.id);

  if (!benifit) {
    return next(new AppError(`No benifit found with this ID`));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: null,
    },
  });
});
