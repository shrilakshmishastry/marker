import axios from 'axios';

const signUpHandler = async (values) => {
	console.log(values);
	try {
		const result = await axios.post('/api/userSignUphandle', {
			values
		});
		console.log(result);
		return result.response || result;
	} catch (e) {
		console.log(Object.keys(e));

		return e.response || e;
	}
};

export default signUpHandler;
