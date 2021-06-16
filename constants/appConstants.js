exports.routeConsts = {
	swaggerDocRoute: '/v1/magnet-api-doc',
	userRoute: '/v1/Users',
	quoteRoute: '/v1/Quote',
	emailRoute: '/v1/Email',
	sliderRoute: '/v1/sliders',
	servicesRoute: '/v1/services',
	benifitsRoute: '/v1/benifits',
	ourWorkRoute: '/v1/ourwork',
	awardsRoute: '/v1/awards',
	howItWorksRoute: '/v1/howitworks',
	FAQRoutes: '/v1/faqs',
	reviewRoute: '/v1/Review',
	appSolutioRoute:'/v1/appSolutions',
	opportuniteRoute:'/v1/opportunites',
	jobBenifitsRoute: '/v1/jobBenifits',
	trainingCertificationRoute: '/v1/trainingCertification',
	ourObjectivesRoute: '/v1/ourObjectives',
	joinTeamsRoute:'/v1/teams',
	appAdminPanelRoute: '/v1/adminPanel',
	caseStudyRoute: '/v1/casestudies',
	bannerRoute: '/v1/banners',
	workflowRoute: '/v1/workflows',
	factsAboutUsRoute: '/v1/factsAboutUs',
	hiringOptionsRoute: '/v1/hiringOptions',
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
