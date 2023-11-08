import React from 'react';
import { Card, Container } from 'react-bootstrap';
import styled from 'styled-components';

import { titleMixin } from '../Mixins/titleMixin';
import { textMixin } from '../Mixins/textMixin';

import IntroImg from '../Source/CarouselImg/Piran.jpg'

const Styles = styled.div`
.intro-piran {
	padding: 70px 0 40px 0;
	background: url(${IntroImg}) no-repeat fixed bottom;
	background-size: cover;
	color: #efefef;
	position: relative;
	z-index: -2;
	&-overlay {
		background-color: #000;
		opacity: 0.5;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
	}
	&-title {
		${titleMixin};
		color: white;
		text-align: left;

	}
	&-text {
		margin-top: 30px;
		color: white;
		${textMixin };
		line-height: 24px;
		max-width: 700px;
	}
}
`

const PiranJumbotron: React.FC<{
	getAllTextsOfSite: (key: string) => string;
}> = ({ getAllTextsOfSite}) => {
	return (
		<Styles>
			<section>
				<Card className="intro-piran">
					<Card.Body >
						<div className="intro-piran-overlay"></div>
						<Container fluid="md">
							<h1 className='intro-piran-title'>{getAllTextsOfSite('piranIntroTitle')}</h1>
							<p className='intro-piran-text'>
								{getAllTextsOfSite('piranIntroTextOne')}
								<br></br>
								<br></br>
								{getAllTextsOfSite('piranIntroTextTwo')}
							</p>
						</Container>
					</Card.Body>
				</Card>
			</section>



		</Styles>



	);
};

export default PiranJumbotron;