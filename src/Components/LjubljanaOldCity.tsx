import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


import Fountain from '../Source/Ljubljana/Fontain-in-the-New-Marker-Square.jpg';
import CentralMarketing from '../Source/Ljubljana/Central-Market.jpg';
import Castle from '../Source/Ljubljana/franciscans-hastl.jpg';
import RibjaBridge from '../Source/Ljubljana/Ribja-brv.jpg';
import TripleBridge from '../Source/Ljubljana/Triple-bridge.jpg';
import CooperativBuisiness from '../Source/Ljubljana/The-cooperativ-buisiness-bank.jpg';
import { textMixin } from '../Mixins/textMixin';
import { titleMixin } from '../Mixins/titleMixin';

import styled from 'styled-components';



const Styles = styled.div`
.old-city{
	position: relative;
	padding: 70px 0;
   background-color: white;
	&-line {
		position: absolute;
		height: 2px;
		width: 373px;
		background-color: #0171bd;
		top: 0px;
	}
	&-title {
		${titleMixin}
		text-align: left;
	}
	&-text {
		${textMixin};
		padding: 0 12px 0 12px;
		padding-bottom: 40px;
	}
	&-img {
		width: 100%;
		height: 450px;
		object-fit: cover;
		margin-bottom: 20px;
	}
}

@media (max-width: 768px) {
	.old-city{
		&-line {
			width: 309px;
			left: 50%;
			  transform: translateX(-50%);
			}
		&-title {
			text-align: center;
		}
		&-text { 
			margin-top: 40px;
		}
	}
 }

@media (max-width: 576px) {
	.old-city{
		&-line {
			width: 65%;
		}
	}
 }
`

const images = [
	{ src: Fountain, alt: 'Fountain' },
	{ src: CentralMarketing, alt: 'Central Marketing' },
	{ src: Castle, alt: 'Castle' },
	{ src: RibjaBridge, alt: 'Ribja Bridge' },
	{ src: TripleBridge, alt: 'Triple Bridge' },
	{ src: CooperativBuisiness, alt: 'Coperative Business' },
];

const LjubljanaOldCity: React.FC<{
	getAllTextsOfSite: (key: string) => string;
}> = ({ getAllTextsOfSite }) => {
	return (
		<Styles>
			<section className='old-city'>
				<Container fluid="md">
					<span className='old-city-line'>
					</span>
				</Container>
				<Container fluid="md">
					<Row>
						<Col md={6} lg={6} xl={5}>
							<h2 className='old-city-title'>
								{getAllTextsOfSite('oldCityTitleOne')} <br></br>{getAllTextsOfSite('oldCityTitleTwo')}
							</h2>
						</Col>
						<Col className='old-city-text' md={6} lg={6} xl={6}>
							{getAllTextsOfSite('oldCityTextOne')}
							<br></br><br></br>
							{getAllTextsOfSite('oldCityTextTwo')}
						</Col>
					</Row>
					<OldCityImages/>
				</Container>
			</section>
		</Styles>
	);
	};

	const OldCityImages = () => {
		return (
		  <Row>
				{images.map((image, index) => (
				  <Col key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
					 <Image className='old-city-img' src={image.src} alt={image.alt} rounded />
				  </Col>
				))}
			</Row>
		);
	 };

export default LjubljanaOldCity;