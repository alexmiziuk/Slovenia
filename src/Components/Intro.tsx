import React from 'react';
import styled from 'styled-components';
import { titleMixin } from '../Mixins/titleMixin';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { buttonMixin } from '../Mixins/buttonMixin';

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
		&-text {
			${ titleMixin};
			text-align: left;
			color: white;
			
		}
	}
	&-subtitle {
		margin-top: 20px;
		&-text {
			color: white;
			font-size: 18px;
			font-weight: 400;
			line-height: 24px;
		}
	}
	
	&-btn {
		display: inline-block;
		${buttonMixin}
		margin-top: 38px;
		padding: 10px 20px;
		&:hover {
			background-color: #c48106;
		}
	}
}

@media (max-width: 926px) and (max-height: 428px) {
	.intro {
		padding-top: 92px;
	}
}


@media (max-width: 897px) and (max-height: 415px) {
	.intro {
		padding-top: 133px;
	}
}
@media (max-width: 880px) and (max-height: 391px) {
	.intro {
		padding-top: 65px;
	}
 }


 
@media (max-width: 769px) {
	.intro {
		&-block {
			padding-left: 20px;
		}
		&-title {
			width: 445px;
			&-text {
				line-height: 53px;
			}
		}
		
		&-subtitle {
			width: 394px;
			&-text {
				line-height: 29px;
			}
		}
	}
 }
 @media (max-width: 568px) and (max-height: 321px) {
	.intro {
		padding-top: 16px;
	}
 }
@media (max-width: 469px) {
	.intro {
		padding-top: 160px;
		&-block {
			padding-left: 10px;
		}
		&-title {
			width: 300px;
			
		}
		&-subtitle {
			width: 280px;
		}
	}

@media (max-width: 385px) {
		.intro {
		&-title {
			width: 275px;
			&-text {
				font-size: 42px;
			}
		}
	}
}
@media (max-width: 321px) and (max-height: 568px) {
	.intro {
		padding-top: 55px;
	}
 }
`;

const Intro: React.FunctionComponent<{

	getAllTextsOfSite: (key: string) => string;


}> = ({ getAllTextsOfSite }) => {
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
								<div className="intro-title">
									<h1 className="intro-title-text">
										{getAllTextsOfSite('introTitle')}
									</h1>
								</div>
								<div className="intro-subtitle">
									<p className="intro-subtitle-text">
										{getAllTextsOfSite('introSubTitle')}
									</p>
								</div>
								<button
									onClick={handleScrollToTour}
									className="intro-btn">
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