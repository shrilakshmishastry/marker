import { Row } from "react-bootstrap";
import FilterContentRenderer from "./FilterContentRenderer";
import { useState } from "react";

const FilterDesktop = ({ data, handleClick }) => {
  const [active, setActive] = useState("All Collection");
  return (
    <Row className=" pt-5 ms-lg-5">
      {data.map((value, index) => {
        return (
          <FilterContentRenderer
            key={`${index}filterDesktop`}
            handleClick={(value) => handleClick(value)}
            value={value}
            active={active}
            setActive={(value) => setActive(value)}
          />
        );
      })}
    </Row>
  );
};
export default FilterDesktop;
