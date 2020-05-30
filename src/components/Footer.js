import React from 'react';

import footerCSS from './footer.module.css';

const Footer = () => (
	<footer className={footerCSS.footer}>
		<div className='container'>
			<span className='text-dark'>© Gatsby Boostrap Wordpress Project 2020</span>
		</div>
	</footer>
);

export default Footer;
