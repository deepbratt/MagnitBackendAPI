const { memoryStorage } = require('multer');
const multer = require('multer');
//const bcrypt = require('bcrypt');

const AppError = require('./AppError');

exports.upload = multer({
	storage: memoryStorage(),
	fileFilter: (req, file, callback) => {
		if (file.mimetype.startsWith('image')) {
			callback(null, true);
		} else {
			callback(new AppError('Not an Image! Please upload only image', 400), false);
		}
	},
});
