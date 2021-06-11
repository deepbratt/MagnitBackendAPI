const Ourwork = require('../model/ourWorkModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

exports.createOurWork = catchAsync(async (req, res, next) => {
  const newOurWork = await Ourwork.create(req.body);

  res.status(201).json({
    status: 'Success',
    data: {
      data: newOurWork,
    },
  });
});

exports.getAllOurWorks = catchAsync(async (req, res, next) => {
  const ourwork = await Ourwork.find();

  if (!ourwork) {
    return next(new AppError(`No ourwork Section found.`), 404);
  }

  res.status(200).json({
    status: 'success',
    results: ourwork.length,
    data: {
      data: ourwork,
    },
  });
});

exports.getOurWork = catchAsync(async (req, res, next) => {
  const ourwork = await Ourwork.findById(req.params.id);

  if (!ourwork) {
    return next(new AppError(`No ourwork found with this ID`), 404);
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: ourwork,
    },
  });
});

exports.updateOurWork = catchAsync(async (req, res, next) => {
  const ourwork = await Ourwork.findByIdAndUpdate(req.params.id, req.body, {
    runValidator: true,
    new: true,
  });

  if (!ourwork) {
    return next(
      new AppError(`Cannot Update ourwork, Something went wrong`),
      404,
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: ourwork,
    },
  });
});

exports.deleteOurWork = catchAsync(async (req, res, next) => {
  const ourwork = await Ourwork.findByIdAndDelete(req.params.id);

  if (!ourwork) {
    return next(new AppError(`No ourwork found with this ID`));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: null,
    },
  });
});
