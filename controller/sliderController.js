const Slider = require('../model/sliderModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createSlider = catchAsync(async (req, res, next) => {
  const newSlider = await Slider.create(req.body);

  res.status(201).json({
    status: 'Success',
    data: {
      data: newSlider,
    },
  });
});
exports.getAllSliders = catchAsync(async (req, res, next) => {
  const slider = await Slider.find();

  if (!slider) {
    return next(new AppError(`No Slider found.`), 404);
  }

  res.status(200).json({
    status: 'success',
    results: slider.length,
    data: {
      data: slider,
    },
  });
});

exports.getSlider = catchAsync(async (req, res, next) => {
  const slider = await Slider.findById(req.params.id);

  if (!slider) {
    return next(new AppError(`No Slider found with this ID`), 404);
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: slider,
    },
  });
});

exports.updateSlider = catchAsync(async (req, res, next) => {
  const slider = await Slider.findByIdAndUpdate(req.params.id, req.body, {
    runValidator: true,
    new: true,
  });

  if (!slider) {
    return next(
      new AppError(`Cannot Update Slider, Something went wrong`),
      404,
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: slider,
    },
  });
});

exports.deleteSlider = catchAsync(async (req, res, next) => {
  const slider = await Slider.findByIdAndDelete(req.params.id);

  if (!slider) {
    return next(new AppError(`No Slider found with this ID`));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: null,
    },
  });
});
