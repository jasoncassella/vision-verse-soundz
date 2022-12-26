import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import artistBios from '../../data/artistBios';

const Artists = () => {
	return (
		<section className='artists'>
			<Head>
				<title>VVS | Artists</title>
			</Head>
			{artistBios.map(artist => (
				<h1 key={artist.id}>
					<Link href='#'>{artist.name}</Link>
				</h1>
			))}
		</section>
	);
};

export default Artists;
