const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
dotenv.config({ path: './config/config.env' }); // read config.env to environmental variables
require('./config/dbConnection')(); // db connection
const AppError = require('./utils/AppError');

// Swagger routes
const swaggerOptions = require('./constants/swaggerOptions');

const userRoute = require('./constants/appConstants').routeConsts.userRoute; // User Api constant
const quoteRoute = require('./constants/appConstants').routeConsts.quoteRoute; // Quote Api constant
const emailRoute = require('./constants/appConstants').routeConsts.emailRoute; // for emails handling / subscription
const reviewRoute = require('./constants/appConstants').routeConsts.reviewRoute; // for reviews
const trainingCertificationRoute = require('./constants/appConstants').routeConsts
	.trainingCertificationRoute; //for training&Certification
const appAdminPanelRoute = require('./constants/appConstants').routeConsts.appAdminPanelRoute; // for admin panel
const ourObjectivesRoute = require('./constants/appConstants').routeConsts.ourObjectivesRoute; //for our objectives
const joinTeamsRoute = require('./constants/appConstants').routeConsts.joinTeamsRoute; // for joinTeam
//const appSolutionRoute = require('./constants/appConstants').routeConsts.appSolutioRoute; // for appSolution
const opportunitesRoute = require('./constants/appConstants').routeConsts.opportuniteRoute; // for opportunites
const jobBenifitRoute = require('./constants/appConstants').routeConsts.jobBenifitsRoute; // for jobBenifits
const swaggerRoute = require('./constants/appConstants').routeConsts.swaggerDocRoute; // swagger doc constant
const userRouter = require('./routes/userRoutes'); // userRoute
const quoteRouter = require('./routes/quoteRoutes'); // quote Route
const emailRouter = require('./routes/emailRoutes'); // email route
const reviewRouter = require('./routes/reviewRoutes'); // review Route
const adminPanelRouter = require('./routes/appAdminPanelRoutes'); // Admin Panel Route
const ourObjectivesRouter = require('./routes/ourObjectivesRoutes'); // Our Objectives Route
const joinTeamsRouter = require('./routes/joinTeamRoutes'); // joinTeam Route
const appSolutionRouter = require('./routes/appSolutionRoutes'); // appSolution Route
const trainingCertificationRouter = require('./routes/trainingCertificationRoutes'); // training&Certification route
const jobBenifitRouter = require('./routes/jobBenifitsRoutes'); // job Benifits Route
const opportunitesRouter = require('./routes/opportunitesRoutes'); // opportunities Route
const globalErrorHandler = require('./utils/errorHandler'); // errorHandler

// For Slider
const sliderRoute = require('./constants/appConstants').routeConsts.sliderRoute;
const sliderRouter = require('./routes/sliderRoutes');

// For Services Section
const servicesRoute = require('./constants/appConstants').routeConsts.servicesRoute;
const servicesRouter = require('./routes/servicesRoutes');

// For Benifit Section
const benifitsRoute = require('./constants/appConstants').routeConsts.benifitsRoute;
const benifitsRouter = require('./routes/benifitsRoutes');

// For Our Work
const ourWorkRoute = require('./constants/appConstants').routeConsts.ourWorkRoute;
const ourWorkRouter = require('./routes/ourWorkRoutes');

// For Awards
const awardsRoute = require('./constants/appConstants').routeConsts.awardsRoute;
const awardsRouter = require('./routes/awardsRoutes');

// For How It Works
const howItWorksRoute = require('./constants/appConstants').routeConsts.howItWorksRoute;
const howItWorksRouter = require('./routes/howItWorksRoutes');

// Feedback and questions
const FAQsRoute = require('./constants/appConstants').routeConsts.FAQRoutes;
const FAQsRouter = require('./routes/FAQsRoutes');

// Case Studies
const caseStudiesRoute = require('./constants/appConstants').routeConsts.caseStudyRoute;
const caseStudiesRouter = require('./routes/caseStudiesRoutes');

// For Banners
const bannerRoute = require('./constants/appConstants').routeConsts.bannerRoute;
const bannerRouter = require('./routes/bannerRoutes');

// For Workflow
const workflowRoute = require('./constants/appConstants').routeConsts.workflowRoute;
const workflowRouter = require('./routes/workflowRoutes');

// For Facts About Us
const factsAboutUsRoute = require('./constants/appConstants').routeConsts.factsAboutUsRoute;
const factsAboutUsRouter = require('./routes/factsAboutUsRoutes');

// For Hiring Options
const hiringOptionsRoute = require('./constants/appConstants').routeConsts.hiringOptionsRoute;
const hiringOptionsRouter = require('./routes/hiringOptionsRoute');

const PORT = process.env.PORT || 3000; // port
const app = express();
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// CORS
app.use(cors());
//ejs for emails
app.set('view engine', 'ejs');

app.set('utils', path.join(__dirname, 'utils'));

// Morgan
app.use(
	morgan('dev', {
		skip: function (req, res) {
			return res.statusCode < 200;
		},
	})
);

// GLOBAL MIDDLEWARES
app.use(express.json()); // body parser (reading data from body to req.body)
app.use(cookieParser()); // cookie parser (reading data from cookie to req.cookie)

// swagger docs Route
app.use(swaggerRoute, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//ROUTES
app.use(userRoute, userRouter); // user route
app.use(quoteRoute, quoteRouter); // quote route
app.use(emailRoute, emailRouter); // email route
app.use(sliderRoute, sliderRouter); // slider route
app.use(servicesRoute, servicesRouter); // services route
app.use(benifitsRoute, benifitsRouter); // benifits route
app.use(ourWorkRoute, ourWorkRouter); // our work route
app.use(awardsRoute, awardsRouter); // awards route
app.use(howItWorksRoute, howItWorksRouter); // how it works route
app.use(FAQsRoute, FAQsRouter); // Feedback and questions
app.use(caseStudiesRoute, caseStudiesRouter); // case studies
app.use(bannerRoute, bannerRouter); //banner route
app.use(workflowRoute, workflowRouter); // workflow router
app.use(factsAboutUsRoute, factsAboutUsRouter);
app.use(hiringOptionsRoute, hiringOptionsRouter);
app.use(reviewRoute, reviewRouter); // review route
app.use(trainingCertificationRoute, trainingCertificationRouter); // training route
app.use(appAdminPanelRoute, adminPanelRouter); // Admin Panel Route
app.use(ourObjectivesRoute, ourObjectivesRouter); // our Objectives
app.use(joinTeamsRoute, joinTeamsRouter); // joinTeams
//app.use(appSolutionRoute, appSolutionRouter); // appSolutions
app.use(jobBenifitRoute, jobBenifitRouter); // jobBenifits
app.use(opportunitesRoute,opportunitesRouter); // Opportunite
app.all('*', (req, res, next) => {
	next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

//error handller
app.use(globalErrorHandler);

app.listen(PORT, () => {
	console.log(`Listening on Port ${PORT}`);
});
