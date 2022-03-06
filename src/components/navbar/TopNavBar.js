import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Modal, Nav, Navbar } from 'react-bootstrap';
import NavLinkGenerator from 'src/presentational/NavLinkGenerator';
import { useCookies } from 'react-cookie';
import ModalBase from '../LoginSignUpModal/ModalBase';
const linkStyle = 'me-lg-5  text-center mb-3 mb-lg-0';

const TopNavBar = () => {
	const router = useRouter();
	const [ cookies, setCookies, removeCookies ] = useCookies();
	const [ showModal, setshowModal ] = useState(false);

	const cookiePresentOrNot = Object.keys(cookies).includes('user');
	return (
		<React.Fragment>
			<ModalBase showModal={showModal} handleModalClose={() => setshowModal(false)} />
			<Navbar bg="white" className="topNavBar shadow-sm" expand="lg">
				<Container className="topNavBar-container">
					<Link href={'/'}>
						<Navbar.Brand>Marker</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls="marker_navbar" />
					<Navbar.Collapse className="" id="marker_navbar ">
						<Nav className="ms-auto topNavBar-collapseContent">
							<NavLinkGenerator link={'/'} title="Home" />
							<NavLinkGenerator link={'/recentPost'} title="Recent" />
							<NavLinkGenerator link={'/favorite'} title="Favorite" />
						</Nav>
						<Nav className="ms-auto topNavBar-collapseContent">
							{cookiePresentOrNot ? (
								<NavLinkGenerator link={'/profile'} title="Profile" />
							) : (
								<button onClick={() => setshowModal(true)} className="btn btn-primary">
									Login
								</button>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
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
