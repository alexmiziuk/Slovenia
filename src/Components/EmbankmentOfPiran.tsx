import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { titleMixin } from '../Mixins/titleMixin';
import { textMixin } from '../Mixins/textMixin';

import VerticalSea from '../Source/Piran/Vertical-view-from-the-sea.jpg';
import aerialView from '../Source/Piran/aerial-view.jpg'


const Styles = styled.div`
.embankment {
	position: relative;
	padding: 70px 0;
	background-color: white;
	&-title {
		${titleMixin};
	}
	&-row {
		margin-top: 40px;
	}
	&-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	&-text {
		${textMixin};
		margin-bottom: 31px;
		&-mb20 {
			margin-bottom: 20px;
		}
	}
	&-container-text-duplicate {
		display: none;
		margin-top: 20px;
		p {
			margin-bottom: 0px;
		}
	}
}

@media (max-width: 1200px) {
	.embankment {
		&-row {
			display: grid !important;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto auto;
			grid-auto-rows: auto;
			grid-auto-columns: 1fr;
			row-gap: 20px;
		}
		&-container-text {
			grid-row: 1/2;
			grid-column: 1/3;
			&-duplicate {
				display: grid;
				grid-column: 1/3
			}
		}
		&-text {
			&-third {
				display: none;
			}
		}
	}
}

@media (max-width: 768px) {
	.embankment {
		&-row {
			grid-template-rows: auto auto auto; 
		}
		&-col {
			&-upper {
				grid-column: 1/3;
			}
			&-lower {
				grid-row: 4/5;
				grid-column: 1/3;
			}
		}
		&-container-text-duplicate {
			p {
				margin-bottom: 20px;
			}
		}
	}
}
`

const EmbankmentOfPiran: React.FC<{
	getAllTextsOfSite: (key: string) => string;
}> = ({ getAllTextsOfSite}) => {
	return (
		<Styles>
			<section>
				<div className="embankment">
					<Container fluid="md">
						<h2 className="embankment-title">
							{getAllTextsOfSite('embankmentTitle')}
						</h2>
						<Row className='embankment-row'>
							<Col className='embankment-col-upper' xl={4}>
								<Image className='embankment-img embankment-img-first' src={VerticalSea} rounded />
							</Col>
							<Col className='embankment-col-lower' xl={4}>
								<Image className='embankment-img' src={aerialView} rounded />
							</Col>
							<Col xl={4} className='embankment-container-text'>
								<p className='embankment-text embankment-text-first'>
								{getAllTextsOfSite('embankmentTextFirst')}
								</p>
								<p className='embankment-text embankment-text-second'>
									<b>{getAllTextsOfSite('embankmentTextSecondBold')}</b> {getAllTextsOfSite('embankmentTextSecond')}
								</p>
								<p className='embankment-text embankment-text-mb20 embankment-text-second '>
									<b>{getAllTextsOfSite('embankmentTextThirdBold')}</b>{getAllTextsOfSite('embankmentTextThird')}
								</p>
								<p className='embankment-text embankment-text-third'>
								{getAllTextsOfSite('embankmentTextFourth')}
								</p>
							</Col>
							<Col className='embankment-container-text-duplicate'>
								<p className='embankment-text'>
								{getAllTextsOfSite('embankmentTextUnderstudy')}
								</p>
							</Col>
						</Row>
					</Container>
				</div>
			</section >

		</Styles >

	);
};

export default EmbankmentOfPiran;