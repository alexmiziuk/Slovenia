import React from 'react';
/* import Slider from './Components/Slider'; */
import Intro from './Components/Intro';
import About from './Components/About';
import Carousels from './Components/Carousels';
import Cards from './Components/Cards';
import Bayan from './Components/Bayan';


import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CustomJumbotron from './Components/CustomJumbotron';
import ocean from '../src/Source/img/solnca_nad_morem.jpg'


const Home: React.FunctionComponent = () => {
	return (
		<>
			{/* <Slider /> */}
			<Intro />
			<About />
			<Carousels />
			<Cards />
			<Bayan/>
		{/* 	<Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
				<Row>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant='top' src={ocean} />
							<Card.Body>
								<Card.Title>WebDew Blog</Card.Title>
								<Card.Text>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</Card.Text>
								<Button variant='primary'>Learn More</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant='top' src={ocean} />
							<Card.Body>
								<Card.Title>WebDew Blog</Card.Title>
								<Card.Text>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</Card.Text>
								<Button variant='primary'>Learn More</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant='top' src={ocean} />
							<Card.Body>
								<Card.Title>WebDew Blog</Card.Title>
								<Card.Text>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</Card.Text>
								<Button variant='primary'>Learn More</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
			<CustomJumbotron></CustomJumbotron>
			<Container style ={{ margin: '30px auto'}}>
				<Row>
					<Col md={7}>
						<img src={ocean} height={400} />
					</Col>
					<Col md={5}>
						<h2>Web Developer Blog</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, officia sunt architecto quibusdam vero, hic voluptates quos exercitationem dignissimos, dolorum eum consectetur quod. Amet tempore fugiat quo incidunt, impedit ipsam!
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, officia sunt architecto quibusdam vero, hic voluptates quos exercitationem dignissimos, dolorum eum consectetur quod. Amet tempore fugiat quo incidunt, impedit ipsam!
						</p>
					</Col>
				</Row>
			</Container> */}
		</>
	);
};

export default Home;