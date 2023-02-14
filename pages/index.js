import Head from 'next/head';

export default function Home() {
	return (
		<section className='text-center my-6 max-w-screen-2xl'>
			<Head>
				<title>Vision Verse Soundz</title>
				<meta name='description' content='Management Company' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white'>
				VisionVerse Soundz
			</h1>
			<p className='mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-400'>
				VisionVerse Soundz (VVS) is an artist management and services company
				currently based in Brooklyn, NY representing four upcoming rappers: Lav.Lew,
				Cay Slatt, Noso1o, and Praise.
			</p>
			<a
				href='#'
				className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'>
				Learn more
				<svg
					className='w-5 h-5 ml-2 -mr-1'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
						clipRule='evenodd'></path>
				</svg>
			</a>
		</section>
	);
}
