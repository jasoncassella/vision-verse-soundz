import Image from 'next/image';
import { Navbar, Dropdown } from 'flowbite-react';
import artistBios from '../data/artistBios';
import { useRouter } from 'next/router';

const Header = () => {
	const { asPath } = useRouter();

	const artists = ['/lav-lew', '/cay-slatt', '/noso10', '/shan-x'];

	console.log(asPath);
	return (
		<Navbar fluid={true} rounded={true} className='bg-inherit'>
			<Navbar.Brand href='/'>
				<Image
					src='/logo.png'
					className='mr-3 h-16'
					alt='Flowbite Logo'
					width={100}
					height={40}
				/>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Navbar.Link
					href='/'
					className={`block py-2 pr-4 pl-3 md:p-0 border-b border-gray-700 hover:bg-gray-700 hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-white ${
						asPath === '/' ? 'text-blue-400' : 'text-gray-400'
					}`}>
					Home
				</Navbar.Link>
				<div
					className={`block py-2 pr-4 pl-3 md:p-0 border-b border-gray-700 hover:bg-gray-700 hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-white ${
						artists.some(artist => artist === asPath)
							? 'text-blue-400'
							: 'text-gray-400'
					}`}>
					<Dropdown arrowIcon={true} inline={true} label='Artists'>
						{artistBios.map(artist => (
							<Dropdown.Item key={artistBios.indexOf(artist) + 1}>
								<a href={`/${artist.url}`}>{artist.name}</a>
							</Dropdown.Item>
						))}
					</Dropdown>
				</div>
				<Navbar.Link
					href='/about'
					className={`block py-2 pr-4 pl-3 md:p-0 border-b border-gray-700 hover:bg-gray-700 hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-white ${
						asPath === '/about' ? 'text-blue-400' : 'text-gray-400'
					}`}>
					About
				</Navbar.Link>
				<Navbar.Link
					href='/releases'
					className={`block py-2 pr-4 pl-3 md:p-0 border-b border-gray-700 hover:bg-gray-700 hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-white ${
						asPath === '/releases' ? 'text-blue-400' : 'text-gray-400'
					}`}>
					Releases
				</Navbar.Link>
				<Navbar.Link
					href='/contact'
					className={`block py-2 pr-4 pl-3 md:p-0 border-b border-gray-700 hover:bg-gray-700 hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-white ${
						asPath === '/contact' ? 'text-blue-400' : 'text-gray-400'
					}`}>
					Contact
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
