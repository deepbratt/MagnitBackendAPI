const HowItWorks = require('../../model/howItWorksModel');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/AppError');
const { uploadFile } = require('../../utils/s3');
const { appSuccess, appErrors } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;

exports.createHowItWorks = catchAsync(async (req, res, next) => {
  const file = req.file;
  const { Location } = await uploadFile(file,next);

  const newObj = {
    title: req.body.title.trim(),
    text: req.body.text.trim(),
    image: Location,
  };
  const newHowItWork = await HowItWorks.create(newObj);

  res.status(201).json({
    status: SUCCESS,
    message: appSuccess.OPERATION_SUCCESSFULL,
    data: {
      result:newHowItWork,
    },
  });
});
exports.getAllHowItWorks = catchAsync(async (req, res, next) => {
  const howItWorks = await HowItWorks.find();

  if (!howItWorks) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    results: howItWorks.length,
    data: {
      result:howItWorks,
    },
  });
});

exports.getHowItWork = catchAsync(async (req, res, next) => {
  const howItWork = await HowItWorks.findById(req.params.id);

  if (!howItWork) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: {
      result:howItWork,
    },
  });
});

exports.updateHowItWork = catchAsync(async (req, res, next) => {
  if (req.file) {
    const { Location } = await uploadFile(req.file,next);
    req.body.image = Location;
  }

  const howItWork = await HowItWorks.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      runValidator: true,
      new: true,
    },
  );

  if (!howItWork) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    data: {
      result:howItWork,
    },
  });
});

exports.deleteHowItWork = catchAsync(async (req, res, next) => {
  const howItWork = await HowItWorks.findByIdAndDelete(req.params.id);

  if (!howItWork) {
    return next(new AppError(appErrors.NOT_FOUND), 404);
  }

  res.status(200).json({
    status: SUCCESS,
    message: appSuccess.OPERATION_SUCCESSFULL,
    data: null,
  });
});
