const Slider = require('../model/sliderModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const { uploadFile } = require('../utils/s3');

exports.createSlider = catchAsync(async (req, res, next) => {
  const file = req.file;
  const { Location } = await uploadFile(file);
  req.body.backgroundImage = Location;
  const items = req.body.items.split(',');
  console.log(items);
  const obj = {
    backgroundImage: req.body.backgroundImage,
    title: req.body.title,
    items: items,
    buttonLabel: req.body.buttonLabel,
    buttonLink: req.body.buttonLink,
  };
  const newSlider = await Slider.create(obj);

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
  if (req.file) {
    const { Location } = await uploadFile(req.file);
    req.body.backgroundImage = Location;
  }
  const items = req.body.items.split(',');
  req.body.items = items;

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
