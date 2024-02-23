import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { titleMixin } from '../Mixins/titleMixin';
import { textSize14Mixin } from '../Mixins/textSize14Mixin';


import KranjskaKlobasa from '../Source/Accordion/Odprtakuhinja-kranjska.jpg';
import KraškiPrsut from '../Source/Accordion/kraski-prsut.jpg';
import CompesSkuto from '../Source/Accordion/Odprtakuhinja-compe-krompir.jpg';
import Jota from '../Source/Accordion/jota.jpg';
import Potica from '../Source/Accordion/potica.jpg';
import PrekmurskaGibanica from '../Source/Accordion/prekmurska-gibanica.jpg';

const BayanStyles = styled.div`
.accordion {
	padding: 70px 0 40px 0;
	width: 90%;
	margin: 0 auto;
	@media (max-width: 1400px) {
		width: 92%;
		}
	@media (max-width: 1388px) {
		width: 94%;
		}
	@media (max-width: 1199px) {
		width: 99%;
		}
	@media (max-width: 1188px) {
		width: 100%;
		}
	&-title {
		${titleMixin}
		}
	&-item {
		display: flex !important;
		flex-direction: row;
		}
	&-button {
		position: relative;
		flex-direction: column;
		background-color: #3a579a;
		color: white;
		height: 549px;
		width: 99px;
		font-weight: 400!important;
		font-size: 18px!important;
		line-height: 30px!important;
		transition: background-color 0.3s ease-in-out;
		&:hover {
			background-color: #324b87;
		}
		&:focus {
		box-shadow: none;
		}
		&[aria-expanded="true"] {
			background-color: #c48106;
			&:hover {
				background-color: #bb7c08;
			};
		}
		&:after {
		content: ">";
		position: absolute;
		top: 36%;
		left: 53%;
		background-image: none;
		font-size: 27px;
		font-weight: 300 !important;
		transform: rotate(-180deg);
		color: white;
		}
		&:not(.collapsed):after {
			background-image: none;
			color: white;
			transform: rotate(0deg);
			left: 56%;
			top: 33.6%;
		}
	}
	&-img {
		width: 100%;
		max-height: 444px !important;
		object-fit: cover;
	}
	&-contain {
		display: inline-block;
		margin-top: 20px;
		${textSize14Mixin};
	}
	&-bold {
		font-weight: 700 !important;
	}
	&-wrapper {
		display: flex; 
		flex-direction: row; 
	}
	&-button-name {
		writing-mode: vertical-lr;
		padding-top: 170px;
		padding-right: 43%;
		color: white;
		
	}
}

@media (max-width: 992px) {
	.accordion {
		&-title {
			margin-bottom: 70px;
		}
		&-button-name {
			writing-mode: initial;
			padding-top: initial;
			padding-right: initial;
			
		}
		&-item {
			display: flex;
			flex-direction: column; 
			
		}
		&-wrapper {
			display: initial; 
		}
		&-button {
			height: 70px !important;
			flex-direction: row;
			width: 100%;
			&:after {
				content: ">";
				transform: rotate(-90deg);
				margin-right: 13px;
		}
			&:not(.collapsed)::after {
			transform: rotate(90deg);
			margin-top: initial;
		 	margin-right: 0px;
		}
	}
}

@media (max-width: 992px) {
.accordion {
		&-title {
			font-size: 35px;
		}
	}
}

`

const Bayan: React.FunctionComponent<{
	getAllTextsOfSite: (key: string) => string;
	// eslint-disable-next-line react/prop-types
}> = ({ getAllTextsOfSite }) => {

	const accordionData = [
		{ key: '0', title: 'Kranjska klobasa', textKey: 'bayanOne', image: KranjskaKlobasa },
		{ key: '1', title: 'Kraški pršut', textKey: 'bayanTwo', image: KraškiPrsut },
		{ key: '2', title: 'Čompe s skuto', textKey: 'bayanThree', image: CompesSkuto },
		{ key: '3', title: 'Jota', textKey: 'bayanFour', image: Jota },
		{ key: '4', title: 'Potica', textKey: 'bayanFive', image: Potica },
		{ key: '5', title: 'Prekmurska gibanica', textKey: 'bayanSix', image: PrekmurskaGibanica },
	];

	return (
		<BayanStyles>
			<section className="accordion">
				<Container>
					<h2 className="accordion-title">{getAllTextsOfSite('bayanTitle')}</h2>
					<Row>
						<Col>
							<Accordion defaultActiveKey="0" className="accordion-wrapper">
								{accordionData.map((item) => (
									<Accordion.Item key={item.key} eventKey={item.key}>
										<Accordion.Header>
											<div className="accordion-button-name">{item.title}</div>
										</Accordion.Header>
										<Accordion.Body>
											<Row>
												<Col>
													<Image src={item.image} alt="" className="accordion-img" />
												</Col>
											</Row>
											<Row>
												<Col>
													<p className="accordion-contain">
														<span className="accordion-bold">{item.title}</span>
														{getAllTextsOfSite(item.textKey)}
													</p>
												</Col>
											</Row>
										</Accordion.Body>
									</Accordion.Item>
								))}
							</Accordion>
						</Col>
					</Row>
				</Container>
			</section>
		</BayanStyles>
	);
};


export default Bayan;