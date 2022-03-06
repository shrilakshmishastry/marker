import axios from 'axios';

const loginHandler = async (values) => {
	console.log(values);
	try {
		const result = await axios.post('/api/userSignUphandle', {
			values
		});
		console.log(result);
	} catch (e) {
		console.log(e);
	}
};

export default loginHandler;
