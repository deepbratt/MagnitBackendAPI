const Blogs = require('../../model/blogsModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/AppError');
const { uploadFile } = require('../../utils/s3');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const APIFeatures = require('../../utils/apiFeatures');

exports.createBlog = catchAsync(async (req, res, next) => {
  const file = req.file;
  const { Location } = await uploadFile(file);
  req.body.image = Location;

  // console.log(items);

  const obj = {
    image: req.body.image,
    title: req.body.title,
    text: req.body.text,
    link: req.body.link,
    buttonLabel: req.body.buttonLabel,
    views: req.body.views,
    date: req.body.date,
  };

  const result = await Blogs.create(obj);

  res.status(201).json({
    status: SUCCESS,
    message: appSuccess.OPERATION_SUCCESSFULL,
    data: {
      result,
    },
  });
});

exports.getAllBlogs = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Blogs.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .pagination();

  const result = await features.query;

  if (!result) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    totalResults: result.length,
    data: {
      result,
    },
    skipLatest: 9,
    skipTrending: 3,
  });
});

exports.getBlog = catchAsync(async (req, res, next) => {
  const result = await Blogs.findById(req.params.id);

  if (!result) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }
  console.count();
  res.status(200).json({
    status: SUCCESS,
    data: {
      result,
    },
  });
});

exports.updateBlog = catchAsync(async (req, res, next) => {
  if (req.file) {
    const { Location } = await uploadFile(req.file);
    req.body.image = Location;
  }

  const result = await Blogs.findByIdAndUpdate(req.params.id, req.body, {
    runValidator: true,
    new: true,
  });

  if (!result) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: {
      result,
    },
  });
});

exports.deleteBlog = catchAsync(async (req, res, next) => {
  const result = await Blogs.findByIdAndDelete(req.params.id);

  if (!result) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    message: appSuccess.OPERATION_SUCCESSFULL,
    data: null,
  });
});
