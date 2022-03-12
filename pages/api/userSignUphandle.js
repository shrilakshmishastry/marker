import { dbConnect } from 'lib/mongodb';
import transporter from 'lib/transporterObjectNodeMailer';
import TemprorayUserLoginData from 'src/models/TemprorayUserLoginData';
import User from 'src/models/User';
const jwt = require('jsonwebtoken');
const privateKey = process.env.SECRETE_KEY;

const UserSignUpHandle = async (req, res) => {
	if (req.method === 'POST') {
		console.log(req.body);
		const { name, email, password } = req.body.values;
		console.log(name);
		try {
			await dbConnect();
			// const user = new User(req.body.values);
			const result = await User.findOne({ email });
			// const result = await user.save();
			console.log(result);
			if (result && result.email) {
				res.statusCode = 301;
				res.end(JSON.stringify('User exists'));
			}
			const token = jwt.sign(
				{
					exp: Math.floor(Date.now() / 1000) + 60 * 15,
					data: {
						name,
						email,
						password
					}
				},
				privateKey
			);
			const userTemp = new TemprorayUserLoginData({
				email,
				token
			});
			const addTempUser = await userTemp.save();
			transporter.verify(function(error, success) {
				console.log('hello');
				if (error) {
					console.log(error);
				} else {
					console.log('success');
				}
			});
			const emailUser = 'shrilakshmishastry@gmail.com';
			const message = 'Hello world';
			const content = `email : ${email}\n message :${message}`;
			const mail = {
				from: 'shrilakshmishastry@gmail.com',
				to: 'shrilakshmishastry@gmail.com',
				message: 'Verify me',
				text: content
			};
			transporter.sendMail(mail, (err, data) => {
				if (err) {
					console.log(err);
				} else {
					console.log(data);
				}
			});
			res.statusCode = 200;
			res.end(JSON.stringify('accepted'));
		} catch (e) {
			console.log(e);
			res.statusCode = 404;
			res.end(JSON.stringify('Some error'));
		}
	}
};

export default UserSignUpHandle;
