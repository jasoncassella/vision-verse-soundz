import Head from 'next/head';
import Album from '../components/Album';
import songs from '../data/songs';

const Releases = () => {
	const albums = songs.map(item => <Album key={songs.indexOf(item) + 1} {...item} />);

	return (
		<section className='releases'>
			<Head>
				<title>VVS | Releases</title>
			</Head>

			{albums}
		</section>
	);
};

export default Releases;
