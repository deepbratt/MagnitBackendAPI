const ApiFeatures = require('../../utils/apiFeatures');
const AppError = require('../../utils/AppError');
const { SUCCESS } = require('../../constants/appConstants').resStatus;
const { appErrors, appSuccess } = require('../../constants/appConstants');
const catchAsync = require('../../utils/catchAsync');

exports.getAllForPages = async (Model, query) => {
	if (query === undefined) query = {};
	const freatures = new ApiFeatures(Model.find(), query).filter().sort().limitFields().pagination();
	const doc = await freatures.query;
	return doc;
};

exports.getAll = (Model) =>
	catchAsync(async (req, res, next) => {
		const freatures = new ApiFeatures(Model.find(), req.query)
			.filter()
			.sort()
			.limitFields()
			.pagination();
		const doc = await freatures.query;
		const total_results = await Model.find();
		if (doc.length === 0) {
			return next(new AppError(appErrors.NOT_FOUND), 404);
		}
		res.status(200).json({
			status: SUCCESS,
			perPage_results: doc.length,
			total_results: total_results.length,
			data: {
				result: doc,
			},
		});
	});
