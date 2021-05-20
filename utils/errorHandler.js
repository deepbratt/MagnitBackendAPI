const AppError = require('./AppError');
const config = require('config');
const NODE_ENV = config.get('ENV');

const handleCastErrorDB = (err) => {
	const message = `invalid ${err.path}:${err.value}.`;
	return new AppError(message, 400);
};
const handleDuplicatefieldsDB = (err) => {
	const value = err.message.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
	const message = `This email id already exists ${value} please use and other id`;
	return new AppError(message, 400);
};
const handleValidationErrorDB = (err) => {
	const errors = Object.values(err.errors).map((el) => el.message);
	const message = `Invalid input data\n${errors.join('\n')}`;
	return new AppError(message, 400);
};
const handleJWTError = () => {
	return new AppError('Invalid token! Please Login Again', 401);
};
const handleJWTExpiredError = () => new AppError('Your token has expired! please login again', 401);
const sendErrorDev = (err, req, res) => {
	return res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
		error: err,
		stack: err.stack,
	});
};
const sendErrorPro = (err, req, res) => {
	if (err.isOperational) {
		return res.status(err.statusCode).json({
			status: err.status,
			message: err.message,
		});
	}
	//programming errors
	console.error('Error', err);
	return res.status(500).json({
		status: 'error',
		message: 'something went wrong',
	});
};
module.exports = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';
	if (NODE_ENV === 'development') {
		sendErrorDev(err, req, res);
	} else {
		let error = { ...err };
		console.log(error);
		error.message = err.message;
		error.name = err.name;
		error.code = err.code;
		if (error.name === 'CastError') error = handleCastErrorDB(error);
		if (error.code === 11000) error = handleDuplicatefieldsDB(error);
		if (error.name === 'ValidationError') error = handleValidationErrorDB(error);
		if (error.name === 'JsonWebTokenError') error = handleJWTError();
		if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();
		sendErrorPro(error, req, res);
	}
};
