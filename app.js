const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/v1/userData', (req, res) => {
	try {
		const name = 'Azeem';
		const email = 'azeem0322@gmail.com';
		res.json({
			data: {
				status: 'success',
				data: {
					name,
					email,
				},
			},
		});
	} catch (error) {
		res.json({
			msg: error,
		});
	}
});

app.listen(PORT, () => {
	console.log(`listening at ${PORT}`);
});
