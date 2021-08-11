const version = `v1`;
exports.routeConsts = {
	swaggerDocRoute: `/${version}/magnet-api-doc`,
	userRoute: `/${version}/Users`,
	quoteRoute: `/${version}/Quote`,
	emailRoute: `/${version}/Email`,
	sliderRoute: `/${version}/sliders`,
	servicesRoute: `/${version}/services`,
	benifitsRoute: `/${version}/benifits`,
	ourWorkRoute: `/${version}/ourwork`,
	awardsRoute: `/${version}/awards`,
	howItWorksRoute: `/${version}/howitworks`,
	pageRoute: `/${version}/pages`,
	companiesRoute: `/${version}/companies`,
	FAQRoutes: `/${version}/faqs`,
	reviewRoute: `/${version}/Reviews`,
	appSolutioRoute: `/${version}/appSolutions`,
	opportuniteRoute: `/${version}/opportunites`,
	jobBenifitsRoute: `/${version}/jobBenifits`,
	trainingCertificationRoute: `/${version}/trainingCertification`,
	ourObjectivesRoute: `/${version}/ourObjectives`,
	ourSolutionRoute: `/${version}/ourSolutions`,
	joinTeamsRoute: `/${version}/teams`,
	appAdminPanelRoute: `/${version}/adminPanel`,
	caseStudyRoute: `/${version}/casestudies`,
	bannerRoute: `/${version}/banners`,
	workflowRoute: `/${version}/workflows`,
	factsAboutUsRoute: `/${version}/factsAboutUs`,
	hiringOptionsRoute: `/${version}/hiringOptions`,
	blogsRoute: `/${version}/blogs`,
	seoRoute: `/${version}/seoText`,
};

exports.appErrors = {
	// JWT || CREDENTIAL ERRORS
	UNAUTHORIZED_ERROR: `You are not logged in please login to get Access`,
	WRONG_CREDENTIAL_ERROR: `Email or password is incorrect`,
	NO_CREDENTIALS: `Please provide email and password`,
	INVALID_JWT: `Invalid token! Please Login Again`,
	EXPIRED_JWT: `Your token has expired! please login again`,
	//OTHERS
	EMAIL_REQUIRED: `Email is required`,
	INVALID_EMAIL: `Please Enter Valid Email`,
	//
	INVALID_FIRSTNAME: `FirstName must only contain characters between A-Z`,
	INVALID_LASTNAME: `lastName must only contain characters between A-Z`,
	FIRSTNAME_REQUIRED: `FirstName is required`,
	LASTNAME_REQUIRED: `LastName is required`,
	NAME_REQUIRED: `Name must only contain characters between A-Z`,
	//
	COMPANY_NAME_REQUIRED: `Company Name Should be greater than 3 characters`,
	IMAGE_REQUIRED: `Image is required`,
	PROJECT_DETAILS: `Project Details Should be Greater Than 30 characters`,
	//
	INVALID_PHONE_NUM: `Please Enter Valid Phone Number`,
	//
	PASSWORD_LENGTH: `Enter Password with 8 or more characters`,
	PASSWORD_REQUIRED: `Password is required`,
	PASSWORD_MISMATCH: `Password and ConfirmPassword are not equal`,
	//
	NOT_FOUND: `Not Found`,
	SOME_ERROR: `Something went wrong`,
	//
	TITLE_REQUIRED: `Title is required`,
	TEXT_REQUIRED: `Text is required`,
	TYPE_REQUIRED: `Type is required`,
	DESC_REQUIRED: `Description is required`,
	BUTTON_LINK: `Button Link is required`,
	BUTTON_LABEL: `Button Label is required`,
};

exports.appSuccess = {
	OPERATION_SUCCESSFULL: `Operation Successfull`,
};

exports.resStatus = {
	SUCCESS: `success`,
	FAILURE: `fail`,
	ERROR: `error`,
};
