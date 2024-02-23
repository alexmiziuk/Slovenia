import { useState, useRef, useReducer, useEffect } from 'react';
import { Row, Image, Col, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import { titleMixin } from '../Mixins/titleMixin';

import OutlookFromTheWallToCity from '../Source/Piran/OutlookFromTheWallToCity.jpg';
import OutlookWallOnTheSea from '../Source/Piran/OutlookWallOnTheSea.jpg';
import outlookWallOfPiran from '../Source/Piran/outlookWallOfPiran.jpg';

const Styles = styled.div`
.wall {
	position: relative;
	padding: 70px 0;
   background-color: white;
	opacity: 1;
	transition: opacity 0.8s ease-in-out;
	&-title {
		${titleMixin}
	}
	&-row {
		margin-top: 40px;
	}
	&-line {
		position: absolute;
		height: 2px;
		width: 373px;
		background-color: #0171bd;
		top: 0px;
		left: 50%;
		transform: translate(-50%)
		
	}
	&-big {
		&-container {
		}
	}
	&-block {
		&-blue {
			background-color: #395597;
			width: 105%;
			height: 519px;
		}
	}
	&-col {
		&-block {
			position: relative;
		}
		&-container {
		width: 100%;
		position: absolute;
		right: 20%;
		}
	}
	&-container-img {
		margin-bottom: 15px;
	}
	&-up {
		&-button {
			background-color: transparent;
			border: 2px solid white;
			margin-left: 104px;
			height: 268px;
			padding: 0;
			
		}
		&-img {
			height: 100%;
			width: 100%;
			transition: 0.3s ease-in-out;
			object-fit: cover;
			&:hover {
				width: 101%;
			}
		}
	}
	&-center{
		&-button {
			background-color: transparent;
			border: 2px solid white;
			margin-left: 53px;
			padding: 0;
			width: 385px;
			height: 220px;
			transition: 0.3s ease-in-out;
			&:hover {
				width: 387px;
			}
		}
		&-img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
	&-dawn{
		&-button {
			height: 298px;
			width: 250px;
			border: 2px solid white;
			position: absolute;
			top: 220px;
			left: 438px;
			padding: 0px;
			transition: 0.3s ease-in-out;
			&:hover {
				width: 252px;
			}
		}
		&-img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
	&-layer {
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 1);
		z-index: 9999; 
		align-items: center;
		justify-content: center;
	}
	
	 &-text{
		&-container{
			padding-left: 24px;
		}
	 }
	&-piran{
		&-text{
			margin-top: 55px;
		}
	}
	&-modal {
		&-button {
			position: absolute;
			background-color: orange;
			top: 20%;
			&:hover {
				background-color: #c48106;
			}
			&-up {
				right: 10%;
			}
			&-center{
				right: 26%;
			}
			&-down {
				right: 39%;
			}
		}
		&-img-down {
		height: 650px;
		}
		
	}
}
.button-hover {
	top: 285px;
	height: 220px;
}

@media (max-width: 1400px) {
	.wall {
		&-up{
			&-button {
				margin-left: 39px;
				width: 466px;
			}
			&-img {
				width: 108.5%;
			}
		}
		&-center-button {
			margin-left: 0px;
			width: 318px;
		}
		&-dawn{
			&-button {
				left: 321px;
				width: 205px;
			}
		}
		&-piran-text {
			margin-top: 35px;
		}
		&-modal {
			&-button{
					&-up {
						right: 6%;
						}
					}
					&-center{
						right: 23%;
					}
					&-down {
					right: 38%;
					}
				}
			}
			
	.col{
		&-xl-7 {
			width: 53.333333%;
		}
		&-xl-5 {
			width: 46.666667%;
		}
	}
}

@media (max-width: 1300px) {
	.wall{
		&-modal{
			&-button{
				&-up {
					right: 3%;
				}
				&-center{
					right: 21%;
				}
				&-down {
					right: 37%;
				}
			}
		}
	}
}
@media (max-width: 1200px) {
	.wall {
		&-block-blue {
			width: 307%;
		}
		&-up{
			&-button {
				margin-left: 82px;
				width: 426px;
			}
			&-img {
				width: 100%;
			}
		}
		&-center-button {
			width: 262px;
			margin-left: 41px;
		}
		&-dawn-button {
			width: 183px;
			left: 305px;
		}
		&-piran-text {
			margin-top: 0px;
		}
		&-modal{
			&-button-center{
				right: 18%;
			}
			&-button-down {
				right: 36%;
			}
		}
	}
	.col-lg-5 {
		width: 46.666667%;
	}
}

@media (max-width: 1100px) {
	.wall{
		&-modal-button-center{
			right: 16%;
		}
		&-modal-button-down {
			right: 34%;
		}
	}	
}

@media (max-width: 992px) {
	.wall{
		&-block-blue {
			width: 100%;
		}
		&-container-img-up {
			width: 121%
		}
		&-up-button {
			margin-left: 49px;
			width: 92%;
		}
		&-center-button {
			width: 378px;
			margin-left: 0px;
		}
		&-dawn-button {
			left: 381px;
		}
		&-modal{
			&-button{
				&-center{
					right: 12%;
				}
				&-down {
					right: 33%;
				}
			}
		}
	}
	.col{
		&-xl-7 {
			width: 100%;
		}
		&-lg-5 {
			margin-top: 20px;
			width: 100%;
		}
	}
}

@media (max-width: 900px) {
	.wall {
	  &-modal{
		&-button{
			&-center {
				right: 8%;
			}
			&-down {
				right: 31%;
			}
		}
	}
	&-center-button:hover {
		width: 75%;
	}
	&-dawn-button:hover {
		width: 38.5%;
		height: 298px;
		cursor: auto;
		}
	}
}
@media (min-width: 766px) and (max-width: 836px) and (min-height: 1022px) and (max-height: 1281px) {
	.wall{
		&-modal {
			&-button {
			top: 28%;
			}
			&-button-down {
				top: 15%;
				right: 22% !important;
			}
			&-img-down {
				height: 966px;
			}
		}
	}
}

@media (max-width: 800px) {
	.wall{
		&-modal{
			&-button{
				&-center{
					right: 4%;
				}
				&-down {
					right: 28%;
			  }
			}
		}
	}
}

@media (max-width: 768px) {
	.wall {
		&-center-button {
			width: 69%;
			&:hover {
				width: 69%;
			}
		}
		&-dawn-button {
			left: 73%;
			width: 44%;
			&:hover {
				width: 44%;
				height: 298px;
				cursor: auto;
			 }
		}
		&-modal-button-down {
			right: 28%;
		}
	}
}

@media (max-width: 700px) {
	.wall {
		&-dawn-button {
			left: 74%;
		}
		&-modal-button-down {
			right: 25%;
	  }
	}
}

@media (max-width: 600px) {
	.wall {
		&-dawn-button {
			left: 75%;
		}
		&-modal-button-down {
			right: 21%;
			}
	}
}

@media (max-width: 576px) {
	.wall{
		&-big-container {
			display: grid;
			grid-template-columns: 1fr 2fr;
		}
		&-modal-button-down {
			right: 20%;
	  }
	  &-line {
		width: 65%;
	  }
	}
}

@media (max-width: 456px) {
	.wall{
		&-up-button {
			margin-left: 0px;
			width: 100%;
		}
		&-dawn-button {
			left: 71%;
		}
		&-center-button {
			margin-left: -32px;
			width: 74%;
			&:hover {
				width: 74%;
			}
		}
		&-modal-button-down {
			right: 12%;
		}
	}
}

@media (max-width: 368px) {
	.wall {
		&-center-button {
			margin-left: -32px;
			width: 73%;
			&:hover {
				width: 73%;
			}
		}
		&-dawn-button {
			left: 69%;
			}
		&-modal-button-down {
				right: 7%;
			}
	}
}
`
const ModalPiran1: React.FC<{
	setShowModal: (key: boolean) => void;
	show: boolean;
	// eslint-disable-next-line react/prop-types
}> = ({ setShowModal, show }) => {
	const duration = 400;
	const modalRef = useRef(null);

	const defaultStyle: React.CSSProperties = {
		transition: `all ${duration}ms ease-in-out`,
		opacity: 0,
		visibility: 'hidden',

	}
	const transitionStyles = {
		entering: { opacity: 1, visibility: 'visible' },
		entered: { opacity: 1, visibility: 'visible' },
		exiting: { opacity: 0, visibility: 'hidden' },
		exited: { opacity: 0, visibility: 'hidden' },
	};

	return (
		// eslint-disable-next-line react/prop-types
		<Transition in={show} timeout={duration} nodeRef={modalRef} >
			{(state) => (
				<div
					className='wall-layer'
					style={{
						...defaultStyle,
						...(transitionStyles as Record<string, React.CSSProperties>)[state],
					}}
					ref={modalRef}

				>
					<div className='wall-modal'>
						<Image src={OutlookFromTheWallToCity} rounded />
						<Button
							className='wall-modal-button wall-modal-button-up'
							variant="secondary"
							onClick={() => setShowModal(false)}>
							Close
						</Button>
					</div>
				</div>
			)}
		</Transition>

	)
}

const ModalPiran2: React.FC<{
	setShowModal2: (key: boolean) => void;
	show2: boolean;
	// eslint-disable-next-line react/prop-types
}> = ({ setShowModal2, show2 }) => {
	const duration = 400;
	const modalRef = useRef(null);

	const defaultStyle: React.CSSProperties = {
		transition: `all ${duration}ms ease-in-out`,
		opacity: 0,
		visibility: 'hidden'
	}
	const transitionStyles = {
		entering: { opacity: 1, visibility: 'visible' },
		entered: { opacity: 1, visibility: 'visible' },
		exiting: { opacity: 0, visibility: 'hidden' },
		exited: { opacity: 0, visibility: 'hidden' },
	};

	return (
		// eslint-disable-next-line react/prop-types
		<Transition in={show2} timeout={duration} nodeRef={modalRef}>
			{(state) => (
				<div
					className='wall-layer'
					style={{
						...defaultStyle,
						...(transitionStyles as Record<string, React.CSSProperties>)[state],
					}}
					ref={modalRef}
				>
					<div className='wall-modal'>
						<Image className='wall-modal-img-fit' src={outlookWallOfPiran} rounded />
						<Button
							className='wall-modal-button wall-modal-button-center'
							variant="secondary"
							onClick={() => setShowModal2(false)}>
							Close
						</Button>
					</div>
				</div>
			)}
		</Transition>

	)
}
const ModalPiran3: React.FC<{
	setShowModal3: (key: boolean) => void;
	show3: boolean;
	// eslint-disable-next-line react/prop-types
}> = ({ setShowModal3, show3 }) => {
	const duration = 400;
	const modalRef = useRef(null);

	const defaultStyle: React.CSSProperties = {
		transition: `all ${duration}ms ease-in-out`,
		opacity: 0,
		visibility: 'hidden'
	}
	const transitionStyles = {
		entering: { opacity: 1, visibility: 'visible' },
		entered: { opacity: 1, visibility: 'visible' },
		exiting: { opacity: 0, visibility: 'hidden' },
		exited: { opacity: 0, visibility: 'hidden' },
	};

	return (
		// eslint-disable-next-line react/prop-types
		<Transition in={show3} timeout={duration} nodeRef={modalRef}>
			{(state) => (
				<div
					className='wall-layer'
					style={{
						...defaultStyle,
						...(transitionStyles as Record<string, React.CSSProperties>)[state],
					}}
					ref={modalRef}
				>
					<div className='wall-modal'>
						<Image className='wall-modal-img-fit wall-modal-img-down' src={OutlookWallOnTheSea} rounded fluid />
						<Button
							className='wall-modal-button wall-modal-button-down'
							variant="secondary"
							onClick={() => setShowModal3(false)}>
							Close
						</Button>
					</div>
				</div>
			)}
		</Transition>

	)
}


type ModalAction =
	| { type: 'SHOW_MODAL1' }
	| { type: 'SHOW_MODAL2' }
	| { type: 'SHOW_MODAL3' }
	| { type: 'HIDE_MODAL'; modal?: string };

const modalReducer = (state = initialState, action: ModalAction) => {
	switch (action.type) {
		case 'SHOW_MODAL1':
			return { ...state, showModal1: true, isModalOpen: true };
		case 'SHOW_MODAL2':
			return { ...state, showModal2: true, isModalOpen: true };
		case 'SHOW_MODAL3':
			return { ...state, showModal3: true, isModalOpen: true };
		case 'HIDE_MODAL':
			return { ...state, showModal1: false, showModal2: false, showModal3: false, isModalOpen: false };
		default:
			return state;
	}
};

const initialState = {
	showModal1: false,
	showModal2: false,
	showModal3: false,
	isModalOpen: false,
};

const FortressWall: React.FC<{
	getAllTextsOfSite: (key: string) => string;
	// eslint-disable-next-line react/prop-types
}> = ({ getAllTextsOfSite }) => {

	const [state, dispatch] = useReducer(modalReducer, initialState);
	const { showModal1, showModal2, showModal3, isModalOpen } = state;

	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleUnhover = () => {
		setIsHovered(false);
	};

	useEffect(() => {
		document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isModalOpen]);

	return (
		<Styles>
			<section>
				<div className="wall">
					<Container fluid="md">
						<span className='wall-line'>
						</span>
						<h2 className="wall-title">
							{getAllTextsOfSite('wallPiranTitle')}
						</h2>
						<Row className='wall-row'>
							<Col md='12' lg='6' xl='7'>
								<Row className='wall-big-container'>
									<Col xl='3' lg='2' md='4' sm='4'>
										<div className='wall-block-blue'>
										</div>
									</Col>
									<Col xl='9' lg='10' md='8' sm='8' className='wall-col-block' >
										<div className='wall-col-container'>
											<Row className='wall-container-img wall-container-img-up '>
												<Button className="wall-up-button"
													onClick={() => dispatch({ type: 'SHOW_MODAL1' })}>
													<Image
														className="wall-up-img wall-img-effect"
														src={OutlookFromTheWallToCity}
														rounded
														onMouseEnter={handleHover}
														onMouseLeave={handleUnhover} />
												</Button>
											</Row>
											<ModalPiran1 show={showModal1} setShowModal={() => dispatch({ type: 'HIDE_MODAL', modal: 'showModal1' })} />
											<Row className='wall-container-img'>
												<Button className='wall-center-button'
													onClick={() => dispatch({ type: 'SHOW_MODAL2' })}>
													<Image
														className="wall-center-img"
														src={outlookWallOfPiran}
														rounded />
												</Button>
											</Row>
											<ModalPiran2 show2={showModal2} setShowModal2={() => dispatch({ type: 'HIDE_MODAL', modal: 'showModal2' })} />
											<Row className='wall-container-img'>
												<Button className={isHovered ? 'wall-dawn-button button-hover' : 'wall-dawn-button'}
													onClick={() => dispatch({ type: 'SHOW_MODAL3' })}>
													<Image className='wall-dawn-img'
														src={OutlookWallOnTheSea} rounded />
												</Button>
											</Row>
											<ModalPiran3 show3={showModal3} setShowModal3={() => dispatch({ type: 'HIDE_MODAL', modal: 'showModal3' })} />
										</div>
									</Col>
								</Row>
							</Col>
							<Col xl='5' lg='5' md='12' className="wall-text-container">
								<p className='wall-piran-text'>
									{getAllTextsOfSite('wallPiranText1')}
								</p>
								<p>
									<b>{getAllTextsOfSite('wallPiranTextBold2')}</b>
									{getAllTextsOfSite('wallPiranText2')}
								</p>
								<p>
									<b>{getAllTextsOfSite('wallPiranTextBold3')}</b>
									{getAllTextsOfSite('wallPiranText3')}
								</p>
							</Col>
						</Row>
					</Container>
				</div>
			</section>
		</Styles>
	);
};

export default FortressWall;