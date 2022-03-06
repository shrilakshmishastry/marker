import * as yup from 'yup';

yup.setLocale({
	string: {
		min: `Min 8 character is required`,
		required: `Please fill in the value`
	}
});

let userSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required().min(8)
});

export default userSchema;
