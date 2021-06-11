const FeedbackAndQuestion = require('../model/FAQsModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

exports.createFAQ = catchAsync(async (req, res, next) => {
  const newFAQ = await FeedbackAndQuestion.create(req.body);

  res.status(201).json({
    status: 'Success',
    data: {
      data: newFAQ,
    },
  });
});

exports.getAllFAQs = catchAsync(async (req, res, next) => {
  const feedbackAndQuestion = await FeedbackAndQuestion.find();

  if (!feedbackAndQuestion) {
    return next(new AppError(`No Feedback And Question found.`), 404);
  }

  res.status(200).json({
    status: 'success',
    results: feedbackAndQuestion.length,
    data: {
      data: feedbackAndQuestion,
    },
  });
});

exports.getFAQ = catchAsync(async (req, res, next) => {
  const feedbackAndQuestion = await FeedbackAndQuestion.findById(req.params.id);

  if (!feedbackAndQuestion) {
    return next(
      new AppError(`No Feedback And Question found with this ID`),
      404,
    );
  }

  res.status(200).json({
    status: 'success',
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
    return next(
      new AppError(`Cannot Update Feedback And Question, Something went wrong`),
      404,
    );
  }

  res.status(200).json({
    status: 'success',
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
    return next(new AppError(`No Feedback And Question found with this ID`));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: null,
    },
  });
});
