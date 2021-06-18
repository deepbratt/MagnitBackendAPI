const crypto = require('crypto');
const User = require('../../model/userModel');
const AppError = require('../../utils/AppError');
const catchAsync = require('../../utils/catchAsync');
const Email = require('../../utils/email');
const { appErrors, appSuccess } = require('../../constants/appConstants');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const jwt = require('jsonwebtoken');
const jwtManagement = require('../../utils/jwtManagement');

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = {
    firstName: req.body.firstName.trim(),
    lastName: req.body.lastName.trim(),
    email: req.body.email.trim(),
    phone: req.body.phone.trim(),
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  };
  await User.create(newUser);
  res.status(201).json({
    status: SUCCESS,
    message: appSuccess.OPERATION_SUCCESSFULL,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    // checking email or password empty?
    return next(new AppError(appErrors.NO_CREDENTIALS, 400));
  }

  const user = await User.findOne({ email: email }).select('+password');
  //user existance and password is correct
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError(appErrors.WRONG_CREDENTIAL_ERROR, 401));
  }
  jwtManagement.createSendJwtToken(user, 200, req, res);
});

exports.authenticate = catchAsync(async (req, res, next) => {
  //getting token and check is it there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if (!token) {
    return next(new AppError(appErrors.UNAUTHORIZED_ERROR, 401));
  }
  //verification token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //check if user sitll exists
  const currentUser = await User.findById(decoded.userdata.id);
  if (!currentUser) {
    return next(new AppError(`User ${appErrors.NOT_FOUND}`, 404));
  }
  //check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError(
        'You have recently changed password! Please login again.',
        401,
      ),
    );
  }

  //Grant access to protected route
  req.user = currentUser;
  next();
});

exports.restrictTo = (...role) => {
  //rest parameter ['admin','user']
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403),
      );
    }
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const email = req.body.email.trim();
  //get user on pasted email address
  const user = await User.findOne({ email: email });
  if (!user) {
    return next(new AppError('No user exist agaist this email', 404));
  }

  //generate random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });
  //send it to user's email
  const resetURL = `${req.protocol}://${req.get(
    'host',
  )}/resetpassword/${resetToken}`;

  try {
    await new Email(user, resetURL).sendPasswordResetToken();
    res.status(200).json({
      status: SUCCESS,
      message: 'Password rest link sent',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    console.log(err);
    return next(new AppError(err.message, 500));
  }
});

module.exports.resetPassword = catchAsync(async (req, res, next) => {
  //console.log(req.params.token);
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) {
    return next(
      new AppError('Password reset link is invalid or has been expired'),
    );
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.status(200).json({
    status: SUCCESS,
    message: 'Your Password has been reset successfully',
  });
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ _id: req.user._id }).select('+password');
  console.log(user.password, req.body.currentPassword);
  if (!(await user.correctPassword(req.body.currentPassword, user.password))) {
    return next(new AppError('Your current Password is not correct', 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  jwtManagement.createSendJwtToken(user, 200, req, res);
});

exports.logout = catchAsync(async (req, res, next) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10),
    httpOnly: true,
  });
  res.status(200).json({ status: SUCCESS });
});

exports.protectedRoute = async (req, res) => {
  res.status(200).json({
    status: SUCCESS,
  });
};
