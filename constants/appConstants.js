exports.routeConsts = {
	swaggerDocRoute: '/v1/magnet-api-doc',
	userRoute: '/v1/Users',
	quoteRoute: '/v1/Quote',
	emailRoute: '/v1/Email',
	reviewRoute:'/v1/Review'
};
exports.appErrors = {
	// JWT || CREDENTIAL ERRORS
	UNAUTHORIZED_ERROR: 'You are not logged in please login to get Access',
	WRONG_CREDENTIAL_ERROR: 'Email or password is incorrect',
	NO_CREDENTIALS: 'Please provide email and password',
	INVALID_JWT: 'Invalid token! Please Login Again',
	EXPIRED_JWT: 'Your token has expired! please login again',
	//OTHERS
	EMAIL_REQUIRED: 'Email is required',
	INVALID_EMAIL: 'Please Enter Valid Email',
	//
	INVALID_FIRSTNAME: 'FirstName must only contain characters between A-Z',
	INVALID_LASTNAME: 'lastName must only contain characters between A-Z',
	FIRSTNAME_REQUIRED: 'FirstName is required',
	LASTNAME_REQUIRED: 'LastName is required',
	NAME_REQUIRED: 'Name must only contain characters between A-Z',
	//
	COMPANY_NAME_REQUIRED: 'Company Name Should be greater than 3 characters',
	IMAGE_REQUIRED: 'Image is required',
	PROJECT_DETAILS: 'Project Details Should be Greater Than 30 characters',
	//
	INVALID_PHONE_NUM: 'Please Enter Valid Phone Number',
	//
	PASSWORD_LENGTH: 'Enter Password with 8 or more characters',
	PASSWORD_REQUIRED: 'Password is required',
	PASSWORD_MISMATCH: 'Password and ConfirmPassword are not equal',
	//
	NOT_FOUND: 'Not Found',
	SOME_ERROR: 'Something went wrong',
};

exports.appSuccess = {
	OPERATION_SUCCESSFULL: 'Operation Successfull',
};

exports.resStatus = {
	SUCCESS: 'success',
	FAILURE: 'fail',
	ERROR: 'error',
};
