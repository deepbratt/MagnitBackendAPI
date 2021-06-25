const Services = require('../../model/servicesModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/AppError');
const { uploadFile } = require('../../utils/s3');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const { servicesEnum } = require('../../utils/scripts');

exports.createService = catchAsync(async (req, res, next) => {
  const file = req.file;
  const { Location } = await uploadFile(file);
  req.body.image = Location;

  if (req.body.type === 'Parent' && req.body.category) {
    delete req.body.category;
  }
  if (req.body.type === 'Child' && !req.body.category) {
    return next(new AppError('Please add a category', 400));
  }
  if (req.body.category) {
    if (!(await servicesEnum(req.body.category))) {
      return next(new AppError('No Category Found', 400));
    }
  }
  const newService = await Services.create(req.body);
  res.status(201).json({
    status: SUCCESS,
    data: {
      result: newService,
    },
  });
});
exports.getAllServices = catchAsync(async (req, res, next) => {
  const service = await Services.find();

  if (!service) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    results: service.length,
    data: {
      result: service,
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
      result: service,
    },
  });
});

exports.updateService = catchAsync(async (req, res, next) => {
  if (req.file) {
    const { Location } = await uploadFile(req.file);
    req.body.image = Location;
  }
  if (req.body.type === 'Parent' && req.body.category) {
    req.body.category = undefined;
  }
  if (req.body.type === 'Child' && !req.body.category) {
    return next(new AppError('Please add a category', 400));
  }
  if (req.body.category) {
    if (!(await servicesEnum(req.body.category))) {
      return next(new AppError('No Category Found', 400));
    }
  }

  const service = await Services.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!service) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: {
      result: service,
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
