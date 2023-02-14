import Link from 'next/link';

const Footer = () => {
	const d = new Date();
	const year = d.getFullYear();
	return (
		<footer className='p-4 bg-inherit sm:p-6 dark:bg-gray-900'>
			<div className='md:flex md:justify-between md:items-center '>
				<div className='mb-6 md:mb-0'>
					<Link href='/' className='flex items-center justify-center'>
						<img src='/logo.png' className='h-20 mr-3' alt='FlowBite Logo' />
						{/* <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>
							VisionVerse Soundz
						</span> */}
					</Link>
				</div>
				<div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
					<div>
						<h2 className='mb-6 text-sm font-semibold uppercase text-white'>
							Resources
						</h2>
						<ul className='text-gray-400'>
							<li className='mb-4'>
								<a href='https://flowbite.com/' className='hover:underline'>
									VVS
								</a>
							</li>
							<li>
								<a href='https://tailwindcss.com/' className='hover:underline'>
									Tailwind CSS
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className='mb-6 text-sm font-semibold uppercase text-white'>
							Follow us
						</h2>
						<ul className='text-gray-400'>
							<li className='mb-4'>
								<a
									href='https://github.com/themesberg/flowbite'
									className='hover:underline '>
									Github
								</a>
							</li>
							<li>
								<a href='https://discord.gg/4eeurUVvTy' className='hover:underline'>
									Discord
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className='mb-6 text-sm font-semibold uppercasetext-white'>Legal</h2>
						<ul className='text-gray-400'>
							<li className='mb-4'>
								<a href='#' className='hover:underline'>
									Privacy Policy
								</a>
							</li>
							<li>
								<a href='#' className='hover:underline'>
									Terms &amp; Conditions
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className='my-6  border-gray-700 lg:my-8' />
			<div className='sm:flex sm:items-center sm:justify-between'>
				<span className='text-sm  sm:text-center text-gray-400'>
					© 2023{' '}
					<Link href='/' className='hover:underline'>
						VisionVerse Soundz™
					</Link>
				</span>
				<div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
					<a
						href='https://www.instagram.com/visionverse_soundz/'
						className='text-gray-500 hover:text-white'>
						<svg
							className='w-5 h-5'
							fill='currentColor'
							viewBox='0 0 24 24'
							aria-hidden='true'>
							<path
								fillRule='evenodd'
								d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
								clipRule='evenodd'
							/>
						</svg>
						<span className='sr-only'>Instagram page</span>
					</a>
					<a
						href='https://www.facebook.com/VisionVerseSoundz'
						className='text-gray-500 hover:text-white'>
						<svg
							className='w-5 h-5'
							fill='currentColor'
							viewBox='0 0 24 24'
							aria-hidden='true'>
							<path
								fillRule='evenodd'
								d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
								clipRule='evenodd'
							/>
						</svg>
						<span className='sr-only'>Facebook page</span>
					</a>
					<a
						href='https://twitter.com/VisionVerse_VVS'
						className='text-gray-500 hover:text-white'>
						<svg
							className='w-5 h-5'
							fill='currentColor'
							viewBox='0 0 24 24'
							aria-hidden='true'>
							<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
						</svg>
						<span className='sr-only'>Twitter page</span>
					</a>
					<a
						href='https://www.tiktok.com/@visionverse_soundz'
						className='text-gray-500 hover:text-white'>
						<svg
							className='w-4 h-5'
							stroke='currentColor'
							fill='currentColor'
							strokeWidth='0'
							viewBox='0 0 24 24'
							aria-hidden='true'>
							<path d='M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z'></path>
						</svg>
						<span className='sr-only'>TikTok page</span>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
