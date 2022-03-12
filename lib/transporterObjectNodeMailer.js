const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'jobmarker0@gmail.com',
		pass: 'jobMaker227928'
	}
});

export default transporter;
