import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import sloveniaLogoBlack from '../Source/Icons/Logo-black-slovenia.svg';

const Footer = () => {
	return (
		<Container style={{ background: '#212529', color: '#fff' }}>
			<Row>
				<Col> <a href="#">
                <img src={sloveniaLogoBlack} alt="WebDev Blog Logo" width="200" height="60" />
              </a></Col>
				<Col>2 of 3</Col>
				<Col>3 of 3</Col>
			</Row>
		</Container>
	);
};

export default Footer;