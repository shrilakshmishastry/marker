import LeftNavBar from './navbar/LeftNavBar';
import TopNavBar from './navbar/TopNavBar';

const Container = ({ children }) => {
	return (
		<main>
			<TopNavBar />
			<div>
				<LeftNavBar />
				{children}
			</div>
		</main>
	);
};
export default Container;
