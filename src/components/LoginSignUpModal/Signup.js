import { useFormik } from 'formik';
import { useState } from 'react';
import signUpHandler from 'src/apiCalls/signUpHandler';
import userSignupSchema from 'src/schema/userSignUpSchema';

const SignUp = ({ showModal, handleModalClose, setlayout, seterrorTextShow }) => {
	const [ loading, setloading ] = useState(false);
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			name: ''
		},
		validationSchema: userSignupSchema,
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			setloading(true);
			const result = await signUpHandler(values);

			setSubmitting(false);
			console.log(result);
			// how to solve this
			if (result.status === 301) {
				setloading(false);
				seterrorTextShow(true);
				setlayout('Login');
			}
		}
	});

	return (
		<div>
			{loading ? (
				<p>loading</p>
			) : (
				<form onSubmit={formik.handleSubmit}>
					<input id="name" type="text" {...formik.getFieldProps('name')} />
					{formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
					<input id="email" type="email" {...formik.getFieldProps('email')} />
					{formik.touched.email && formik.errors.email ? <div>{formik.errors.email.toString()}</div> : null}
					<input id="password" type="password" {...formik.getFieldProps('password')} />
					{formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			)}
		</div>
	);
};
export default SignUp;
