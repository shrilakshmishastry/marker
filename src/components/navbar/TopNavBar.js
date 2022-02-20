import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container, Nav, Navbar } from 'react-bootstrap';

const linkStyle = 'me-lg-5  text-center mb-3 mb-lg-0';

const TopNavBar = () => {
	const router = useRouter();

	return (
		<Navbar bg="white" className="topNavBar shadow-sm" expand="lg">
			<Container className="topNavBar-container">
				<Link href={'/'}>
					<Navbar.Brand>Marker</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="marker_navbar" />
				<Navbar.Collapse className="" id="marker_navbar ">
					<Nav className="ms-auto topNavBar-collapseContent">
						<Link href={'/'}>
							<a
								className={
									router.pathname === '/' ? `topNavBar-collapseContent-link ${linkStyle}` : linkStyle
								}
							>
								Home
							</a>
						</Link>
						<Link href={'/recentPost'}>
							<a
								className={
									router.pathname === '/recentPost' ? (
										`topNavBar-collapseContent-link ${linkStyle}`
									) : (
										linkStyle
									)
								}
							>
								Recent
							</a>
						</Link>
						<Link href={'/favorite'}>
							<a
								className={
									router.pathname === '/favorite' ? (
										`topNavBar-collapseContent-link ${linkStyle}`
									) : (
										linkStyle
									)
								}
							>
								Favorite
							</a>
						</Link>
					</Nav>
					<Nav className="ms-auto topNavBar-collapseContent">
						<Link href={'/profile'}>
							<a
								className={
									router.pathname === '/profile' ? (
										`topNavBar-collapseContent-link ${linkStyle}`
									) : (
										linkStyle
									)
								}
							>
								Profile
							</a>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default TopNavBar;

// <ul>
// 			<li>
// 				<Link href={'/'}>Home</Link>
// 			</li>
// 			<li>
// 				<Link href={'/recentPost'}>Recent</Link>
// 			</li>
// 			<li>
// 				<Link href={'/favorite'}>Favorites</Link>
// 			</li>
// 		</ul>
// 		<ul>
// 			<li>
// 				<Link href={'/profile'}>Profile</Link>
// 			</li>
// 		</ul>
