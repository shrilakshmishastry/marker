import { useFormik } from 'formik';
import loginHandler from 'src/apiCalls/loginHandler';
import userSchema from 'src/schema/userLoginSchema';
import { useEffect } from 'react';
const Login = ({ handleModalClose, setlayout, seterrorTextShow }) => {
	useEffect(() => {
		setTimeout(() => {
			seterrorTextShow(false);
		}, 5000);
	}, []);
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: userSchema,
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			try {
				const result = await loginHandler(values);

				setSubmitting(false);
				// how to solve this
				if (result) {
					resetForm();
					await handleModalClose();
				}
			} catch (e) {}
		}
	});

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<input id="email" type="email" {...formik.getFieldProps('email')} />
				{formik.touched.email && formik.errors.email ? <div>{formik.errors.email.toString()}</div> : null}
				<input id="password" type="password" {...formik.getFieldProps('password')} />
				{formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
			<div>
				Don't have an account
				<button className="btn btn-light" onClick={() => setlayout('SignUp')}>
					Sign up now
				</button>
			</div>
		</div>
	);
};
export default Login;
