import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KranjskaKlobasa from '../Source/Accordion/Odprtakuhinja-kranjska.jpg';
import KraškiPrsut from '../Source/Accordion/kraski-prsut.jpg';
import CompesSkuto from '../Source/Accordion/Odprtakuhinja-compe-krompir.jpg';
import Jota from '../Source/Accordion/jota.jpg';
import Potica from '../Source/Accordion/potica.jpg';
import PrekmurskaGibanica from '../Source/Accordion/prekmurska-gibanica.jpg';


import styled from 'styled-components';

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
		font-weight: 600;
		font-size: 42px;
		text-align: center;
		line-height: 54px;
		color: #786f6f;
		}
	&-item {
		display: flex !important;
		flex-direction: row;
		}
	&-button {
		position: relative;
		flex-direction: column;
		background-color: blue;
		color: white;
		height: 549px;
		width: 99px;
		font-weight: 400!important;
		font-size: 18px!important;
		line-height: 30px!important;
		&:hover {
			background-color: #0a0a62;
		}
		&:focus {
		box-shadow: none;
		}
		&[aria-expanded="true"] {
			background-color: #c48106;
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
		&:not(.collapsed)::after {
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
		font-weight: 400;
		font-size: 14px;
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

const Bayan = () => {
	return (
		<BayanStyles>
			<section className='accordion'>
				<Container>
					<h2 className="accordion-title">
						Національні страви Словенії
					</h2>
					<Row>
						<Col>
							<Accordion defaultActiveKey="0" className='accordion-wrapper'>
								<Accordion.Item eventKey="0" >
									<Accordion.Header ><div className='accordion-button-name'>Kranjska klobasa</div></Accordion.Header>
									<Accordion.Body>
										<Row>
											<Col>
												<img src={KranjskaKlobasa} alt="" className="accordion-img" />
											</Col>
										</Row>
										<Row>
											<Col>
												<p className="accordion-contain">
													<span className="accordion-bold">Kranjska klobasa</span> - свиняча ковбаса, удостоєна звання «шедевр національного значення».
													Щороку у громаді Медводі проходить фестиваль краньської ковбаси.
													Традиційно цю страву подають із кислою капустою.
												</p>
											</Col>
										</Row>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header><div className='accordion-button-name'>Kraški pršut</div></Accordion.Header>
									<Accordion.Body>
										<Row>
											<Col>
												<img src={KraškiPrsut} alt="" className="accordion-img" />
											</Col>
										</Row>
										<Row>
											<Col>
												<p className="accordion-contain">
													<span className="accordion-bold">Kraški pršut</span> – в&apos;ялений свинячий окіст. Словенці вважають,
													що вітер бору та піранська сіль особливим чином впливають на м&apos;ясо,
													надаючи йому неповторного смаку.
													Краський пршут дозріває 12-16 місяців і набуває рубіново-червоного кольору.
												</p>
											</Col>
										</Row>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header><div className='accordion-button-name'>Čompe s skuto</div></Accordion.Header>
									<Accordion.Body>
										<Row>
											<Col>
												<img src={CompesSkuto} alt="" className="accordion-img" />
											</Col>
										</Row>
										<Row>
											<Col>
												<p className="accordion-contain">
													<span className="accordion-bold">Čompe s skuto</span> – половинки звареної в мундирі картоплі, намазані сирною пастою.
													На честь цієї нехитрої страви у місті Бовець
													щороку проводять фестиваль «Чомпарская нічь».
												</p>
											</Col>
										</Row>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header><div className='accordion-button-name'>Jota</div></Accordion.Header>
									<Accordion.Body>
										<Row>
											<Col>
												<img src={Jota} alt="" className="accordion-img" />
											</Col>
										</Row>
										<Row>
											<Col>
												<p className="accordion-contain">
													<span className="accordion-bold">Jota</span> – суп із квашеної або свіжої капусти, картоплі, квасолі, сала, перцю та часнику.
													У кожному регіоні свій набір спецій для йоти, тому цей суп можна куштувати у різних містах.
												</p>
											</Col>
										</Row>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="4">
									<Accordion.Header><div className='accordion-button-name'>Potica</div></Accordion.Header>
									<Accordion.Body>
										<Row>
											<Col>
												<img src={Potica} alt="" className="accordion-img" />
											</Col>
										</Row>
										<Row>
											<Col>
												<p className="accordion-contain">
													<span className="accordion-bold">Potica</span> – рулет із дріжджового тіста. Традиційно його начиняють горіхами та маком,
													але в кожної господині свій варіант начинки. На ярмаркові прилавки часто
													викладають потици вагою кілька кілограм, а деяких кафе роблять мініатюрні потицы.
												</p>
											</Col>
										</Row>
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="5">
									<Accordion.Header><div className='accordion-button-name'>Prekmurska gibanica</div></Accordion.Header>
									<Accordion.Body>
										<Row>
											<Col>
												<img src={PrekmurskaGibanica} alt="" className="accordion-img" />
											</Col>
										</Row>
										<Row>
											<Col>
												<p className="accordion-contain">
													<span className="accordion-bold">Prekmurska gibanica</span> – дев&apos;ятишаровий пиріг з начинкою з яблук, маку, сиру з цукром та ваніллю, родзинок та горіхів,
													який готують зазвичай на свята. Схожий пиріг печуть у Сербії та Хорватії,
													але гібаниця з Прекмур&apos;я найскладніша і найбагатша.
												</p>
											</Col>
										</Row>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>
					</Row>
				</Container>
			</section>
		</BayanStyles>

	);
};

export default Bayan;