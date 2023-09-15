import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import slovenia from '../Source/img/Group 1 (5).svg';

const Styles = styled.div`
  .container {
    position: relative;
  }
  .navbar {
    background: white;
    a,
    .navbar-brand,
    .navbar-nav .nav-link {
      color: #8a8a8a;
		font-weight: 400;
		font-size: 17px;
      &:hover {
        color: #483f3f;
      }
    }
  }
  
 .navbar-nav .nav-link.active {
    color: #483f3f; /* Set the desired blue color for the active link */
  }
  @media (max-width: 767px) {
    .navbar-nav {
      padding-left: 20px;
    }
    .nav-btn {
      position: absolute;
      right: 12px;
      margin-top: -40px;
    }
  }
`;

const NaviBar: React.FunctionComponent<{
	
	getAllTextsOfSite: (key: string) => string;
	handleNavLinkClick: (link: string) => void;
	navLink: string;
	language: string;
	toggleLanguage: () => void;
	
}> = ({ getAllTextsOfSite, handleNavLinkClick, navLink, language, toggleLanguage }) => {
	return (
		<>
			<Styles>
				<Navbar collapseOnSelect expand="md" className="navbar" data-bs-theme="light">
					<Container>
						<Navbar.Brand>
							<a href="#">
								<img src={slovenia} alt="WebDev Blog Logo" width="200" height="60" />
							</a>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link as={Link} to="/" className={navLink === '' ? 'active' : ''} onClick={() => handleNavLinkClick('home')}>
									{getAllTextsOfSite('home')}
								</Nav.Link>
								<Nav.Link as={Link} to="/users" className={navLink === 'ljubljana' ? 'active' : ''} onClick={() => handleNavLinkClick('ljubljana')}>
									{getAllTextsOfSite('ljubljana')}
								</Nav.Link>
								<Nav.Link as={Link} to="/about" className={navLink === 'piran' ? 'active' : ''} onClick={() => handleNavLinkClick('piran')}>
									{getAllTextsOfSite('piran')}
								</Nav.Link>
								<Nav.Link as={Link} to="/about" className={navLink === 'bled' ? 'active' : ''} onClick={() => handleNavLinkClick('bled')}>
									{getAllTextsOfSite('bled')}
								</Nav.Link>
								<Nav.Link as={Link} to="/about" className={navLink === 'ptuj' ? 'active' : ''} onClick={() => handleNavLinkClick('ptuj')}>
									{getAllTextsOfSite('ptuj')}
								</Nav.Link>
							</Nav>
							<Button variant="outline-secondary" onClick={toggleLanguage} className="nav-btn">
								{language === 'ukrainian' ? 'EN' : 'UA'}
							</Button>{' '}
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</Styles>
		</>
	);
};

export default NaviBar;
