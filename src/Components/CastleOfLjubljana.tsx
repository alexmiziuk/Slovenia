import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { titleMixin } from '../Mixins/titleMixin';
import { textMixin } from '../Mixins/textMixin';


import LjubljanskijGgradCopy from '../Source/Ljubljana/Ljubljanskij-grad-copy.jpg';
import LjubljanaCastleCopy from '../Source/Ljubljana/Ljubljana-Castle-copy.jpg'
import NightOldCastle from '../Source/Ljubljana/night-old-castl.jpg';

const CastleOfLjubljanaStyles = styled.div`
  .castle {
    padding: 70px 0;
    background-color: white;
	&-title {
      ${titleMixin}
   }
	 
    &-row {
      margin-top: 40px;
    }

    &-review-img {
      height: 520px;
      object-fit: cover;
      width: 100%;
    }

    &-night-img {
      height: 237px;
    }

    &-text {
      ${textMixin};
      &-one {
        padding-top: 72px;
        padding-bottom: 40px;
      }

      &-two {
        padding-top: 50px;
      }
    }
  }
  .margin {
	margin-top: 5.1%;
  }
  .castle-height {
	height: auto;
 }
 
 
  @media (min-width: 576px) and (max-width: 1200px) {
    .castle {
      &-insert {
        padding-top: 20px;
        width: 100%;
        display: flex;
      }

      &-wall-img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }

      &-night-img {
        height: 100% !important;
        object-fit: cover;
      }

      &-text-two {
        display: inline;
        margin: 0;
      }
    }
  }

  @media (max-width: 1399px) {
    .castle {
      &-text-one {
        padding-top: 75px;
      }
    }
  }

  @media (max-width: 1200px) {
    .castle {
      &-night-img {
        width: 173%;
      }

      &-text-one {
        padding-top: 77px;
      }

      &-text-two {
        padding: 50px 0 0 230px;
      }
    }
  }

  @media (max-width: 991px) {
    .castle {
      &-night-img {
        width: 172%;
      }

      &-text-one {
        padding-top: 85px;
      }

      &-text-two {
        padding: 0 0 0 180px;
      }
    }
  }

  @media (max-width: 767px) {
    .castle {
      &-text-one {
        padding-top: 71px;
      }

      &-review-img {
        height: 100% !important;
      }

      &-night-img {
        width: 164%;
      }

      &-text-two {
        margin-left: 33%;
        padding-left: 0px;
        width: 100%;
      }
    }
  }

  @media (max-width: 576px) {
    .castle {
      &-insert {
        display: block;
      }
		&-img {
			padding-bottom: 20px;
		}
		&-night-img {
			width: 100% !important;
		 }
		 &-text-one {
			padding-top: 0px;
		 }
		 &-text-two {
			margin-left: 0;
			padding: 0 12px 0 12px;
		 }
    }
  }
`;

const CastleOfLjubljana: React.FC<{
	getAllTextsOfSite: (key: string) => string;
}> = ({ getAllTextsOfSite }) => {
	const [isTabletOrLarger, setIsTabletOrLarger] = useState(window.matchMedia('(min-width: 992px)').matches);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(min-width: 992px)');
		const handleMediaQueryChange = (e: MediaQueryListEvent) => {
			setIsTabletOrLarger(e.matches);
		};

		mediaQuery.addEventListener('change', handleMediaQueryChange);
		setIsTabletOrLarger(mediaQuery.matches);

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
		};
	}, []);

	const [isOrLarger, setOrLarger] = useState(window.matchMedia('(min-width: 1201px) and (max-width: 1399px)').matches);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(min-width: 1201px) and (max-width: 1399px)');
		const handleMediaQueryChange = (e: MediaQueryListEvent) => {
			setOrLarger(e.matches);
		};

		mediaQuery.addEventListener('change', handleMediaQueryChange);
		setOrLarger(mediaQuery.matches);

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
		};
	}, []);

	const english = 'Ljubljana, the capital of Slovenia, is rich in historical heritage, which can be seen in every street and corner of the city. One of the most impressive historical landmarks is the Ljubljana Castle. This majestic castle, located on a hill, offers incredible views of the city and the Ljubljanica River. The medieval architecture of the castle and its towers attract attention and transport visitors back in time.';
	
	const shouldAddPaddingClass = getAllTextsOfSite('ljubljanaCastleTextOne') === english && isTabletOrLarger;
   const shouldAddCastleHeightClass = getAllTextsOfSite('ljubljanaCastleTextOne') === english && isOrLarger;


return (
		<CastleOfLjubljanaStyles>
			<section className='castle'>
				<Container fluid="md">
					<h2 className='castle-title'>{getAllTextsOfSite('ljubljanaCastleTitle')}</h2>
					<Row xl={3} lg={2} sm={2} xs={1} className='castle-row'>
						<Col>
							<Row>
								<Col className={shouldAddPaddingClass ? 'castle-text castle-text-one margin' : 'castle-text castle-text-one'}>
									{getAllTextsOfSite('ljubljanaCastleTextOne')}
								</Col>
							</Row>
							<Row>
								<Col>
									<Image className='castle-img castle-wall-img' src={LjubljanskijGgradCopy} fluid rounded/>
								</Col>
							</Row>
						</Col>
						<Col >
							<Image className={shouldAddCastleHeightClass ? 'castle-img castle-review-img castle-height' : 'castle-img castle-review-img'} src={LjubljanaCastleCopy} fluid rounded/>
						</Col>
						<Col className='castle-insert'>
							<Row >
								<Col >
									<Image className='castle-img castle-night-img' src={NightOldCastle} rounded/>
								</Col>
							</Row>
							<Row >
								<Col className='castle-text castle-text-two'>
									{getAllTextsOfSite('ljubljanaCastleTextTwo')}
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
		</CastleOfLjubljanaStyles>
	);
};

export default CastleOfLjubljana;