import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

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
				<h1 className={styles.title}>Vision Verse Soundz</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
					impedit, incidunt doloribus distinctio nostrum ea vitae tenetur natus iure
					dignissimos animi aspernatur blanditiis cum atque quas ipsam facere
					necessitatibus illum.
				</p>
			</div>
		</>
	);
}
