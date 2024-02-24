import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
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
    color: #483f3f;
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
}> = ({ getAllTextsOfSite, navLink, language, toggleLanguage }) => {
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="md" className="navbar" data-bs-theme="light">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img src={slovenia} alt="WebDev Blog Logo" width="200" height="60" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" className={navLink === 'home' ? 'active' : ''}>
                  {getAllTextsOfSite('home')}
                </Nav.Link>
                <Nav.Link as={NavLink} to="/ljubljana" className={navLink === 'ljubljana' ? 'active' : ''}>
                  {getAllTextsOfSite('ljubljana')}
                </Nav.Link>
                <Nav.Link as={NavLink} to="/piran" className={navLink === 'piran' ? 'active' : ''}>
                  {getAllTextsOfSite('piran')}
                </Nav.Link>
                <Nav.Link as={NavLink} to="/bled" className={navLink === 'bled' ? 'active' : ''}>
                  {getAllTextsOfSite('bled')}
                </Nav.Link>
                <Nav.Link as={NavLink} to="/ptuj" className={navLink === 'ptuj' ? 'active' : ''}>
                  {getAllTextsOfSite('ptuj')}
                </Nav.Link>
              </Nav>
              <Button variant="outline-secondary" onClick={toggleLanguage} className="nav-btn">
                {language === 'ukrainian' ? 'UA' : 'EN'}
              </Button>{' '}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
};

export default NaviBar;