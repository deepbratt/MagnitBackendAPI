const Slider = require('../../model/sliderModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/AppError');
const { uploadFile } = require('../../utils/s3');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;

exports.createSlider = catchAsync(async (req, res, next) => {
  const file = req.file;
  const { Location } = await uploadFile(file,next);
  req.body.backgroundImage = Location;
  const items = req.body.items.split(',');

  // console.log(items);

  const obj = {
    backgroundImage: req.body.backgroundImage,
    title: req.body.title,
    items: items,
    buttonLabel: req.body.buttonLabel,
    buttonLink: req.body.buttonLink,
  };

  const newSlider = await Slider.create(obj);

  res.status(201).json({
    status: SUCCESS,
    message: appSuccess.OPERATION_SUCCESSFULL,
    data: {
      result:newSlider,
    },
  });
});
exports.getAllSliders = catchAsync(async (req, res, next) => {
  const slider = await Slider.find();

  if (!slider) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    results: slider.length,
    data: {
      result:slider,
    },
  });
});

exports.getSlider = catchAsync(async (req, res, next) => {
  const slider = await Slider.findById(req.params.id);

  if (!slider) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: {
      result:slider,
    },
  });
});

exports.updateSlider = catchAsync(async (req, res, next) => {
  if (req.file) {
    const { Location } = await uploadFile(req.file,next);
    req.body.backgroundImage = Location;
  }
  const items = req.body.items.split(',');
  req.body.items = items;

  const slider = await Slider.findByIdAndUpdate(req.params.id, req.body, {
    runValidator: true,
    new: true,
  });

  if (!slider) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: {
      result:slider,
    },
  });
});

exports.deleteSlider = catchAsync(async (req, res, next) => {
  const slider = await Slider.findByIdAndDelete(req.params.id);

  if (!slider) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    message: appSuccess.OPERATION_SUCCESSFULL,
    data: null,
  });
});
