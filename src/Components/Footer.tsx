import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import sloveniaLogoBlack from '../Source/Icons/Logo-black-slovenia.svg';
import iconFacebook from '../Source/Icons/icon-facebook.svg';
import iconTelegram from '../Source/Icons/icon-telegram.svg';

import styled from 'styled-components';


const FooterStyled = styled.div`
.footer {
	padding: 70px 0 40px 0;
	background: #212529; 
	color: #fff;
	&-logo {
		margin-left: -17px;
	}
	&-text {
		margin-top: 20px;
		font-size: 14px;
		font-weight: 400;
		color: #717171; 
		width: 250px;
		line-height: 24px;
	}
	&-title {
		margin-top: 32px;
		font-weight: 200;
		font-size: 18px;
		width: 280px;
	}
	&-list {
		margin-top: 23px;
		list-style-type: none;
  		padding-left: 0;
	}
	&-item,
	&-contact {
		padding-bottom: 10px;
		color: #9ea0a3; 
		font-size: 14px;
		font-weight: 400;
		line-height: 26px;
	}
	&-contact {
		color: #717171;
		width: 280px;
	}
	&-link {
		display: inline-block;
		text-decoration: none;
		color:  #717171; 
		&:hover {
			color: #c1cbda;
		}
		&-telephone {
			color: #9ea0a3; 
		}
	}
	&-social {
		position: relative;
		width: 200px;
		height: 83px;
		border-radius: 6px;
		&-facebook {
			background-color: #3a579a;
		}
		&:hover {
			background-color: #324b87;
		}
		&-telegram {
			background-color: #00abf0;
			&:hover {
				background-color: #139dd5;
			}
		}
	}
	&-window {
		overflow: hidden;
		position: relative;
		top: 50%;
		left: 50%;;
		transform: translate(-50%, -50%);
		width: 50px;
		height: 50px;
		border-radius: 100%;
	}
	&-container {
		position: absolute;
		height: 180px;
		top: -100%;
	}
	&-icons {
		height: 30px;
	}
	&-background {
		&-icons-up,
		&-icons-down {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #344e8a;
			width: 50px;
			height: 50px;
			&:hover {
				background-color: #2c437a;
			}
		}
		&-icons-up {
			transition: ease 0.3s;
		}
	}
}
.footer-social:hover .footer-window .footer-container .footer-background-icons-up {
		margin-top: 100.5%;
		
	 }
.footer-social:hover .footer-window .footer-container .footer-background-color-icons-facebook {
	background-color: #2c437a;
	
}
.background-telegram {
	background-color: #009ad8;
}
.footer-social:hover .footer-window .footer-container .footer-background-color-icons-telegram {
	background-color: #158ebf;
}

`
interface FooterProps {
	getAllTextsOfSite: (key: string) => string;
}
 
const Footer: React.FunctionComponent<FooterProps> = ({ getAllTextsOfSite }) => {
	return (
		<FooterStyled >
			<footer className="footer">
				<Container>
					<Row>
						<Col>
							<a href="#">
								<img src={sloveniaLogoBlack} alt="WebDev Blog Logo" width="200" height="60" className='footer-logo'/>
							</a>
							<p className="footer-text">
							{getAllTextsOfSite('footerText')}
							</p>
						</Col>
						<Col>
							<h2 className="footer-title">
							{getAllTextsOfSite('footerTitleOne')}
							</h2>
							<ul className='footer-list'>
								<li className='footer-item'>
									<a href="https://slovenia.mfa.gov.ua/" className="footer-link">
									{getAllTextsOfSite('footerLinkOne')}
									</a>
								</li>
								<li className='footer-item'>
									<a href="https://www.avto.net/" className="footer-link">
									{getAllTextsOfSite('footerLinkTwo')}
									</a>
								</li>
								<li className='footer-item'>
									<a href="https://www.bolha.com/oddaja-stanovanja" className="footer-link">
									{getAllTextsOfSite('footerLinkThree')}
									</a>
								</li>
								<li className='footer-item'>
									<a href="https://www.nomago.si/avtobusne-vozovnice/vozni-red" className="footer-link">
									{getAllTextsOfSite('footerLinkFour')}
									</a>
								</li>
								<li className='footer-item'>
									<a href="https://potniski.sz.si/en/" className="footer-link">
									{getAllTextsOfSite('footerLinkFive')}
									</a>
								</li>
							</ul>
						</Col>
						<Col>
							<h2 className="footer-title">
							{getAllTextsOfSite('footerTitleTwo')}
							</h2>
							<ul className='footer-list'>
								<li className='footer-contact'>
								{getAllTextsOfSite('footerContactOne')}&nbsp;
									<a href="tel:113" className="footer-link footer-link-telephone">
										113
									</a>
								</li>
								<li className='footer-contact'>
								{getAllTextsOfSite('footerContactTwo')}&nbsp;
									<a href="tel:+386 080 12 00" className="footer-link footer-link-telephone">
										+386 080 12 00
									</a>
								</li>
								<li className='footer-contact'>
								{getAllTextsOfSite('footerContactThree')}&nbsp;
									<a href="tel:112" className="footer-link footer-link-telephone">
										112
									</a>
								</li>
								<li className='footer-contact'>
								{getAllTextsOfSite('footerContactFour')}&nbsp;
									<a href="tel:+3860801900" className="footer-link footer-link-telephone">
										+386 080 1900
									</a>
								</li>
								<li className='footer-contact'>
								{getAllTextsOfSite('footerContactFive')}&nbsp;
									<a href="tel:+386(1)4210604" className="footer-link footer-link-telephone">
										+386 (1) 421 06 04
									</a>
								</li>
								<li className='footer-contact'>
								{getAllTextsOfSite('footerContactSix')}&nbsp;
									<a href="tel:+38631702765" className="footer-link footer-link-telephone">
										+386 31 702 765
									</a>
								</li>
							</ul>
						</Col>
						<Col>
							<h2 className="footer-title">
							{getAllTextsOfSite('footerTitleCommunity')}
							</h2>
							<Row style={{ margin: '23px -12px 7px ' }}>
								<a href="https://www.facebook.com/groups/ukrainiansinslovenia/?locale=uk_UA" className="intro__btn">
									<div className="footer-social footer-social-facebook">
										<div className="footer-window">
											<div className="footer-container">
												<div className='footer-background-icons-up footer-background-color-icons-facebook'>
													<img src={iconFacebook} alt="icon-facebook" className="footer-icons" />
												</div>
												<div className='footer-background-icons-down footer-background-color-icons-facebook'>
													<img src={iconFacebook} alt="icon-facebook" className="footer-icons" />
												</div>
											</div>
										</div>
									</div>
								</a>
							</Row>
							<Row>
								<a href="https://t.me/ukrainiansinslo" className="intro__btn">
									<div className="footer-social footer-social-telegram">
										<div className="footer-window">
											<div className="footer-container">
												<div className='footer-background-icons-up background-telegram footer-background-color-icons-telegram'>
													<img src={iconTelegram} alt="icon-telegram" className="footer-icons" />
												</div>
												<div className='footer-background-icons-down background-telegram footer-background-color-icons-telegram'>
													<img src={iconTelegram} alt="icon-telegram" className="footer-icons" />
												</div>
											</div>
										</div>
									</div>
								</a>
							</Row>
						</Col>
					</Row>
				</Container>
			</footer >
		</FooterStyled>
	);
};

export default Footer;