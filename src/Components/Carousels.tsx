import React, { CSSProperties, Component, MouseEventHandler } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

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
		font-size: 42px;
		font-weight: 600;
		line-height: 54px;
		text-align: center;
		padding-bottom: 40px;
		color: #786f6f;
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

class Carousels extends Component<CarouselsProps>{
	settings: any;
	constructor(props: CarouselsProps) {
		super(props);
		this.settings = {
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
	}

	redirectToAnotherComponent = (link: string) => {
		// относительный путь к компоненту
		window.location.href = link;
	};
	render() {
		const { getAllTextsOfSite } = this.props; // Получаем getAllTextsOfSite из пропсов

		return (
			<CarouselStyles >
				<section className="carousel">
					<Container >
						<Row>
							<Col>
								<h2
									className='carousel-title'
									id='tour'>
									{getAllTextsOfSite('carouselTitle')}
								</h2>
								<Slider {...this.settings} >
									<div className='carousel-slide'>
										<img src={BledLake}
											alt=""
											className="carousel-img" />
										<button
											onClick={() => this.redirectToAnotherComponent('#')}
											className="carousel-btn">
											{getAllTextsOfSite('carouselOneBtn')}
										</button>
									</div>
									<div className='carousel-slide'>
										<img src={Ljublana} alt=""
											className="carousel-img" />
										<button
											onClick={() => this.redirectToAnotherComponent('ljubljana')}
											className="carousel-btn">
											{getAllTextsOfSite('carouselTwoBtn')}
										</button>
									</div>
									<div className='carousel-slide'>
										<img
											src={Mountins}
											alt=""
											className="carousel-img" />
										<button
											onClick={() => this.redirectToAnotherComponent('#')}
											className="carousel-btn">
											{getAllTextsOfSite('carouselThreeBtn')}
										</button>
									</div>
									<div className='carousel-slide'>
										<img src={KochevjeChurch}
											alt=""
											className="carousel-img" />
										<button
											onClick={() => this.redirectToAnotherComponent('#')}
											className="carousel-btn">
											{getAllTextsOfSite('carouselFourBtn')}
										</button>
									</div>
									<div className='carousel-slide'>
										<img src={LakeNearItaly}
											alt=""
											className="carousel-img" />
										<button
											onClick={() => this.redirectToAnotherComponent('#')}
											className="carousel-btn">
											{getAllTextsOfSite('carouselFiveBtn')}
										</button>
									</div>
									<div className='carousel-slide'>
										<img
											src={Maribor}
											alt="" className="carousel-img" />
										<button
											onClick={() => this.redirectToAnotherComponent('#')}
											className="carousel-btn">
											{getAllTextsOfSite('carouselSixBtn')}
										</button>
									</div>
									<div className='carousel-slide'>
										<img
											src={Ptuj}
											alt=""
											className="carousel-img" />
										<button
											onClick={() => this.redirectToAnotherComponent('#')}
											className="carousel-btn">
											{getAllTextsOfSite('carouselSevenBtn')}
										</button>
									</div>
									<div className='carousel-slide'>
										<img
											src={Bridge}
											alt=""
											className="carousel-img" />
										<button
											onClick={() => this.redirectToAnotherComponent('#')}
											className="carousel-btn">
											{getAllTextsOfSite('carouselEightBtn')}
										</button>
									</div>
									<div className='carousel-slide'>
										<img
											src={Piran}
											alt=""
											className="carousel-img" />
										<button
											onClick={() => this.redirectToAnotherComponent('piran')}
											className="carousel-btn">
											{getAllTextsOfSite('carouselNineBtn')}
										</button>
									</div>
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
