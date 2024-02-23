import React from 'react';
import PiranJumbotron from '../Components/PiranJumbotron';
import EmbankmentOfPiran from '../Components/EmbankmentOfPiran';
import FortressWall from '../Components/FortressWall';
import PiranOld from '../Components/PiranOld';



const Piran: React.FC<{
	getAllTextsOfSite: (key: string) => string;
}> = ({ getAllTextsOfSite }) => {

	return (
		<>
			<PiranJumbotron getAllTextsOfSite={getAllTextsOfSite} />
			<EmbankmentOfPiran getAllTextsOfSite={getAllTextsOfSite} />
			<FortressWall getAllTextsOfSite={getAllTextsOfSite}/>
			<PiranOld getAllTextsOfSite={getAllTextsOfSite}/>
		</>
	);
};

export default Piran;