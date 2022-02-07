import axios from 'axios';
import { data } from 'data/initilaJobData';
import Land from './land';

export default function Home(props) {
	return <Land props={props} />;
}

async function fetchMeData(params) {
	try {
		const result = await axios.get('http://192.168.195.254:3000/api/fetchPost', {
			params: {
				url: params
			}
		});
		// console.log(result);
		return result;
	} catch (e) {
		console.log(e);
		return {};
	}
}

export async function getServerSideProps(context) {
	let value = [];
	for (let i = 0; i < data.length; i++) {
		const result = await fetchMeData(data[i].socialMediaLink);
		const val = { ...result.data.data, ...data[i] };
		value.push(val);
	}
	// let valu = data.map(async (value, index, array) => {
	// 	const result = await fetchMeData(value.socialMediaLink);
	// 	return result.data.data;
	// });
	// console.log(value);
	// console.log(valu);
	return {
		props: { data: value }
	};
}
