const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');
const AppError = require('../utils/AppError');

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
	region,
	accessKeyId,
	secretAccessKey,
});

exports.uploadFile = async (file) => {
	let myFile = file.originalname.split('.');
	const ext = myFile[myFile.length - 1];
	const uploadParams = {
		Bucket: bucketName,
		Body: file.buffer,
		Key: `${uuidv4()}.${ext}`,
		CacheControl: 'max-age=86400',
		ContentType: file.mimetype,
	};
	const obj = await s3.upload(uploadParams).promise();
	console.log(obj);
	obj.Location = obj.Location.replace('s3.us-east-2.amazonaws.com/', '');
	return obj;
};

exports.base64FileUpload = (base64, next) => {
	if (!base64.startsWith('data:image/')) {
		return next(new AppError('Invalid base64 String', 400));
	}
	const base64Data = new Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
	const type = base64.split(';')[0].split('/')[1];
	const uploadParams = {
		Bucket: bucketName,
		Key: `${uuidv4()}.${type}`,
		Body: base64Data,
		ContentType: `image/${type}`,
	};

	return s3.upload(uploadParams).promise();
};

// exports.uploadArrayOfFiles = (files) => {
// 	const fileArray = [];
// 	files.forEach((file) => {
// 		let myFile = file.originalname.split('.');
// 		const ext = myFile[myFile.length - 1];
// 		const uploadParams = {
// 			Bucket: bucketName,
// 			Body: file.buffer,
// 			Key: `${uuidv4()}.${ext}`,
// 		};
// 		fileArray.push(s3.upload(uploadParams).promise());
// 	});
// 	return fileArray;
// };
