import { data } from 'data/initilaJobData';
import { parseCookies } from 'helpers';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const Favorites = (props) => {
	const [ getStorage, setgetStorage ] = useState('');
	const [ cookies, setCookies, removeCookies ] = useCookies([ 'user' ]);
	const router = useRouter();
	useEffect(() => {
		// setCookies('user', 'shrilakshmi', {
		// 	path: '/',
		// 	maxAge: 3600,
		// 	sameSite: true
		// });
		removeCookies('user');
	}, []);
	if (!Object.keys(data).includes('user')) {
		return <div>please login</div>;
	}
	return <div>hello</div>;
};

export async function getServerSideProps({ req }) {
	const data = parseCookies(req);
	return {
		props: {
			data: data
		}
	};
}

export default Favorites;
