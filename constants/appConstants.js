exports.routeConsts = {
	swaggerDocRoute: '/v1/magnet-api-doc',
	userRoute: '/v1/Users',
	quoteRoute: '/v1/Quote',
	emailRoute: '/v1/Email',
};
exports.appErrors = {
	UNAUTHORIZED_ERROR: 'You are not logged in please login to get Access',
	WRONG_CREDENTIAL_ERROR: 'Email or password is incorrect',
	NO_CREDENTIALS: 'Please provide email and password',
	INVALID_FIRSTNAME: 'FirstName must only contain characters between A-Z',
	INVALID_LASTNAME: 'lastName must only contain characters between A-Z',
	INVALID_EMAIL: 'Please Enter Valid Email',
	INVALID_PHONE_NUM: 'Please Enter Valid Phone Number',
	OPERATION_SUCCESSFULL: 'Operation Successfull',
	NOT_FOUND: 'Not Found',
	INVALID_JWT: 'Invalid token! Please Login Again',
	EXPIRED_JWT: 'Your token has expired! please login again',
};
