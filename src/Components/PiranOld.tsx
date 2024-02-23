import React from 'react';
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import bigBildingRight from '../Source/Piran/yellow-building.jpg';
import bigBildingLeft from '../Source/Piran/View-from-the-sea.jpg';
import smallStreet from '../Source/Piran/In-the-old-town.jpg';
import smallTartiny from '../Source/Piran/monument-tartiny.jpg';
import smallUpStair from '../Source/Piran/upstair.jpg';
import smallTower from '../Source/Piran/oclock-bilding.jpg';


import { titleMixin } from '../Mixins/titleMixin';


const Styled = styled.div`
.old-town{
	position: relative;
	padding: 70px 0;
	background-color: white;
	&-line {
		position: absolute;
		height: 2px;
		width: 373px;
		background-color: #0171bd;
		top: 0px;
		left: 50%;
		transform: translate(-50%);
	}
	&-title {
		${titleMixin}
		text-align: align-center;
	}
	&-small-picture {
		width: 100%;
		height: 430px;
		object-fit: cover;
	}
	&-big-picture {
		width: 100%;
		height: 430px;
		object-fit: cover;
	}
}
.first {
	object-position: top;
}
@media (max-width: 767px) {
	.old-town-big-col-one {
		margin-top: 25px;
	}
	.old-town-big-col-two{
		margin-bottom: 25px;
	}
}
@media (max-width: 576px) {
	.old-town {
		&-small-col {
			margin-top: 25px !important;
		}
		&-line {
			width: 65%;
		}
	}
	.first {
		object-position: 0px -90px;
	}
	
}
@media (max-width: 478px) {
	.first {
		object-position: 0px -50px;
	}
}
`
const PiranOld: React.FC<{
	getAllTextsOfSite: (key: string) => string;
}> = ({ getAllTextsOfSite }) => {
	return (
		<Styled>
			<section>
				<div className="old-town">
					<Container fluid="md">
						<span className='old-town-line'>
						</span>
						<h2 className="old-town-title">
							{getAllTextsOfSite('oldPiranTitle')}
						</h2>
						<Row style={{ marginTop: '40px' }}>
							<Col className="old-town-content" sm={12} md={12} lg={6} xl={6}>
								<p><strong>{getAllTextsOfSite('oldPiranStrongContentFirst')}</strong>
									{getAllTextsOfSite('oldPiranContentFirst')}
								</p>
							</Col>
							<Col className="old-town-content" sm={12} md={12} lg={6} xl={6}>
								<p>
									<span>{getAllTextsOfSite('oldPiranContentspan')}
									</span>
									<strong>{getAllTextsOfSite('oldPiranStrongContentSecond')}
									</strong>
									{getAllTextsOfSite('oldPiranContentSecond')}
								</p>
							</Col>
						</Row>
						<Row className='old-town-img-container' style={{ marginTop: '5px' }}>
							<Col>
								<Row>
									<Col sm={6} md={6} lg={6} xl={6}>
										<Image className='old-town-small-picture first' src={smallTower} rounded />
									</Col>
									<Col className="old-town-small-col" sm={6} md={6} lg={6} xl={6}>
										<Image className='old-town-small-picture first' src={smallTartiny} rounded />
									</Col >
								</Row>
							</Col>
							<Col sm={12} md={6} lg={6} xl={6} className='old-town-big-col-one'>
								<Image className='old-town-big-picture' src={bigBildingLeft} rounded />
							</Col>
						</Row>
						<Row className='old-town-img-container' style={{ marginTop: '25px' }}>
							<Col sm={12} md={6} lg={6} xl={6} className='old-town-big-col-two'>
								<Image className='old-town-big-picture' src={bigBildingRight} rounded />
							</Col>
							<Col>
								<Row>
									<Col sm={6} md={6} lg={6} xl={6}>
										<Image className='old-town-small-picture' src={smallStreet} rounded />
									</Col>
									<Col className="old-town-small-col" sm={6} md={6} lg={6} xl={6}>
										<Image className='old-town-small-picture' src={smallUpStair} rounded />
									</Col>
								</Row>
							</Col>
						</Row>
					</Container>
				</div>
			</section>
		</Styled>
	);
};

export default PiranOld;