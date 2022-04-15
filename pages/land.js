import { Row, Col } from "react-bootstrap";
import MainComponent from "../src/components/mainComponent/mainComponent";

const Land = ({ props }) => {
  if (props.length === 0) {
    return (
      <div>
        <p className="header">No posts yet</p>
      </div>
    );
  }
  return (
    <Row className="">
      {props.map((value, index, array) => {
        return (
          <Col
            key={index.toString()}
            md={6}
            sm={12}
            xs={12}
            lg={4}
            className="mainComponent mb-md-5 mb-lg-0 mb-0"
          >
            <MainComponent data={value} />
          </Col>
        );
      })}
    </Row>
  );
};

export default Land;
