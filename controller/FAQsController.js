const FeedbackAndQuestion = require('../model/FAQsModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const { appSuccess, appErrors } = require('../constants/appConstants');
const { SUCCESS } = require('../constants/appConstants').resStatus;

exports.createFAQ = catchAsync(async (req, res, next) => {
  const newFAQ = await FeedbackAndQuestion.create(req.body);

  res.status(201).json({
    status: SUCCESS,
    message: appSuccess.OPERATION_SUCCESSFULL,
    data: {
      data: newFAQ,
    },
  });
});

exports.getAllFAQs = catchAsync(async (req, res, next) => {
  const feedbackAndQuestion = await FeedbackAndQuestion.find();

  if (!feedbackAndQuestion) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    results: feedbackAndQuestion.length,
    data: {
      data: feedbackAndQuestion,
    },
  });
});

exports.getFAQ = catchAsync(async (req, res, next) => {
  const feedbackAndQuestion = await FeedbackAndQuestion.findById(req.params.id);

  if (!feedbackAndQuestion) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: {
      data: feedbackAndQuestion,
    },
  });
});

exports.updateFAQ = catchAsync(async (req, res, next) => {
  const feedbackAndQuestion = await FeedbackAndQuestion.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      runValidator: true,
      new: true,
    },
  );

  if (!feedbackAndQuestion) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: {
      data: feedbackAndQuestion,
    },
  });
});

exports.deleteFAQ = catchAsync(async (req, res, next) => {
  const feedbackAndQuestion = await FeedbackAndQuestion.findByIdAndDelete(
    req.params.id,
  );

  if (!feedbackAndQuestion) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    message: appSuccess.OPERATION_SUCCESSFULL,
    data: {
      data: null,
    },
  });
});
