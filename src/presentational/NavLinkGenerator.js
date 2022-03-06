import Link from 'next/link';
import { useRouter } from 'next/router';

const linkStyle = 'me-lg-5  text-center mb-3 mb-lg-0';

const NavLinkGenerator = ({ link, title }) => {
	const router = useRouter();
	return (
		<Link href={link}>
			<a className={router.pathname === link ? `topNavBar-collapseContent-link ${linkStyle}` : linkStyle}>
				{title}
			</a>
		</Link>
	);
};
export default NavLinkGenerator;
