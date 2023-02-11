import FooterComponent from './FooterComponent';
import Header from './Header';

const Layout = ({ children }) => {
	return (
		<div className='content'>
			<Header />
			{children}
			<FooterComponent />
		</div>
	);
};

export default Layout;
