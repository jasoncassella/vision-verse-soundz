import Link from 'next/link';

const Navbar = () => {
	return (
		<nav>
			<Link href='/' id='logo'>VVS</Link>
			<Link href='/artists' >Artists</Link>
		</nav>
	);
};

export default Navbar;
