const mailgun = require('mailgun-js');
const DOMAIN = 'themagnit.com';

module.exports = class Email {
	constructor(to, obj) {
		this.obj = obj;
		this.to = to;
		this.from = `Magnit <info@themagnit.com>`;
	}

	newTransport() {
		return mailgun({
			apiKey: 'b90b68c303751feada725cdd64ee3b2b-a0cfb957-d74f1609',
			domain: DOMAIN,
		});
	}

	async send(template, subject, object) {
		// mail options
		const data = {
			from: this.from,
			to: this.to,
			subject: subject,
			template: template,
			'h:X-Mailgun-Variables': object,
		};
		//create transport and send email
		await this.newTransport().messages().send(data);
	}

	async quoteCreateRes() {
		await this.send('request-quote-response', 'Quote Submitted', `{ "fname": "${this.obj.name}" }`);
	}
	async quoteCreateResAdmin() {
		await this.send('quote-submission', 'Quote Alert', 
		`{"fname": "${this.obj.name}",\
		  "email": "${this.obj.email}",\
		  "phone": "${this.obj.phone}",\
		  "company": "${this.obj.companyName}",\
		  "project": "${this.obj.projectDetails}"}`);
	}
	async sendPasswordResetToken() {
		await this.send(
			'reset-password',
			'Your Password Reset Link(only valid for 10 minutes)',
			`{"fname": "${this.obj.firstName}","resetLink": "${this.obj.resetURL}"}`
		);
	}
	async customEmail() {
		await this.send('custom', 'Customer Support', 
		`{"fname": "${this.obj.firstName}",\
		  "text": "${this.obj.text}"}`
		);
	}
};
