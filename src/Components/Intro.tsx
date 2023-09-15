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
	&-title {
		color: white;
		font-size: 42px;
		font-weight: 600;
		line-height: 54px;
	}
	&-subitem {
		margin-top: 20px;
	}
	&-text {
		color: white;
		font-size: 18px;
		font-weight: 400;
		line-height: 24px;
	}
	&-btn {
		display: inline-block;
		margin-top: 38px;
		font-weight: 400;
		font-size: 16px;
		color: white;
		background-color: orange;
		border-radius: 6px;
		padding: 10px 20px;
		border: none;
		&:hover {
			background-color: #c48106;
		  }
	}
	
}

@media (max-width: 769px) {
	.intro {
		&-block {
			padding-left: 20px;
		}
		&-item {
			width: 445px;
		}
		&-title {
			line-height: 53px;
		}
		&-subitem {
			width: 394px;
		}
		&-text {
			line-height: 29px;
		}
	}
 }

 @media (max-width: 469px) {
	.intro {
		&-block {
			padding-left: 10px;
		}
		&-item {
			width: 300px;
		}
		&-title {
			font-size: 35px;
		}
	
		&-subitem {
			width: 280px;
		}
	}

	@media (max-width: 385px) {
		 .intro {
			&-item {
				width: 275px;
			}
			&-title {
				font-size: 32px;
				line-height: 48px;
			}
			
		}
 }
`;

const Intro: React.FunctionComponent<{
	
	getAllTextsOfSite: (key: string) => string;
	
	
}> = ({getAllTextsOfSite}) => {
	const handleScrollToTour = () => {
		const element = document.getElementById('tour');
		if (element) {
			 element.scrollIntoView({ behavior: 'smooth' });
		}
  };
	return (
			<IntroStyles>
				<section className='intro'>
					<Container fluid="md">
						<Row>
							<Col>
								<div className="intro-block">
									<div className="intro-item">
										<h1 className="intro-title">
										{getAllTextsOfSite('introTitle')}
										</h1>
									</div>
									<div className="intro-subitem">
										<p className="intro-text">
										{getAllTextsOfSite('introSubTitle')}
										</p>
									</div>
									<button onClick={handleScrollToTour} className="intro-btn">
									{getAllTextsOfSite('introButton')}
									</button>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</IntroStyles>
	);
};

export default Intro;