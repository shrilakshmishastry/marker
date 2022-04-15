import { Container, Row } from "react-bootstrap";

import TopNavBar from "./navbar/TopNavBar";

const ContainerWrapper = ({ children, themeSwitcher }) => {
  return (
    <Container fluid>
      <main>
        <Row>
          <TopNavBar themeSwitcher={(theme) => themeSwitcher(theme)} />
        </Row>
        {children}
      </main>
    </Container>
  );
};
export default ContainerWrapper;
