import FilterDesktop from 'presentational/FilterDesktop';
import FilterMobile from 'presentational/FilterMobile';
import { useEffect, useState } from 'react';
const LeftNavBar = ({}) => {
	const [ innerWidth, setinnerWidth ] = useState(0);
	const [ innerHeight, setinnerHeight ] = useState(0);
	useEffect(() => {
		setinnerWidth(window.innerWidth);
		setinnerHeight(window.innerHeight);
	}, []);

	return <div>{innerWidth >= 900 ? <FilterDesktop /> : <FilterMobile />}</div>;
};

export default LeftNavBar;
