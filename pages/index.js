import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';

export default function Home() {
	return (
		<>
			<Head>
				<title>Vision Verse Soundz</title>
				<meta name='description' content='Management Company' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div>
				<h1 className='title'>Vision Verse Soundz</h1>
				<p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nisi repellendus commodi error ea aperiam unde, quibusdam recusandae, molestiae veritatis, quis cum at ullam quisquam laboriosam laborum minus quo illum beatae maiores nihil pariatur voluptatibus eum. A, cum architecto fugiat nulla nobis facere fugit tempore perspiciatis mollitia maxime numquam laudantium?</p>
			</div>
		</>
	);
}
