import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
	return (
		<Container fluid style={{ background: '#212529', color: '#fff' }}>
			<Container style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
				<p>Web Developer Blog</p>
			</Container>
		</Container>
	);
};

export default Footer;