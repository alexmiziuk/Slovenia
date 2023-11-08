import React from 'react';
import PiranJumbotron from '../Components/PiranJumbotron';
import EmbankmentOfPiran from '../Components/EmbankmentOfPiran';



const Piran: React.FC<{
	getAllTextsOfSite: (key: string) => string;
}> = ({ getAllTextsOfSite }) => {

	return (
		<>
			<PiranJumbotron getAllTextsOfSite={getAllTextsOfSite} />
			<EmbankmentOfPiran getAllTextsOfSite={getAllTextsOfSite}/>
			
		</>
	);
};

export default Piran;