const multer = require('multer');
const bcrypt = require('bcrypt');

const AppError = require('./AppError');

exports.upload = multer({
	storage: multer.diskStorage({
		filename: async function (req, file, cb) {
			const fileName = `${Date.now()}${file.originalname}`;
			const split = fileName.split('.');
			const ext = split[split.length - 1];
			const hashedFileName = await bcrypt.hash(fileName, 6);
			cb(null, `${hashedFileName}.${ext}`);
		},
	}),
	fileFilter: (req, file, callback) => {
		if (file.mimetype.startsWith('image')) {
			callback(null, true);
		} else {
			callback(new AppError('Not an Image! Please upload only image', 400), false);
		}
	},
});
