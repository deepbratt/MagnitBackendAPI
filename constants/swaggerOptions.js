const swaggerOptions = {
	definition: {
		info: {
			title: 'Magnet Api',
			description: 'Magnet API information',
		},
	},
	apis: ['./routes/*.js'],
};

module.exports = swaggerOptions;
