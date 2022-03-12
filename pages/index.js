import axios from 'axios';
import { data } from 'data/initilaJobData';
import clientPromise, { dbConnect } from 'lib/mongodb';
import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import LeftNavBar from 'src/components/navbar/LeftNavBar';
import Land from './land';

const landLeftNav = [
	{
		title: 'Filters',
		isItLink: false
	},
	{
		title: 'All Collection',
		isItLink: true
	},
	{
		title: 'Twitter',
		isItLink: true
	},
	{
		title: 'Discord',
		isItLink: true,
		icon: ''
	},
	{
		title: 'LinkedIn',
		isItLink: true,
		icon: ''
	}
];

export default function Home(props) {
	const [ data, setdata ] = useState(props.data);

	const [ link, setlink ] = useState('All Collection');
	// useEffect(
	// 	() => {
	// 		setdata(props);
	// 	},
	// 	[ data ]
	// );

	function handleNavChange(value) {
		setlink(value);
		if (value != 'Filters' && value != 'All Collection') {
			setdata(props.data.filter((val) => val.socialMediaLink.includes(value.toLowerCase())));
		} else {
			setdata(props.data);
		}
	}

	return (
		<Row className="">
			<Col md={{ span: 3 }} xs={12} sm={12} className="">
				<LeftNavBar handleClick={handleNavChange} data={landLeftNav} />
			</Col>
			<Col md={9} className="mt-5">
				<h5 className="fw-bold">{link}</h5>
				<hr className="mb-5" />
				<Land props={data} />
			</Col>
		</Row>
	);
}

async function fetchMeData(val) {
	try {
		const result = await axios.get('http://172.24.148.27:3000/api/fetchPost', {
			params: {
				url: val
			}
		});
		return result.data;
	} catch (e) {
		return 'error';
	}
}

export async function getServerSideProps(context) {
	let value;
	try {
		const link = await dbConnect();
		console.log('connected');

		value = await axios.get('http://172.24.151.27:3000/api/fetchInitialData');
	} catch (e) {
		console.log(e);
		value = [];
	}
	// for (let i = 0; i < data.length; i++) {
	// 	const result = await fetchMeData(data[i].socialMediaLink);
	// 	const val = { ...result, ...data[i] };
	// 	value.push(val);
	// }
	if (Array.isArray(value)) {
		return {
			props: { data: value }
		};
	} else {
		return {
			props: { data: value.data }
		};
	}
}
