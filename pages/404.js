import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000);
	});

	return (
		<div className='not-found'>
			<h1>oops</h1>
			<h3>that page cannot be found</h3>
			<p>
				go back <Link href='/'>home</Link>
			</p>
		</div>
	);
};

export default NotFound;
