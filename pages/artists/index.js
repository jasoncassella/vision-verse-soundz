import Head from 'next/head';
import Link from 'next/link';
import artistBios from '../../data/artistBios';

const Artists = () => {
	return (
		<section className='artists'>
			<Head>
				<title>VVS | Artists</title>
			</Head>
			{artistBios.map(artist => (
				<h1 className='font-bold' key={artistBios.indexOf(artist) + 1}>
					<Link href={`artists/${artist.url}`}>{artist.name}</Link>
				</h1>
			))}
		</section>
	);
};

export default Artists;
