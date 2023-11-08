import React from 'react';
import { Card, Container } from 'react-bootstrap';
import ljubljana from '../Source/CarouselImg/Ljublana.png';
import styled from 'styled-components';
import { titleMixin } from '../Mixins/titleMixin';
import { textMixin } from '../Mixins/textMixin';


const Styles = styled.div`
.invitation {
	padding: 70px 0 40px 0;
	background: url(${ljubljana}) no-repeat fixed bottom;
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
`;

const CustomJumbotron: React.FC<{
	getAllTextsOfSite: (key: string) => string;
}> = ({ getAllTextsOfSite}) => {
	return (
		<Styles>
			<Card className="invitation">
				<Card.Body >
					<div className="invitation-overlay"></div>
					<Container>
						<h1 className='invitation-title'>{ getAllTextsOfSite('ljubljanaIntroTitle') }</h1>
						<p className='invitation-text'>
							{getAllTextsOfSite('ljubljanaIntroTextOne')}
							<br></br>
							<br></br>
							{getAllTextsOfSite('ljubljanaIntroTextTwo')}
						</p>
					</Container>
				</Card.Body>
			</Card>
		</Styles>
	);
}

export default CustomJumbotron;

