const TokenVerificationSignUp = (req, res) => {
	res.statusCode = 200;
	res.end(JSON.stringify('verified'));
};
export default TokenVerificationSignUp;
