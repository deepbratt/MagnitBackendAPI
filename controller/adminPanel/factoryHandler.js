const ApiFeatures = require('../../utils/apiFeatures');
exports.getAll = async (Model, query) => {
	if (query === undefined) query = {};
	const freatures = new ApiFeatures(Model.find(), query).filter().sort().limitFields().pagination();
	// const doc = await freatures.query.explain();
	const doc = await freatures.query;
	return doc;
};
