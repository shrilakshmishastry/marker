import { Container, Row } from 'react-bootstrap';

import TopNavBar from './navbar/TopNavBar';

const ContainerWrapper = ({ children }) => {
	return (
		<Container fluid>
			<main>
				<Row>
					<TopNavBar />
				</Row>

				{children}
			</main>
		</Container>
	);
};
export default ContainerWrapper;
