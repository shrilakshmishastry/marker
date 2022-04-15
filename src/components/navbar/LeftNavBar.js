import FilterDesktop from "src/presentational/FilterDesktop";
import FilterMobile from "src/presentational/FilterMobile";
import { useEffect, useState } from "react";
const LeftNavBar = ({ data, handleClick }) => {
  const [innerWidth, setinnerWidth] = useState(0);
  const [innerHeight, setinnerHeight] = useState(0);
  useEffect(() => {
    setinnerWidth(window.innerWidth);
    setinnerHeight(window.innerHeight);
    console.log(innerWidth);
  }, []);

  return (
    <div>
      {innerWidth >= 800 ? (
        <FilterDesktop
          handleClick={(value) => handleClick(value)}
          data={data}
        />
      ) : (
        <FilterMobile handleClick={(value) => handleClick(value)} data={data} />
      )}
    </div>
  );
};

export default LeftNavBar;
