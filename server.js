const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
dotenv.config({ path: './config/config.env' }); // read config.env to environmental variables
require('./config/dbConnection')(); // db connection
const AppError = require('./utils/AppError');
const userRoute = require('./constants/appConstants').routeConsts.userRoute; // User Api constant
const quoteRoute = require('./constants/appConstants').routeConsts.quoteRoute; // Quote Api constant
const emailRoute = require('./constants/appConstants').routeConsts.emailRoute; // for emails handling / subscription
const swaggerRoute = require('./constants/appConstants').routeConsts
  .swaggerDocRoute; // swagger doc constant
const userRouter = require('./routes/userRoutes'); // userRoute
const quoteRouter = require('./routes/quoteRoutes'); // quote Route
const emailRouter = require('./routes/emailRoutes'); // email route
const globalErrorHandler = require('./utils/errorHandler'); // errorHandler
const swaggerOptions = require('./constants/swaggerOptions');

const sliderRoute = require('./constants/appConstants').routeConsts.sliderRoute;
const sliderRouter = require('./routes/sliderRoutes');

const PORT = process.env.PORT || 3000; // port
const app = express();
const swaggerDocs = swaggerJsDoc(swaggerOptions);
// CORS
app.use(cors());

// CORS
app.use(cors());

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

app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

//error handller
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
