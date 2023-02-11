import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Dropdown } from 'flowbite-react';
import artistBios from '../data/artistBios';

const Header = () => {
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
				<Navbar.Link href='/navbars' active={true}>
					Home
				</Navbar.Link>
				<div className='block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>
					<Dropdown arrowIcon={true} inline={true} label='Artists'>
						{artistBios.map(artist => (
							<Dropdown.Item key={artistBios.indexOf(artist) + 1}>
								<a href={`/${artist.url}`}>{artist.name}</a>
							</Dropdown.Item>
						))}
					</Dropdown>
				</div>
				<Navbar.Link href='/about'>About</Navbar.Link>
				<Navbar.Link href='/releases'>Releases</Navbar.Link>
				<Navbar.Link href='/contact'>Contact</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
