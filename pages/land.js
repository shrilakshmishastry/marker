import LinkPreview from '@ashwamegh/react-link-preview';
import { data } from 'data/initilaJobData';
import { Container, Row, Col } from 'react-bootstrap';
import MainComponent from '../src/components/mainComponent/mainComponent';

const Land = ({ props }) => {
	console.log(props);
	return (
		<Container className="">
			<Row>
				{props.data.map((value, index, array) => {
					return (
						<Col md={4} className="mainComponent">
							<MainComponent data={value} />
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default Land;
