import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import img from '../Source/img/main-background.jpg';


const IntroStyles = styled.div`
.intro {
	position: relative;
	padding: 240px 0 40px 0;
	height: 100vh;
	background-image: url(${img});
	background-repeat: no-repeat;
   background-position: 50%;
   background-size: cover;
	&__title {
		color: white;
		font-size: 42px;
		font-weight: 600;
		line-height: 54px;
	}
	&__subitem {
		margin-top: 20px;
	}
	&__text {
		color: white;
		font-size: 18px;
		font-weight: 400;
		line-height: 24px;
	}
	&__btn {
		display: inline-block;
		margin-top: 38px;
		text-decoration: none;
		font-weight: 400;
		font-size: 16px;
		color: white;
		background-color: #00ae5a;
		background-color: orange;
		border-radius: 6px;
		&:hover {
			background-color: #c48106;
		  }
	}
	&__name {
		padding: 10px 20px;
	
	}
}

@media (max-width: 769px) {
	.intro {
		&__block {
			padding-left: 20px;
		}
		&__item {
			width: 445px;
		}
		&__title {
			line-height: 53px;
		}
		&__subitem {
			width: 394px;
		}
		&__text {
			line-height: 29px;
		}
	}
 }

 @media (max-width: 469px) {
	.intro {
		&__block {
			padding-left: 10px;
		}
		&__item {
			width: 300px;
		}
		&__title {
			font-size: 35px;
		}
	
		&__subitem {
			width: 280px;
		}
	}

	@media (max-width: 385px) {
		 .intro {
			&__item {
				width: 275px;
			}
			&__title {
				font-size: 32px;
				line-height: 48px;
			}
			
		}
 }
`;

const Intro = () => {
	return (
		<>
			<IntroStyles>
				<section className='intro'>
					<Container fluid="md">
						<Row>
							<Col>
								<div className="intro__block">
									<div className="intro__item">
										<h1 className="intro__title">
											Ласкаво просимо до чарівної Словенії -
										</h1>
									</div>
									<div className="intro__subitem">
										<p className="intro__text">
											країни, де поєднуються краса природи, історія та гостинність!
										</p>
									</div>
									<a href="/#" className="intro__btn">
										<div className="intro__name">
											ВІРТУАЛЬНИЙ ТУР
										</div>
									</a>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</IntroStyles>

		</>
	);
};

export default Intro;