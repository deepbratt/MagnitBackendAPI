const nodemailer = require('nodemailer');
const config = require('config');
const NODE_ENV = config.get('ENV');
const MAIL_TRAP_USERNAME = config.get('MAIL_TRAP_USERNAME');
const MAIL_TRAP_PASSWORD = config.get('MAIL_TRAP_PASSWORD');
const MAIL_TRAP_HOST = config.get('MAIL_TRAP_HOST');
const MAIL_TRAP_PORT = config.get('MAIL_TRAP_PORT');

module.exports = class Email {
	constructor(user) {
		this.to = user.email;
		this.name = user.name;
		//this.url = url;
		this.from = `Magnet <magnetTeam@gmail.com>`;
	}

	newTransport() {
		// if (NODE_ENV === 'production') {
		// 	return nodemailer.createTransport({
		// 		service: 'gmail',
		// 		auth: {
		// 			user: EMAIL,
		// 			pass: PASSWORD,
		// 		},
		// 	});
		// }
		return nodemailer.createTransport({
			host: MAIL_TRAP_HOST,
			port: MAIL_TRAP_PORT,
			auth: {
				user: MAIL_TRAP_USERNAME,
				pass: MAIL_TRAP_PASSWORD,
			},
		});
	}

	async send(message, subject) {
		// mail options
		const mailOptions = {
			from: this.from,
			to: this.to,
			subject,
			text:message,
		};
		//create transport and send email
		await this.newTransport().sendMail(mailOptions);
	}

	async sendEmailQuoteCreate() {
		await this.send('your Qoute has been created successfully! We will respond you as early as possible.', 'Quote Created');
	}
};
