const { memoryStorage } = require('multer');
const multer = require('multer');
//const bcrypt = require('bcrypt');

const AppError = require('./AppError');

exports.upload = (mineType) => {
	return multer({
		storage: memoryStorage(),
		fileFilter: (req, file, callback) => {
			if (file.mimetype.startsWith(mineType)) {
				callback(null, true);
			} else {
				callback(new AppError(`Not an ${mineType} ! Please upload only ${mineType}`, 400), false);
			}
		},
	});
};
