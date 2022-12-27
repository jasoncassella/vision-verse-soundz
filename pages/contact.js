import Head from 'next/head';
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
	return (
		<section className='contact'>
			<Head>
				<title>VVS | Contact</title>
			</Head>
				<h1 className='text-5xl font-bold text-center my-10'>Contact</h1>
			<p className='text'>
				Work with us! VVS is always looking to collaborate with new producers,
				beat-makers, audio engineers, graphic designers, photographers,
				videographers, and more!
			</p>
			<p className='text'>
				If you&apos;d like to work with VVS or one of our artists on a project,
				please reach out!
			</p>
			<div className='socials'>
				<Link href='https://www.instagram.com/visionverse_soundz/' target='_blank'>
					<FaInstagram size='2.5em' />
				</Link>
				<Link href='https://www.facebook.com/VisionVerseSoundz' target='_blank'>
					<FaFacebook size='2.5em' />
				</Link>
				<Link href='https://twitter.com/VisionVerse_VVS' target='_blank'>
					<FaTwitter size='2.5em' />
				</Link>
				<Link href='https://www.tiktok.com/@visionverse_soundz' target='_blank'>
					<FaTiktok size='2.5em' />
				</Link>
			</div>
			<Link href='mailto:colleen@visionversesoundz.com'>
				<h1 id="email">colleen@visionversesoundz.com</h1>
			</Link>
			<Link href='tel:315-313-4370'>
				<h1 id="phone">315-313-4370</h1>
			</Link>
		</section>
	);
};

export default Contact;
