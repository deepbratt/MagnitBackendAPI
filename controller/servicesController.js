const Services = require('../model/servicesModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createService = catchAsync(async (req, res, next) => {
  const newService = await Services.create(req.body);

  res.status(201).json({
    status: 'Success',
    data: {
      data: newService,
    },
  });
});
exports.getAllServices = catchAsync(async (req, res, next) => {
  const service = await Services.find();

  if (!service) {
    return next(new AppError(`No Service found.`), 404);
  }

  res.status(200).json({
    status: 'success',
    results: service.length,
    data: {
      data: service,
    },
  });
});

exports.getService = catchAsync(async (req, res, next) => {
  const service = await Services.findById(req.params.id);

  if (!service) {
    return next(new AppError(`No Service found with this ID`), 404);
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: service,
    },
  });
});

exports.updateService = catchAsync(async (req, res, next) => {
  const service = await Services.findByIdAndUpdate(req.params.id, req.body, {
    runValidator: true,
    new: true,
  });

  if (!service) {
    return next(
      new AppError(`Cannot Update Service, Something went wrong`),
      404,
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: service,
    },
  });
});

exports.deleteService = catchAsync(async (req, res, next) => {
  const service = await Services.findByIdAndDelete(req.params.id);

  if (!service) {
    return next(new AppError(`No service found with this ID`));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: null,
    },
  });
});
