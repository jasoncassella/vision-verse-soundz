import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav>
			<Link className='link' href='/' id='logo'>
				<Image src="/logo.png" alt="logo" width={80} height={50}  />
			</Link>
			<Link className='link' href='/artists' >Artists</Link>
			<Link className='link' href='/releases' >Releases</Link>
		</nav>
	);
};

export default Navbar;
