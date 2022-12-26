const Footer = () => {
	const d = new Date();
	const year = d.getFullYear();
	return (
		<footer>
			<h3>subscribe for updates</h3>
			<form
				action='https://getform.io/f/aae45edf-47a7-4f08-bd02-d86520a69b92'
				method='POST'>
				<div className='container'>
					<input type='text' placeholder='phone' name='phone' id='phone' required />
					<input type='text' placeholder='email' name='email' id='email' />
					<div>
						<button type='submit'>Subscribe</button>
					</div>
				</div>
			</form>
			<small>&copy; {year} Vision Verse Soundz</small>{' '}
		</footer>
	);
};

export default Footer;
