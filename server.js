const express = require('express');
const cookieParser = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
require('./config/dbConnection')(); // db connection
const AppError = require('./utils/AppError');
const userRoute = require('./constants/appConstants').userRoute; // user Api constant
const swaggerRoute = require('./constants/appConstants').swaggerDocRoute;
const userRouter = require('./routes/userRoutes'); // userRoute
const globalErrorHandler = require('./utils/errorHandler'); // errorHandler
const swaggerOptions = require('./constants/swaggerOptions');

const PORT = process.env.PORT || 3000; // port
const app = express();
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// GLOBAL MIDDLEWARES
app.use(express.json()); // body parser (reading data from body to req.body)
app.use(cookieParser()); // cookie parser (reading data from cookie to req.cookie)
// swagger docs Route
app.use(swaggerRoute, swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Routes

app.use(userRoute, userRouter);
app.all('*', (req, res, next) => {
	next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

//error handller
app.use(globalErrorHandler);

app.listen(PORT, () => {
	console.log(`Listening on Port ${PORT}`);
});
