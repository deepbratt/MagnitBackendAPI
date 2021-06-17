const AppSolution = require('../model/appSolutionsModel');
const AppError = require('../utils/AppError');
const { appErrors, appSuccess } = require('../constants/appConstants');
const { SUCCESS } = require('../constants/appConstants').resStatus;
const catchAsync = require('../utils/catchAsync');
const { uploadFile, uploadArrayOfFiles } = require('../utils/s3');

exports.createOne = catchAsync(async (req, res, next) => {
	const files = req.files;
	//console.log(files);
	const { Location } = await uploadFile(files.image[0]);
	const filesArray = await Promise.all(uploadArrayOfFiles(files.icon, next));
	//console.log(filesArray);
	req.body.image = Location;
	let fields = [];
	filesArray.forEach((el) => {
		fields.push(el.Location);
	});
	req.body.dataArray = fields;

	console.log(req.body);
	await AppSolution.create(req.body);
	res.status(201).json({
		status: SUCCESS,
		message: appSuccess.OPERATION_SUCCESSFULL,
	});
});
