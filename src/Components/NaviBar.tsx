/* import React from 'react'; */
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

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
}> = ({ getAllTextsOfSite, handleNavLinkClick, navLink, language, toggleLanguage }) => {
	const [currentPath, setCurrentPath] = useState<string>('');

	useEffect(() => {
	  // Получаем текущий путь из объекта window.location.pathname
	  const path = window.location.pathname;
 
	  // Устанавливаем текущий путь в состояние компонента
	  setCurrentPath(path);
 
	  // Устанавливаем значение navLink в соответствии с текущим путем
	  if (path === '/') {
		 handleNavLinkClick('home');
	  } else if (path === '/ljubljana') {
		 handleNavLinkClick('ljubljana');
	  } else if (path === '/piran') {
		 handleNavLinkClick('piran');
	  } else if (path === '/bled') {
		 handleNavLinkClick('bled');
	  } else if (path === '/ptuj') {
		 handleNavLinkClick('ptuj');
	  }
	}, [window.location.pathname]);
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
								<Nav.Link as={Link} to="/" className={navLink === '' || currentPath === '/' ? 'active' : ''} onClick={() => handleNavLinkClick('home')}>
									{getAllTextsOfSite('home')}
								</Nav.Link>
								<Nav.Link as={Link} to="/ljubljana" className={navLink === 'ljubljana' || currentPath === '/ljubljana'? 'active' : ''} onClick={() => handleNavLinkClick('ljubljana')}>
									{getAllTextsOfSite('ljubljana')}
								</Nav.Link>
								<Nav.Link as={Link} to="/piran" className={navLink === 'piran' || currentPath === '/piran'? 'active' : ''} onClick={() => handleNavLinkClick('piran')}>
									{getAllTextsOfSite('piran')}
								</Nav.Link>
								<Nav.Link as={Link} to="/bled" className={navLink === 'bled' || currentPath === '/bled' ? 'active' : ''} onClick={() => handleNavLinkClick('bled')}>
									{getAllTextsOfSite('bled')}
								</Nav.Link>
								<Nav.Link as={Link} to="/ptuj" className={navLink === 'ptuj' || currentPath === '/ptuj' ? 'active' : ''} onClick={() => handleNavLinkClick('ptuj')}>
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


/* import React, { useEffect, useState } from 'react';
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
}> = ({ getAllTextsOfSite, handleNavLinkClick, navLink, language, toggleLanguage }) => {
  const [currentPath, setCurrentPath] = useState<string>('');

  useEffect(() => {
    // Получаем текущий путь из объекта window.location.pathname
    const path = window.location.pathname;

    // Устанавливаем текущий путь в состояние компонента
    setCurrentPath(path);

    // Устанавливаем значение navLink в соответствии с текущим путем
    if (path === '/') {
      handleNavLinkClick('home');
    } else if (path === '/ljubljana') {
      handleNavLinkClick('ljubljana');
    } else if (path === '/about') {
      handleNavLinkClick('about');
    } else if (path === '/bled') {
      handleNavLinkClick('bled');
    } else if (path === '/ptuj') {
      handleNavLinkClick('ptuj');
    }
  }, [window.location.pathname]);

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
                <Nav.Link as={Link} to="/" className={navLink === 'home' || currentPath === '/' ? 'active' : ''} onClick={() => handleNavLinkClick('home')}>
                  {getAllTextsOfSite('home')}
                </Nav.Link>
                <Nav.Link as={Link} to="/ljubljana" className={navLink === 'ljubljana' || currentPath === '/ljubljana'? 'active' : ''} onClick={() => handleNavLinkClick('ljubljana')}>
                  {getAllTextsOfSite('ljubljana')}
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className={navLink === 'about' || currentPath === '/about' ? 'active' : ''} onClick={() => handleNavLinkClick('about')}>
                  {getAllTextsOfSite('about')}
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className={navLink === 'bled' || currentPath === '/bled' ? 'active' : ''} onClick={() => handleNavLinkClick('bled')}>
                  {getAllTextsOfSite('bled')}
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className={navLink === 'ptuj' || currentPath === '/ptuj' ? 'active' : ''} onClick={() => handleNavLinkClick('ptuj')}>
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
 */