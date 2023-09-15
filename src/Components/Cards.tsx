import { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';


import Salary from '../Source/Cards/Salary.jpg';
import Medicine from '../Source/Cards/Medicine.jpg';
import Education from '../Source/Cards/Education.jpg';
import Work from '../Source/Cards/Work.jpg';
import Retired from '../Source/Cards/Retired.jpg';
import Lorn from '../Source/Cards/Lorn.jpg';

const CardsStyles = styled.div`
.cards {
	padding: 70px 0 40px 0;
	&__title {
		font-size: 42px;
		font-weight: 600;
		line-height: 54px;
		text-align: center;
		color: #786f6f;

	}
	.card{
		&-body {
			background-color:#d6d6d6d9;
			border: none;
			border-radius: 6px;

		}
		&-title {
			font-weight: 400 !important;
			font-size: 18px !important;
			color: #545151;
			line-height: 30px !important;

		}
	}
	
	
	&-title__box {
		min-height: 49px;
		
	}
	&__btn {
		margin-top: 20px;
		background-color: orange;
		font-weight: 400;
		font-size: 16px;
		border: none;
		width: 160px;
		&:hover {
      background-color: #c48106;
		}
	
	}
	.card-title {
		line-height: 27px;
		font-weight: 700;
	   font-size: 17px;
	}
}
  .col {
    display: flex;
    justify-content: center;
	 margin-top: 70px;
  }
  
}
.mdl-text {
	font-weight: 400;
	font-size: 14px;
	margin-top: 0;

}
.modal-title {
	color: #545151;
}

@media (max-width: 991px) {
	.cards__row {
	  flex-direction: column;
     }
	  .mdl-text {
      margin-top: 20px;
	}
   }
	
`;

const Cards: React.FunctionComponent<{
	getAllTextsOfSite: (key: string) => string;
	// eslint-disable-next-line react/prop-types
}> = ({ getAllTextsOfSite }) => {

	const [show, setShow] = useState([false, false, false, false, false, false]);

	const handleClose = (index: number) => {
		const updatedShow = [...show];
		updatedShow[index] = false;
		setShow(updatedShow);
	};

	const handleShow = (index: number) => {
		const updatedShow = [...show];
		updatedShow[index] = true;
		setShow(updatedShow);
	};

	return (
		<CardsStyles>
			<section className="cards">
				<Container >
					<h2 className="cards__title">
						{getAllTextsOfSite('cardsTitle')}
					</h2>
					<Row sm={2} md={2} lg={3} className="g-4">
						<Col >
							<Card style={{ width: '18rem' }} >
								<Card.Img variant="top" src={Salary} />
								<Card.Body>
									<div className="cards-title__box">
										<Card.Title>{getAllTextsOfSite('cardOneTitle')}</Card.Title>
									</div>
									<Button onClick={() => handleShow(0)} className='cards__btn'>
										{getAllTextsOfSite('cardsBtn')}
									</Button>
									<Modal
										show={show[0]}
										onHide={() => handleClose(0)}
										size="lg"
										aria-labelledby="contained-modal-title-vcenter"
										centered>
										<Modal.Header closeButton>
											<Modal.Title className="text-center mx-auto">{getAllTextsOfSite('cardOneTitle')}
											</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<Row className='cards__row'>
												<Col><Card.Img variant="top" src={Salary} /></Col>
												<Col >
													<div className="mdl-text">{getAllTextsOfSite('cardOneModalText')}
													</div>
												</Col>
											</Row>
										</Modal.Body>
										<Modal.Footer>
										</Modal.Footer>
									</Modal>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '18rem' }} >
								<Card.Img variant="top" src={Medicine} />
								<Card.Body>
									<div className="cards-title__box">
										<Card.Title>{getAllTextsOfSite('cardTwoTitle')}</Card.Title>
									</div>
									<Button onClick={() => handleShow(1)} className='cards__btn'>
										{getAllTextsOfSite('cardsBtn')}
									</Button>
									<Modal
										show={show[1]}
										onHide={() => handleClose(1)}
										size="lg"
										aria-labelledby="contained-modal-title-vcenter"
										centered>
										<Modal.Header closeButton>
											<Modal.Title className="text-center mx-auto">{getAllTextsOfSite('cardTwoTitle')}</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<Row className='cards__row'>
												<Col><Card.Img variant="top" src={Medicine} /></Col>
												<Col >
													<div className="mdl-text">{getAllTextsOfSite('cardTwoModalText')}
												</div>
												</Col>
											</Row>
										</Modal.Body>
										<Modal.Footer>
										</Modal.Footer>
									</Modal>
								</Card.Body>
							</Card>
						</Col>
						<Col >
							<Card style={{ width: '18rem' }} >
								<Card.Img variant="top" src={Education} />
								<Card.Body>
									<div className="cards-title__box">
										<Card.Title>{getAllTextsOfSite('cardThreeTitle')}</Card.Title>
									</div>
									<Button onClick={() => handleShow(2)} className='cards__btn'>
										{getAllTextsOfSite('cardsBtn')}
									</Button>
									<Modal
										show={show[2]}
										onHide={() => handleClose(2)}
										size="lg"
										aria-labelledby="contained-modal-title-vcenter"
										centered>
										<Modal.Header closeButton>
											<Modal.Title className="text-center mx-auto">{getAllTextsOfSite('cardThreeTitle')}</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<Row className='cards__row'>
												<Col><Card.Img variant="top" src={Education} /></Col>
												<Col >
													<div className="mdl-text">{getAllTextsOfSite('cardThreeModalText')}
													</div>
												</Col>
											</Row>
										</Modal.Body>
										<Modal.Footer>
										</Modal.Footer>
									</Modal>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '18rem' }} >
								<Card.Img variant="top" src={Work} />
								<Card.Body>
									<div className="cards-title__box">
										<Card.Title>{getAllTextsOfSite('cardFourTitle')}</Card.Title>
									</div>
									<Button onClick={() => handleShow(3)} className='cards__btn'>
										{getAllTextsOfSite('cardsBtn')}
									</Button>
									<Modal
										show={show[3]}
										onHide={() => handleClose(3)}
										size="lg"
										aria-labelledby="contained-modal-title-vcenter"
										centered>
										<Modal.Header closeButton>
											<Modal.Title className="text-center mx-auto">{getAllTextsOfSite('cardFourTitle')}</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<Row className='cards__row'>
												<Col><Card.Img variant="top" src={Work} /></Col>
												<Col >
													<div className="mdl-text">{getAllTextsOfSite('cardFourModalText')}
													</div>
												</Col>
											</Row>
										</Modal.Body>
										<Modal.Footer>
										</Modal.Footer>
									</Modal>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '18rem' }} >
								<Card.Img variant="top" src={Retired} />
								<Card.Body>
									<div className="cards-title__box">
										<Card.Title>{getAllTextsOfSite('cardFiveTitle')}</Card.Title>
									</div>
									<Button onClick={() => handleShow(4)} className='cards__btn'>
										{getAllTextsOfSite('cardsBtn')}
									</Button>
									<Modal
										show={show[4]}
										onHide={() => handleClose(4)}
										size="lg"
										aria-labelledby="contained-modal-title-vcenter"
										centered>
										<Modal.Header closeButton>
											<Modal.Title className="text-center mx-auto">{getAllTextsOfSite('cardFiveTitle')}</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<Row className='cards__row'>
												<Col>
													<Card.Img variant="top" src={Retired} /></Col>
												<Col >
													<div className="mdl-text">{getAllTextsOfSite('cardFiveModalText')}
													</div>
												</Col>
											</Row>
										</Modal.Body>
										<Modal.Footer>
										</Modal.Footer>
									</Modal>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '18rem' }} >
								<Card.Img variant="top" src={Lorn} />
								<Card.Body>
									<div className="cards-title__box">
										<Card.Title>{getAllTextsOfSite('cardSixTitle')}</Card.Title>
									</div>
									<Button onClick={() => handleShow(5)} className='cards__btn'>
										{getAllTextsOfSite('cardsBtn')}
									</Button>
									<Modal
										show={show[5]}
										onHide={() => handleClose(5)}
										size="lg"
										aria-labelledby="contained-modal-title-vcenter"
										centered>
										<Modal.Header closeButton>
											<Modal.Title className="text-center mx-auto">{getAllTextsOfSite('cardSixTitle')}</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<Row className='cards__row'>
												<Col><Card.Img variant="top" src={Lorn} /></Col>
												<Col >
													<div className="mdl-text">{getAllTextsOfSite('cardSixModalText')}
													</div>
												</Col>
											</Row>
										</Modal.Body>
										<Modal.Footer>
										</Modal.Footer>
									</Modal>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
		</CardsStyles>
	);
};

export default Cards;