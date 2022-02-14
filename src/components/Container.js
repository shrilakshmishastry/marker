import { Col, Row } from 'react-bootstrap';
import LeftNavBar from './navbar/LeftNavBar';
import TopNavBar from './navbar/TopNavBar';

const Container = ({ children }) => {
	return (
		<main>
			<TopNavBar className="col-md-3" />
			<Row className="">
				<Col md={3} className="">
					<LeftNavBar />
				</Col>
				<Col md={9} className="">
					{children}
				</Col>
			</Row>
		</main>
	);
};
export default Container;
