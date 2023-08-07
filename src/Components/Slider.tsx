import React from 'react';
import { Carousel } from 'react-bootstrap';
import  sunShine  from '../Source/img/solnca_nad_morem.jpg';

const Slider: React.FC = () => {
	return (
		<Carousel>
			<Carousel.Item style={{'height': '700px'}}>
				<img
					className='d-block w 100'
					src={sunShine}
					alt="solnca_nad_morem" />
				<Carousel.Caption>
					<h3>Web Developer Blog</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={{'height': '700px'}}>
				<img
					className='d-block w 100'
					src={sunShine}
					alt="solnca_nad_morem" />
				<Carousel.Caption>
					<h3>Web Developer Blog</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={{'height': '700px'}}>
				<img
					className='d-block w 100'
					src={sunShine}
					alt="solnca_nad_morem" />
				<Carousel.Caption>
					<h3>Web Developer Blog</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slider;