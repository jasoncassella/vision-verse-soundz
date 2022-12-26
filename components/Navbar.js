import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav>
			<Link className='link' href='/' id='logo'>
				<Image src='/logo.png' alt='logo' width={100} height={64} priority />
			</Link>
			<Link className='link' href='/artists'>
				Artists
			</Link>
			<Link className='link' href='/releases'>
				Releases
			</Link>
			<Link className='link' href='/contact'>
				Contact
			</Link>
		</nav>
	);
};

export default Navbar;
