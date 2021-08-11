const nodemailer = require('nodemailer');
const ejs = require('ejs');

module.exports = class Email {
	constructor(user, url) {
		this.to = user.email;
		this.firstName = user.firstName;
		this.lastName = user.lastName;
		this.url = url;
		this.from = `Magnet <magnetTeam@gmail.com>`;
	}
	newTransport() {
		if (process.env.NODE_ENV === 'production') {
			return nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: process.env.TEMP_EMAIL,
					pass: process.env.TEMP_PASSWORD,
				},
			});
		}
		return nodemailer.createTransport({
			host: process.env.MAIL_TRAP_HOST,
			port: process.env.MAIL_TRAP_PORT,
			auth: {
				user: process.env.MAIL_TRAP_USERNAME,
				pass: process.env.MAIL_TRAP_PASSWORD,
			},
		});
	}

	async send(template, subject) {
		//render html based on ejs temp
		const html = await ejs.renderFile(`utils/emailTemplates/${template}.ejs`, {
			firstName: this.firstName,
			url: this.url,
		});
		// mail options
		const mailOptions = {
			from: this.from,
			to: this.to,
			subject,
			html,
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
		await this.send('passwordReset', 'Your Password Reset Link(only valid for 10 minutes)');
	}
};
