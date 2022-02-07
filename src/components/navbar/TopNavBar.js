import Link from 'next/link';

const TopNavBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link href={'/'}>Home</Link>
				</li>
				<li>
					<Link href={'/recentPost'}>Recent</Link>
				</li>
				<li>
					<Link href={'/favorite'}>Favorites</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link href={'/profile'}>Profile</Link>
				</li>
			</ul>
		</nav>
	);
};
export default TopNavBar;
