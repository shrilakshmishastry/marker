import axios from 'axios';
import { data } from 'data/initilaJobData';
import Link from 'next/link';
import React, { useEffect } from 'react';

const MainComponent = ({ props }) => {
	return (
		<React.Fragment>
			<p>{props.description}</p>
			hello
		</React.Fragment>
	);
};

export default MainComponent;
