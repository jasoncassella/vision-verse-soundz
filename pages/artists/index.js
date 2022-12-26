import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

const Artists = () => {
	return (
		<section className='artists'>
			<Head>
				<title>VVS | Artists</title>
			</Head>
			<h1>
				<Link href='#'>Lav.Lew</Link>
			</h1>
			<h1>
				<Link href='#'>Shan.X</Link>
			</h1>
			<h1>
				<Link href='#'>Noso10</Link>
			</h1>
			<h1>
				<Link href='#'>Cay Slatt</Link>
			</h1>
		</section>
	);
};

export default Artists;
