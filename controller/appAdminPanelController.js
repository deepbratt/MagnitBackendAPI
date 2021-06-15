const AdminPanel = require('../model/appAdminPanelModel');
const AppError = require('../utils/AppError');
const { appErrors, appSuccess } = require('../constants/appConstants');
const { SUCCESS } = require('../constants/appConstants').resStatus;
const catchAsync = require('../utils/catchAsync');
const { uploadFile } = require('../utils/s3');

exports.createAdminPanel = catchAsync(async (req, res, next) => {
  const file = req.file;
  const { Location } = await uploadFile(file);
  const newObj = {
    image: Location,
    description: req.body.description,
  };
  await AdminPanel.create(newObj);
  res.status(201).json({
    status: SUCCESS,
    message: appSuccess.OPERATION_SUCCESSFULL,
  });
});

exports.getOne = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const adminPanel = await AdminPanel.findOne({ _id: id });
  if (!adminPanel) {
    return next(new AppError(appErrors.NOT_FOUND, 404));
  }
  res.status(200).json({
    status: SUCCESS,
    data: {
      adminPanel,
    },
  });
});

exports.getAll = catchAsync(async (req, res, next) => {
  const adminPanelList = await AdminPanel.find();
  if (adminPanelList.length === 0) {
    return next(new AppError(appErrors.NOT_FOUND, 404));
  }
  res.status(200).json({
    status: SUCCESS,
    data: {
      adminPanelList,
    },
  });
});

exports.updatePanel = catchAsync(async (req, res, next) => {
  if (req.file) {
    const { Location } = await uploadFile(req.file);
    req.body.image = Location;
  }
  const updatedPanel = await AdminPanel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );
  res.status(200).json({
    status: SUCCESS,
    data: {
      updatedPanel,
    },
  });
});

exports.deletePanel = catchAsync(async (req, res, next) => {
  await AdminPanel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: SUCCESS,
    data: null,
  });
});
