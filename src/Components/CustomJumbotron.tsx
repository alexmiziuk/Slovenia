import React from 'react';
import { Card, Container } from 'react-bootstrap';
import ocean from '../Source/img/solnca_nad_morem.jpg';
import styled from 'styled-components';

const Styles = styled.div`
.jumbo {
	background: url(${ocean}) no-repeat fixed bottom;
	background-size: cover;
	color: #efefef;
	height: 400px;
	position: relative;
	z-index: -2;
}
.overlay {
	background-color: #000;
	opacity: 0.5;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;
}
`;

const CustomJumbotron = () => {
	return (
		<Styles>
			<Card className="jumbo">
				<Card.Body >
					<div className="overlay"></div>
					<Container>
						<h1>Web Developer Blog</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, officia sunt architecto quibusdam vero, hic voluptates quos exercitationem dignissimos, dolorum eum consectetur quod. Amet tempore fugiat quo incidunt, impedit ipsam!
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, officia sunt architecto quibusdam vero, hic voluptates quos exercitationem dignissimos, dolorum eum consectetur quod. Amet tempore fugiat quo incidunt, impedit ipsam!
						</p>
					</Container>
				</Card.Body>
			</Card>
		</Styles>
	);
}

export default CustomJumbotron;

