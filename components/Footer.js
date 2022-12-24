const Footer = () => {
	const d = new Date();
	const year = d.getFullYear();
	return (
		<footer>
			<small>&copy; {year} Vision Verse Soundz.</small>{' '}
		</footer>
	);
};

export default Footer;
