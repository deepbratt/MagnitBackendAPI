const Services = require('../model/servicesModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const { uploadFile } = require('../utils/s3');
const { appErrors, appSuccess } = require('../constants/appConstants');
const { SUCCESS } = require('../constants/appConstants').resStatus;

exports.createService = catchAsync(async (req, res, next) => {
  const file = req.file;
  const { Location } = await uploadFile(file);
  req.body.image = Location;

  const newService = await Services.create(req.body);

  res.status(201).json({
    status: SUCCESS,
    data: {
      newService,
    },
  });
});
exports.getAllServices = catchAsync(async (req, res, next) => {
  const service = await Services.find();

  if (!service) {
    return next(appErrors.NOT_FOUND, 404);
  }

  res.status(200).json({
    status: SUCCESS,
    results: service.length,
    data: {
      service,
    },
  });
});

exports.getService = catchAsync(async (req, res, next) => {
  const service = await Services.findById(req.params.id);

  if (!service) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: {
      service,
    },
  });
});

exports.updateService = catchAsync(async (req, res, next) => {
  if (req.file) {
    const { Location } = await uploadFile(req.file);
    req.body.image = Location;
  }

  const service = await Services.findByIdAndUpdate(req.params.id, req.body, {
    runValidator: true,
    new: true,
  });

  if (!service) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: {
      service,
    },
  });
});

exports.deleteService = catchAsync(async (req, res, next) => {
  const service = await Services.findByIdAndDelete(req.params.id);

  if (!service) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: null,
  });
});
