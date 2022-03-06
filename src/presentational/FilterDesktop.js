import { Row } from 'react-bootstrap';
import FilterContentRenderer from './FilterContentRenderer';

const FilterDesktop = ({ data, handleClick }) => {
	return (
		<Row className=" pt-5 ms-lg-5">
			{data.map((value, index) => {
				return (
					<FilterContentRenderer
						key={`${index}filterDesktop`}
						handleClick={(value) => handleClick(value)}
						value={value}
					/>
				);
			})}
		</Row>
	);
};
export default FilterDesktop;
