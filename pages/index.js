import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

export default function Home() {
	return (
		<section className='home'>
			<Head>
				<title>Vision Verse Soundz</title>
				<meta name='description' content='Management Company' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div>
				<h1 className='text-5xl font-bold text-center my-10'>Vision Verse Soundz</h1>
				<p className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat obcaecati
					quas eum! Modi maiores repudiandae quos enim voluptatibus error, optio
					labore laborum reprehenderit. Magni quisquam necessitatibus aliquam
					delectus asperiores et.
				</p>
			</div>
		</section>
	);
}
