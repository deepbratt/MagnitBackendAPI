const nodemailer = require('nodemailer');

module.exports = class Email {
	constructor(user,url) {
		this.to = user.email;
		this.firstName = user.firstName;
		this.lastName = user.lastName;
		this.url = url;
		this.from = `Magnet <magnetTeam@sandgrid.net>`;
	}
	newTransport() {
		// if (process.env.NODE_ENV === 'production') {
		// 	//request
		// }
		return nodemailer.createTransport({
			host: process.env.MAIL_TRAP_HOST,
			port: process.env.MAIL_TRAP_PORT,
			auth: {
				user: process.env.MAIL_TRAP_USERNAME,
				pass: process.env.MAIL_TRAP_PASSWORD,
			},
		});
	}

	async send(subject) {
		// mail options
		const mailOptions = {
			from: this.from,
			to: this.to,
			subject,
			text: this.url,
		};
		//create transport and send email
		await this.newTransport().sendMail(mailOptions);
	}

	// async sendEmailQuoteCreate() {
	// 	await this.send(
	// 		'your Qoute has been created successfully! We will respond you as early as possible.',
	// 		'Quote Created'
	// 	);
	// }
	async sendPasswordResetToken() {
		await this.send('Your Password Reset Link(only valid for 10 minutes)');
	}
};
