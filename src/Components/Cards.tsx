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

const cardData = [
	{
		id: 1,
		title: 'Середня зарплата',
		text: 'Плата за працю в Словенії: У 2023 році середня зарплата становить 2 132,58 євро на місяць¹. Після урахування всіх обовязкових відрахувань у розпорядженні місцевих працівників залишається 1 391, 65 євро. Найтиповіший дохід складає €25, 218 EUR¹. Життя та оренда: За даними сайту ¹, середня плата за оренду 1 - кімнатної квартири в Словенії становить близько € 500 на місяць. Варто відзначити, що ціни на оренду можуть відрізнятися в залежності від регіону та міста, і наприклад, в столиці Любляні ціни можуть бути вищими¹.',
		imageSrc: Salary,
	},
	{
		id: 2,
		title: 'Медичне обслуговування',
		text: 'В Словенії вартість лікування є високою, тому більшість громадян додатково оформлюють Медичну Страховку за понад 30 євро на місяць, щоб отримати безкоштовний доступ до повного медичного обслуговування. На жаль, біженці не мають повного медичного пакету послуг, а лише ургентні випадки можуть отримати допомогу за державною підтримкою. Щоб отримати медичний пакет, біженцям доводиться знайти роботу та влаштуватись на неї. Однак, навіть для працевлаштованих громадян, пошук сімейного лікаря може бути викликом, оскільки їх кількість обмежена, і іноді приходиться шукати лікаря в іншому місті. В результаті, черги на прийом до терапевтів можуть бути тривалими, чекати на призначений термін іноді доводиться кілька місяців.',
		imageSrc: Medicine,
	},
	{
		id: 3,
		title: 'Навчаняя і освіта',
		text: 'В Словенії дошкільне навчання (дитячі садки) є платним, але шкільна освіта (початковий рівень - 9 класів, середня школа - 4 роки) і навчання в вищих учбових закладах надається безкоштовно. Батьки лише оплачують шкільне приладдя та обіди дітей у школах. У школі дітей не перенапружують. Вартість вищої освіти (коледжі, ВНЗ)  для іноземців в Словенії вважається однією з найнижчих у Європі. У державних університетах та інститутах у столиці вартість навчання коливається від 3 до 4 тисяч євро, а в приватних інститутах - від 1 до 2 тисяч євро. Іноземним студентам надають житло у гуртожитку за ціною до 150 євро на місяць.',
		imageSrc: Education,
	},
	{
		id: 4,
		title: 'Перспективи для емігранта',
		text: 'Словенія не є ідеальним варіантом для іноземців, що шукають роботу, оскільки і місцевим жителям самим не легко знайти вигідні працевлаштування, а зарплати тут нижчі, ніж у Німеччині. Багато молодих словенців відїжджають працювати до Австрії та Німеччини, де є більше можливостей для розвитку. Словенія більше підходить для відпочинку та для бізнесменів з країна колишнього Радянського Союзу, де можна відкрити фірму порівнянно з невеликими витратами та отримати вид на життя. Однак, для карєрного зростання та високих зарплат, іноземцям краще розглянути інші європейські країни з більшими можливостями працевлаштування.',
		imageSrc: Work,
	},
	{
		id: 5,
		title: 'Пенсіоренри в Словенії',
		text: 'Пенсіонери в Словенії - щасливі люди, їх часто можна побачити у кафе з чашкою кави, на відміну від українських пенсіонерів, у багатьох з них є машини. Держава надає їм всебічну підтримку. Крім цього, їх оточує одна з найчистіших екологій в Європі: чистий гірське повітря, чисті озера та море, що позитивно впливає на їхнє довголіття. Середня тривалість життя в Словенії становить 78.6 років у чоловіків і 84.1 років у жінок. Гарантована мінімальна пенсія в 2023 р. складає 500 євро, і хоча це порівняно не багато з іншими країнами Європи, проте пенсіонери мають багато соціальних пільг.',
		imageSrc: Retired,
	},
	{
		id: 6,
		title: 'Вивчення мови',
		text: 'Словенська мова є однією зі славянських мов і належить до південнословянської групи. Вона виникла з діалектів словянських племен, що населяли територію сучасної Словенії та прилеглі регіони. Після отримання Словенією незалежності в 1991 році словенська мова стала державною та отримала офіційний статус. Вона активно використовується в освітніх, медичних, мас-медіа та державних сферах. Для українців вивчення словенської мови може бути спрощеним завдяки багатому спільному словниковому запасу між цими мовами. Це сприяє більш швидкому розумінню та освоєнню словенської мови порівняно з іншими мовами, наприклад, з романської групи.',
		imageSrc: Lorn,
	},

	// Add more objects for each card...
];

const Cards = () => {
	const [show, setShow] = useState(Array(cardData.length).fill(false));

	const handleClose = (id: number) => {
		const newShow = [...show];
		newShow[id] = false;
		setShow(newShow);
	};

	const handleShow = (id: number) => {
		const newShow = [...show];
		newShow[id] = true;
		setShow(newShow);
	};

	return (
		<CardsStyles>
			<section className="cards">
				<Container >
					<h2 className="cards__title">
						Життя в Словенії
					</h2>
					<Row sm={2} md={2} lg={3} className="g-4">
						{cardData.map((data, id) => (
							<Col key={id}>
								<Card style={{ width: '18rem' }} >
									<Card.Img variant="top" src={data.imageSrc} />
									<Card.Body>
										<div className="cards-title__box">
											<Card.Title>{data.title}</Card.Title>
										</div>

										{/* <Card.Text>{data.text}</Card.Text> */}
										<Button onClick={() => handleShow(id)} className='cards__btn'>
											ДІЗНАТИСЯ.....
										</Button>
										<Modal
											show={show[id]}
											onHide={() => handleClose(id)}
											size="lg"
											aria-labelledby="contained-modal-title-vcenter"
											centered>
											<Modal.Header closeButton>

												<Modal.Title className="text-center mx-auto">{data.title}</Modal.Title>
											</Modal.Header>
											<Modal.Body>
												<Row className='cards__row'>
													<Col><Card.Img variant="top" src={data.imageSrc} /></Col>
													<Col ><div className="mdl-text">{data.text}</div></Col>
												</Row>
											</Modal.Body>
											<Modal.Footer>
											</Modal.Footer>
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

