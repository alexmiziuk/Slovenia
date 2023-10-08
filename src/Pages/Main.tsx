import React from 'react';
/* import Slider from './Components/Slider'; */
import Intro from '../Components/Intro';
import About from '../Components/About';
import Carousels from '../Components/Carousels';
import Cards from '../Components/Cards';
import Bayan from '../Components/Bayan';


/* import { Container, Row, Col, Card, Button } from 'react-bootstrap'; */
import CustomJumbotron from '../Components/CustomJumbotron';
import ocean from '../src/Source/img/solnca_nad_morem.jpg'


const Main: React.FunctionComponent<{
	getAllTextsOfSite: (key: string) => string;
}> = ({ getAllTextsOfSite}) => {
	

	return (
		<>
			{/* <Slider /> */}
			<Intro getAllTextsOfSite={getAllTextsOfSite} />
			<About getAllTextsOfSite={getAllTextsOfSite} />
			<Carousels getAllTextsOfSite={getAllTextsOfSite} />
			<Cards getAllTextsOfSite={getAllTextsOfSite} />
			<Bayan getAllTextsOfSite={getAllTextsOfSite} />
		</>
	);
};

export default Main;