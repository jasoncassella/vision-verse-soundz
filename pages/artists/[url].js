import artistBios from '../../data/artistBios';
import Head from 'next/head';
import Link from 'next/link';

export const getStaticPaths = () => {
	const paths = artistBios.map(artist => {
		return {
			params: { url: artist.url },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = context => {
	const url = context.params.url;
	const artist = artistBios.find(artist => artist.url === url);
	return {
		props: { artist },
	};
};

const Bio = ({ artist }) => {
	return (
		<section className='bio'>
			<Head>
				<title>VVS | {artist.name}</title>
			</Head>
			<h1 className='text-5xl font-bold text-center my-10'>{artist.name}</h1>
			<p className='text'>{artist.description}</p>
			<button className='px-8 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-300 hover:to-blue-400'>
				<Link href={artist.link} target='_blank'>
					Discover
				</Link>
			</button>
		</section>
	);
};

export default Bio;
