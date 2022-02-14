import axios from 'axios';
import { data } from 'data/initilaJobData';
import React from 'react';
import Land from './land';

export default function Home(props) {
	return <Land props={props} />;
}

async function fetchMeData(val) {
	try {
		const result = await axios.get('http://172.26.193.60:3000/api/fetchPost', {
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
	let value = [];
	for (let i = 0; i < data.length; i++) {
		const result = await fetchMeData(data[i].socialMediaLink);
		const val = { ...result, ...data[i] };
		value.push(val);
	}
	return {
		props: { data: value }
	};
}
