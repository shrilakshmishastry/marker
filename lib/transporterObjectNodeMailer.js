const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: process.env.user_name,
		pass: process.env.password
	}
});

export default transporter;
