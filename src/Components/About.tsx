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
	&__item {
		font-weight: 600;
		font-size: 42px;
		text-align: center;
		line-height: 54px;
		color: #786f6f;
	}
	.row {
	 padding-top: 30px
	}

&__map-image {
	object-fit: cover;
 }
 &__text {
	font-weight: 400;
	font-size: 16px;
	&_top {
		padding-top: 40px;
		}
	}
}
 @media (max-width: 1400px) {
	.about {
		&__text {
			&_top {
				padding-top: 0px;
				}
			}
	}
	 }

	 @media (max-width: 1200px) {
		.about {
			&__text {
				&_none {
					display: none;
					}
				}
		}
		 }

	 @media (max-width: 991px) {
		.about {
			&__text {
				&_top {
					padding-top: 40px;
					}
				}
				&__map-image {
					margin: 0 auto;
					display: block;
					}
		}
		 }
		 @media (max-width: 625px) {
			.about {
				&__text {
					&_top {
						padding-top: 40px;
						}
					}
				&__map-image {
					width: 480px;
					margin: 0 auto;
					display: block;
					}
			}
			 }
			 @media (max-width: 515px) {
				.about {
					&__text {
						font-size: 14px;
						&_top {
							padding-top: 40px;
							}
						}
					&__map-image {
						width: 360px;
						}
				}
				 }
				 @media (max-width: 380px) {
					.about {
						&__map-image {
							width: 300px;
							}
					}
					 }


`

const About = () => {
	return (
		<>
			<AboutStyles>
				<section className="about">
					<Container fluid="md">
						<h2 className="about__item">О Словенії</h2>
						<Row>
							<Col  ><img src={map} alt="slovenia map" className="about__map-image" /></Col>
							<Col /* xs={2} md={2} lg={6} */>
								<p className="about__text about__text_top">
									Словенія - невелика країна, розташована в Центральній Європі. Вона має площу приблизно 20 273 квадратних кілометрів, що робить її однією з найменших країн в Європі.
								</p>
								<p className="about__text">
									Столицею Словенії є Любляна - красиве і історичне місто, розташоване в центрі країни. Це місто відоме своїм середньовічним старим центром з замком і багатьма мостами через річку Любляниця.
								</p>
								<p className="about__text">
									Словенія має приблизно 2,1 мільйона жителів. Важливими містами, крім Любляни, є Марібор, Целе, Копер, Крань і Ново Место. Кожне з цих міст має свою унікальну історію та культурну спадщину, приваблюючи туристів з різних куточків світу.
								</p>
								<p className="about__text about__text_none">
									Словенія, зі своєю невеликою площею, вражає своєю природною красою, панорамними горами, мальовничими озерами і чарівними селами. Багата культурна спадщина та дружність місцевого населення роблять Словенію привабливим місцем для відвідування та дослідження.
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