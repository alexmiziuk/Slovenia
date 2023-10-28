import React from 'react';
import CustomJumbotron from '../Components/CustomJumbotron';
import CastleOfLjubljana from '../Components/CastleOfLjubljana';
import Ljubljanica from '../Components/Ljubljanica';
import LjubljanaOldCity from '../Components/LjubljanaOldCity';


const Ljubljana: React.FC<{
	getAllTextsOfSite: (key: string) => string;
}> = ({ getAllTextsOfSite }) => {
	return (
		<>
			<CustomJumbotron getAllTextsOfSite={getAllTextsOfSite} />
			<CastleOfLjubljana getAllTextsOfSite={getAllTextsOfSite} />
			<Ljubljanica getAllTextsOfSite={getAllTextsOfSite} />
			<LjubljanaOldCity getAllTextsOfSite={getAllTextsOfSite}/>
		</>
	);
};

export default Ljubljana;