import { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { titleMixin } from '../Mixins/titleMixin';
import { textSize14Mixin } from '../Mixins/textSize14Mixin';
import { buttonMixin } from '../Mixins/buttonMixin';

import Salary from '../Source/Cards/Salary.jpg';
import Medicine from '../Source/Cards/Medicine.jpg';
import Education from '../Source/Cards/Education.jpg';
import Work from '../Source/Cards/Work.jpg';
import Retired from '../Source/Cards/Retired.jpg';
import Lorn from '../Source/Cards/Lorn.jpg';

const CardsStyles = styled.div`
.cards {
	padding: 70px 0 40px 0;
	&-title {
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
			${titleMixin};

		}
	}
	&-title-box {
		min-height: 49px;
		
	}
	&-btn {
		margin-top: 20px;
		${buttonMixin};
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
	${textSize14Mixin};
	margin-top: 0;

}
.modal-title {
	color: #545151;
}

@media (max-width: 991px) {
	.cards-row {
	  flex-direction: column;
     }
	  .mdl-text {
      margin-top: 20px;
	}
   }
	
`;

const CardsData = [
	{
	  title: 'cardOneTitle',
	  imageSrc: Salary,
	  modalText: 'cardOneModalText',
	},
	{
	  title: 'cardTwoTitle',
	  imageSrc: Medicine,
	  modalText: 'cardTwoModalText',
	},
	{
	  title: 'cardThreeTitle',
	  imageSrc: Education,
	  modalText: 'cardThreeModalText',
	},
	{
	  title: 'cardFourTitle',
	  imageSrc: Work,
	  modalText: 'cardFourModalText',
	},
	{
	  title: 'cardFiveTitle',
	  imageSrc: Retired,
	  modalText: 'cardFiveModalText',
	},
	{
	  title: 'cardSixTitle',
	  imageSrc: Lorn,
	  modalText: 'cardSixModalText',
	},
 ];
 
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
			<Container>
			  <h2 className="cards-title">{getAllTextsOfSite('cardsTitle')}</h2>
			  <Row sm={2} md={2} lg={3} className="g-4">
				 {CardsData.map((card, index) => (
					<Col key={index}>
					  <Card style={{ width: '18rem' }}>
						 <Card.Img variant="top" src={card.imageSrc} />
						 <Card.Body>
							<div className="cards-title-box">
							  <Card.Title>{getAllTextsOfSite(card.title)}</Card.Title>
							</div>
							<Button
							  onClick={() => handleShow(index)}
							  className="cards-btn">
							  {getAllTextsOfSite('cardsBtn')}
							</Button>
							<Modal
							  show={show[index]}
							  onHide={() => handleClose(index)}
							  size="lg"
							  aria-labelledby="contained-modal-title-vcenter"
							  centered>
							  <Modal.Header closeButton>
								 <Modal.Title className="text-center mx-auto">
									{getAllTextsOfSite(card.title)}
								 </Modal.Title>
							  </Modal.Header>
							  <Modal.Body>
								 <Row className="cards-row">
									<Col>
									  <Card.Img variant="top" src={card.imageSrc} />
									</Col>
									<Col>
									  <div className="mdl-text">
										 {getAllTextsOfSite(card.modalText)}
									  </div>
									</Col>
								 </Row>
							  </Modal.Body>
							  <Modal.Footer></Modal.Footer>
							</Modal>
						 </Card.Body>
					  </Card>
					</Col>
				 ))}
			  </Row>
			</Container>
		 </section>
	  </CardsStyles>
	);
 };
 
 export default Cards;
 