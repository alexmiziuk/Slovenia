import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import styled from 'styled-components';

import river from '../Source/Ljubljana/River-Ljubljanica-kanal.jpg';
import riverSun from '../Source/Ljubljana/The-river-Ljubljanica.jpg';


const LjubljanicaStyles = styled.div`

.river {
	padding: 70px 0;
	background-color: white;
	&-title {
		font-weight: 600;
		font-size: 42px;
		text-align: center;
		line-height: 54px;
		color: #786f6f;
	}
	&-row {
		margin-top: 40px;
	}
	&-text {
		font-weight: 400;
		font-size: 16px;
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
		padding-top: 20px;
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
					<h2 className="river-title">{getAllTextsOfSite('LjubljanicaTitle')}</h2>
					<Row className='river-row'>
						<Col className='river-col-first'>
							<Image className='river-sun' src={isDesktopOrLower ? `${river}` : `${riverSun}`} fluid rounded/>
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