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
			<p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sequi veritatis quaerat maiores neque nihil nemo voluptatibus esse accusantium necessitatibus similique dolore iure aperiam cupiditate adipisci, commodi voluptas hic! Impedit debitis nemo eius qui corrupti illo totam? Perspiciatis excepturi tenetur saepe eum ratione voluptatem nisi, assumenda minus sed deserunt quidem eaque delectus quisquam dolores natus laborum nesciunt.</p>
			</div>
		</>
	);
}
