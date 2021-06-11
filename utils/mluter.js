const multer = require('multer');

const AppError = require('./AppError');

exports.upload = multer({
	storage: multer.diskStorage({
		filename: async function (req, file, cb) {
			const fileName = `${Date.now()}${file.originalname}`;
			//const hashedFileName = await bcrypt.hash(fileName, 12);
			cb(null, fileName);
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
