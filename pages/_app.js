import LeftNavBar from '../src/components/navbar/LeftNavBar';
import TopNavBar from '../src/components/navbar/TopNavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<TopNavBar>
			<div>
				<LeftNavBar />
				<Component {...pageProps} />
			</div>
		</TopNavBar>
	);
}

export default MyApp;
