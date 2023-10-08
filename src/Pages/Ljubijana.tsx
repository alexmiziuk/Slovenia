import React from 'react';
import { Container } from 'react-bootstrap';
import CustomJumbotron from '../Components/CustomJumbotron';


const Ljubljana: React.FC<{
	getAllTextsOfSite: (key: string) => string;
}> = ({ getAllTextsOfSite}) => {
	return (
		<CustomJumbotron getAllTextsOfSite = {getAllTextsOfSite} />
	);
};

export default Ljubljana;