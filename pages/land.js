import { data } from 'data/initilaJobData';
import MainComponent from '../src/components/mainComponent/mainComponent';

const Land = ({ props }) => {
	return (
		<div>
			{props.data.map((value, index, array) => {
				return <MainComponent key={index} props={value} />;
			})}
		</div>
	);
};

export default Land;
