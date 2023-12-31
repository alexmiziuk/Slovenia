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
	
	&__item {
		font-size: 42px;
		font-weight: 600;
		line-height: 54px;
		text-align: center;
		padding-bottom: 40px;
		color: #786f6f;
	}
	&__block {
		position: relative;
	}
	&__img {
		width: 98%;
		height: 600px;
		object-fit: cover;
		margin: 0 auto;
		&-name {
			position: absolute;
			
			font-weight: 400;
			font-size: 14px;
			bottom: 1px;
  			left: 80%;
  		   color: white;
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

export default class MultipleItems extends Component {
	render() {
		const settings = {
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
						initialSlide: 2
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		return (
			<>
				<CarouselStyles>
					<section className="carousel">
						<Container >
							<Row>
								<Col>
									<h2 className='carousel__item'> Словенія: Віртуальний тур </h2>
									<Slider {...settings} >
										<div className='carousel__block'>
											<img src={BledLake} alt="" className="carousel__img" />
											<p className="carousel__img-name">Блед</p>
										</div>
										<div className='carousel__block'>
											<img src={Ljublana} alt="" className="carousel__img" />
											<p className="carousel__img-name">Любляна</p>
										</div>
										<div className='carousel__block'>
											<img src={Mountins} alt="" className="carousel__img" />
											<p className="carousel__img-name">Debela peč</p>
										</div>
										<div className='carousel__block'>
											<img src={KochevjeChurch} alt="" className="carousel__img" />
											<p className="carousel__img-name">Кочев&apos;є</p>
										</div>
										<div className='carousel__block'>
											<img src={LakeNearItaly} alt="" className="carousel__img" />
											<p className="carousel__img-name">Rabeljsko Jezero</p>
										</div>
										<div className='carousel__block'>
											<img src={Maribor} alt="" className="carousel__img" />
											<p className="carousel__img-name">Марибор</p>
										</div>
										<div className='carousel__block'>
											<img src={Ptuj} alt="" className="carousel__img" />
											<p className="carousel__img-name">Птуй</p>
										</div>
										<div className='carousel__block'>
											<img src={Bridge} alt="" className="carousel__img" />
											<p className="carousel__img-name">Міст <br></br>Солкан</p>
										</div>
										<div className='carousel__block'>
											<img src={Piran} alt="" className="carousel__img" />
											<p className="carousel__img-name">Піран</p>
										</div>
									</Slider>
								</Col>
							</Row>
						</Container>
					</section>
				</CarouselStyles>
			</>
		);
	}
}