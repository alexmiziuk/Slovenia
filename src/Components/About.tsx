import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import map from '../Source/img/map-slovenija.jpg'



const AboutStyles = styled.div`
.about {
	padding: 70px 0;
	background-color: white;
	&-title {
		font-weight: 600;
		font-size: 42px;
		text-align: center;
		line-height: 54px;
		color: #786f6f;
	}
	.row {
	 padding-top: 30px;
	}

&-map-image {
	object-fit: cover;
 }
 &-text {
	font-weight: 400;
	font-size: 16px;
	&_top {
		padding-top: 40px;
		}
	}
}
 @media (max-width: 1400px) {
	.about {
		&-text {
			&-top {
				padding-top: 0px;
				}
			}
	}
	 }

	 @media (max-width: 1200px) {
		.about {
			&-text {
				&-none {
					display: none;
					}
				}
		}
		 }

	 @media (max-width: 991px) {
		.about {
			&-text {
				&-top {
					padding-top: 40px;
					}
				}
				&-map-image {
					margin: 0 auto;
					display: block;
					}
		}
		 }
		 @media (max-width: 625px) {
			.about {
				&-text {
					&-top {
						padding-top: 40px;
						}
					}
				&-map-image {
					width: 480px;
					margin: 0 auto;
					display: block;
					}
			}
			 }
			 @media (max-width: 515px) {
				.about {
					&-text {
						font-size: 14px;
						&-top {
							padding-top: 40px;
							}
						}
					&-map-image {
						width: 360px;
						}
				}
				 }
				 @media (max-width: 380px) {
					.about {
						&-map-image {
							width: 300px;
							}
					}
					 }


`

const About: React.FunctionComponent<{
	getAllTextsOfSite: (key: string) => string;
	}> = ({getAllTextsOfSite}) => {
	
	return (
		<>
			<AboutStyles>
				<section className="about">
					<Container fluid="md">
						<h2 className="about-title">
							{getAllTextsOfSite('aboutTitle')}
						</h2>
						<Row>
							<Col>
								<img
								src={map}
								alt="slovenia map"
								className="about-map-image" />
							</Col>
							<Col /* xs={2} md={2} lg={6} */>
								<p className="about-text about-text-top">
								{getAllTextsOfSite('aboutParagraphOne')}
								</p>
								<p className="about-text">
								{getAllTextsOfSite('aboutParagraphTwo')}
								</p>
								<p className="about-text">
								{getAllTextsOfSite('aboutParagraphThree')}
								</p>
								<p className="about-text about-text-none">
								{getAllTextsOfSite('aboutParagraphFour')}
								</p>
							</Col>
						</Row>
					</Container>
				</section>
			</AboutStyles>
		</>
	);
};

export default About;