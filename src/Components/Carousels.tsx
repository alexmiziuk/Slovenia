import React, { CSSProperties, Component, MouseEventHandler } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { titleMixin } from '../Mixins/titleMixin';

import BledLake from '../Source/CarouselImg/Bled-lake.jpg';
import Ljublana from '../Source/CarouselImg/Ljublana.png';
import Mountins from '../Source/CarouselImg/Mountins.jpg';
import KochevjeChurch from '../Source/CarouselImg/Kochevje-church.jpg';
import LakeNearItaly from '../Source/CarouselImg/Lake-near-Italy.jpg';
import Maribor from '../Source/CarouselImg/Maribor.jpg';
import Ptuj from '../Source/CarouselImg/Ptuj.jpg'
import Bridge from '../Source/CarouselImg/Bridge.jpg';
import Piran from '../Source/CarouselImg/Piran.jpg';

interface ArrowProps {
	className?: string;
	style?: CSSProperties;
	onClick?: MouseEventHandler;
}

function SampleNextArrow({ className, style, onClick }: ArrowProps) {

	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				background: 'rgba(0, 0, 0, 0.4)',
				width: '40px',
				height: '40px',
				/* borderRadius: '100%', */
			}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				background: 'rgba(0, 0, 0, 0.4)',
				width: '40px',
				height: '40px',
			}}
			onClick={onClick}
		/>
	);
}

const CarouselStyles = styled.div`
.carousel {
	padding: 70px 0;
   background-color: white;
	&-title {
		${titleMixin};
		padding-bottom: 40px;
	}
	&-slide {
		position: relative;
		outline: none;
	}
	&-img {
		width: 98%;
		height: 600px;
		object-fit: cover;
		margin: 0 auto;
		}
	&-btn {
		position: absolute;
		padding: 5px 0px;
		font-weight: 400;
		font-size: 16px;
		bottom: 20px;
  		left: 50%;
		transform: translate(-50%);
		background-color: orange;
		border: none;
		border-radius: 5px;
  		color: white;
		width: 180px;
		transition: background-color 0.3s ease;
		&:hover {
			background-color: #c48106;
		  }
		}
.slick-next {
	right: 15px;
	}
		.slick-next:before {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			}
			.slick-prev {
				left: 15px;
				z-index: 10;
}
			}
			.slick-prev:before {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			}
		
}

`;
interface CarouselsProps {
	getAllTextsOfSite: (key: string) => string;
 }
 
 class Carousels extends Component<CarouselsProps> {
	settings = {
	  dots: true,
	  infinite: true,
	  speed: 500,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  nextArrow: <SampleNextArrow />,
	  prevArrow: <SamplePrevArrow />,
	  responsive: [
		 {
			breakpoint: 992,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  initialSlide: 2,
			},
		 },
		 {
			breakpoint: 576,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			},
		 },
	  ],
	};
 
	redirectToAnotherComponent = (link: string) => {
	  // Относительный путь к компоненту
	  window.location.href = link;
	};
 
	renderCarouselSlide = (slideData: { imageSrc: string; link: string; buttonText: string }, index: number) => {
	  const { getAllTextsOfSite } = this.props;
 
	  return (
		 <div key={index} className="carousel-slide">
			<img src={slideData.imageSrc} alt="" className="carousel-img" />
			<button
			  onClick={() => this.redirectToAnotherComponent(slideData.link)}
			  className="carousel-btn">
			  {getAllTextsOfSite(slideData.buttonText)}
			</button>
		 </div>
	  );
	};
 
	render() {
	  const { getAllTextsOfSite } = this.props; // Получаем getAllTextsOfSite из пропсов
	  const carouselData = [
		 {
			imageSrc: BledLake,
			link: '#',
			buttonText: 'carouselOneBtn',
		 },
		 {
			imageSrc: Ljublana,
			link: 'ljubljana',
			buttonText: 'carouselTwoBtn',
		 },
		 {
			imageSrc: Mountins,
			link: '#',
			buttonText: 'carouselThreeBtn',
		 },
		 {
			imageSrc: KochevjeChurch,
			link: '#',
			buttonText: 'carouselFourBtn',
		 },
		 {
			imageSrc: LakeNearItaly,
			link: '#',
			buttonText: 'carouselFiveBtn',
		 },
		 {
			imageSrc: Maribor,
			link: '#',
			buttonText: 'carouselSixBtn',
		 },
		 {
			imageSrc: Ptuj,
			link: '#',
			buttonText: 'carouselSevenBtn',
		 },
		 {
			imageSrc: Bridge,
			link: '#',
			buttonText: 'carouselEightBtn',
		 },
		 {
			imageSrc: Piran,
			link: 'piran',
			buttonText: 'carouselNineBtn',
		 },
	  ];
 
	  return (
		 <CarouselStyles>
			<section className="carousel">
			  <Container>
				 <Row>
					<Col>
					  <h2 className='carousel-title' id='tour'>
						 {getAllTextsOfSite('carouselTitle')}
					  </h2>
					  <Slider {...this.settings}>
						 {carouselData.map((slideData, index) =>
							this.renderCarouselSlide(slideData, index)
						 )}
					  </Slider>
					</Col>
				 </Row>
			  </Container>
			</section>
		 </CarouselStyles>
	  );
	}
 }
 
 export default Carousels;