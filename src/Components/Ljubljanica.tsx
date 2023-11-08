import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { titleMixin } from '../Mixins/titleMixin';
import { textMixin } from '../Mixins/textMixin';


import styled from 'styled-components';

import river from '../Source/Ljubljana/River-Ljubljanica-kanal.jpg';
import riverSun from '../Source/Ljubljana/The-river-Ljubljanica.jpg';


const LjubljanicaStyles = styled.div`

.river {
	position: relative;
	padding: 70px 0;
	background-color: white;
	&-title {
		${titleMixin}
		text-align: center;
	}
	&-line {
		position: absolute;
		height: 2px;
		width: 309px;
		left: 50%;
  		transform: translateX(-50%);
		background-color: #0171bd;
		top: 0px;
	}
	
	&-row {
		margin-top: 40px;
	}
	&-text {
		${textMixin};
		padding: 0 12px 0 12px;
		&-top {
			padding-top: 40px;
		}
		&-bottom {
			padding-bottom: 40px;
		}
	}
	&-sun-img {
		border-radius: 2.8%;
	}
}

@media (max-width: 991px) {
	.river {
		
		&-row {
			display: grid;
  			grid-template-columns: 1fr;
  			grid-template-rows: auto auto;
			row-gap: 20px;
		}
		&-col-second {
			grid-row: 1/2;
		 }
		 &-text {
			&-top {
				padding-top: 20px;
			}
			&-bottom {
				padding-bottom: 20px;
			}
		}
	}
}

@media (max-width: 576px) {
	.river {
		&-line {
		width: 65%;
		}
	}
}
`

const Ljubljanica: React.FC<{
	getAllTextsOfSite: (key: string) => string;
}> = ({ getAllTextsOfSite }) => {
	const [isDesktopOrLower, setIsDesktopOrLower] = useState(window.matchMedia('(min-width: 992px)').matches);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(min-width: 992px)');
		const handleMediaQueryChange = (e: MediaQueryListEvent) => {
			setIsDesktopOrLower(e.matches);
		};

		mediaQuery.addEventListener('change', handleMediaQueryChange);
		setIsDesktopOrLower(mediaQuery.matches);

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
		};
	}, []);

	return (
		<LjubljanicaStyles>
			<section className='river'>
				<Container fluid="md">
					<span className='river-line'>
					</span>
				</Container>
				<Container fluid="md">
					<h2 className="river-title">{getAllTextsOfSite('LjubljanicaTitle')}</h2>
					<Row className='river-row'>
						<Col className='river-col-first'>
							<Image className='river-sun' src={isDesktopOrLower ? `${river}` : `${riverSun}`} fluid rounded />
							<Row className="river-text river-text-top">
								{getAllTextsOfSite('ljubljanicaTextTwoFirst')}
								<br></br><br></br>
								{getAllTextsOfSite('ljubljanicaTextTwoSecond')}
							</Row>
						</Col>
						<Col className='river-col-second'>
							<Row className="river-text river-text-bottom">
								{getAllTextsOfSite('ljubljanicaTextOneFirst')}
								<br></br><br></br>
								{getAllTextsOfSite('ljubljanicaTextOneSecond')}
							</Row>
							<Row>
								<Image className='river-sun-img' src={isDesktopOrLower ? `${riverSun}` : `${river}`} fluid />
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
		</LjubljanicaStyles>
	);
};

export default Ljubljanica;