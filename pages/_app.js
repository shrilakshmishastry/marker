import Container from 'src/components/Container';
import '../styles/index.scss';
import React, { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	const [ loading, setLoading ] = useState(true);
	useEffect(() => {
		setLoading(false);
	}, []);
	return (
		<React.Fragment>
			{loading ? (
				<React.Fragment>
					<div>hello</div>
				</React.Fragment>
			) : (
				<Container>
					<Component {...pageProps} />
				</Container>
			)}
		</React.Fragment>
	);
}

export default MyApp;
