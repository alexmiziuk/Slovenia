import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NaviBar from './Components/NaviBar';
import Home from './Home';
import Users from './Users';
import About from './Abouts'; // Correct the import to 'About'
import Footer from './Components/Footer';

import './App.css';

import React, { useState } from 'react';

const App: React.FC = () => {

	const [language, setLanguage] = useState('ukrainian');
	const [navLink, setNavLink] = useState('');

	const toggleLanguage = () => {
		if (language === 'ukrainian') {
			setLanguage('english');
		} else {
			setLanguage('ukrainian');
		}
	};

	const getAllTextsOfSite = (key: string) => {
		const allTextsOfSite: Record<string, { [key: string]: string }> = {
			ukrainian: {
				home: 'Головна',
				ljubljana: 'Любляна',
				piran: 'Піран',
				bled: 'Блед',
				ptuj: 'Птуй',
				introTitle: 'Ласкаво просимо до чарівної Словенії -',
				introSubTitle: 'країни, де поєднуються краса природи, історія та гостинність!',
				introButton: 'ВІРТУАЛЬНИЙ ТУР',
				aboutTitle: 'О Словенії',
				aboutParagraphOne: 'Словенія - невелика країна, розташована у Центральній Європі. Вона має площу приблизно 20 273 квадратних кілометрів, що робить її однією з найменших країн у Європі.',
				aboutParagraphTwo: 'Столицею Словенії є Любляна - красиве і історичне місто, розташоване у центрі країни. Це місто відоме своїм середньовічним старим центром з замком і багатьма мостами через річку Любляниця.',
				aboutParagraphThree: 'Словенія має приблизно 2,1 мільйона жителів. Важливими містами, крім Любляни, є Марібор, Целе, Копер, Крань і Ново Место. Кожне з цих міст має свою унікальну історію та культурну спадщину, приваблюючи туристів з різних куточків світу.',
				aboutParagraphFour: 'Словенія, зі своєю невеликою площею, вражає своєю природною красою, панорамними горами, мальовничими озерами і чарівними селами. Багата культурна спадщина та дружність місцевого населення роблять Словенію привабливим місцем для відвідування та дослідження.',
				carouselTitle: 'Словенія: Віртуальний тур',
				cardsTitle: 'Життя в Словенії',
				cardsBtn: 'ДІЗНАТИСЯ.....',
				cardOneTitle: 'Середня зарплата',
				cardOneModalText: 'Плата за працю в Словенії: У 2023 році середня брутто зарплата становить 2 132,58 євро на місяць. Після урахування всіх обов`язкових відрахувань у розпорядженні місцевих працівників залишається 1 391,65 євро, тобто чистий дохід. Найтиповіший дохід складає €25,218 EUR на рік. Життя та оренда: середня плата за оренду 1-кімнатної квартири в Словенії становить близько €500 на місяць. Варто відзначити, що ціни на оренду можуть відрізнятися в залежності від стану квартири, розташування та інших факторів. Наприклад, в столиці Любляні ціни можуть бути вищими.',
				cardTwoTitle: 'Медичне обслуговування',
				cardTwoModalText: 'Вартість лікування в Словенії є високою, тому більшість громадян отримують базову медичну страховку, коли влаштовуються на роботу. Однак, якщо громадянин хоче отримати максимальний пакет медичних послуг, він має додатково оплачувати понад 30 євро на місяць зі своїх доходів. Непрацюючі громадяни можуть отримати базову медичну страховку через державну систему соціального забезпечення. Неповнолітнім дітям держава надає медичну страховку незалежно від того, працюють їх батьки чи ні. На жаль, біженці не мають базового медичного пакету послуг, для них діє лише правило `ургентний випадок`. Якщо такий випадок настане, держава оплатить всі витрати, пов`язані з лікуванням. Щоб отримати медичний пакет, біженцям, як і громадянам Словенії, необхідно влаштуватися на офіційну роботу. Однак, навіть для працевлаштованих громадян пошук сімейного лікаря може бути викликом, оскільки їх кількість обмежена, і іноді доводиться шукати лікаря в іншому місті.',
				cardThreeTitle: 'Навчаняя і освіта',
				cardThreeModalText: 'В Словенії дошкільне навчання (дитячі садки) є платним. В середньому, вартість навчання в дитячому садку становить близько 200 євро на місяць, але шкільна освіта (початковий рівень - 9 класів, середня школа - 4 роки) і навчання в вищих учбових закладах надається безкоштовно. Батьки лише оплачують шкільне приладдя та обіди дітей у школах. У школі дітей не перенапружують. Вартість вищої освіти (коледжі, ВНЗ) для іноземців в Словенії вважається однією з найнижчих у Європі. У державних університетах та інститутах у столиці вартість навчання коливається від 3 до 4 тисяч євро, а в приватних інститутах - від 1 до 2 тисяч євро. Іноземним студентам надають житло у гуртожитку за ціною до 150 євро на місяць.',
				cardFourTitle: 'Перспективи для емігранта',
				cardFourModalText: 'Словенія не є ідеальним варіантом для іноземців, які шукають роботу, оскільки і місцевим мешканцям не завжди легко знайти вигідне працевлаштування, а зарплати тут нижчі, ніж у Німеччині. Багато молодих словенців від`їжджають працювати до Австрії та Німеччини, де є більше можливостей для розвитку. Словенія більше підходить для відпочинку та для бізнесменів з країн колишнього Радянського Союзу, де можна відкрити фірму порівняно з невеликими витратами та отримати вид на проживання. Однак, для кар`єрного зростання та високих зарплат, іноземцям краще розглянути інші європейські країни з більшими можливостями працевлаштування.',
				cardFiveTitle: 'Пенсіоренри в Словенії',
				cardFiveModalText: 'Пенсіонери в Словенії - щасливі люди, їх часто можна побачити в кафе з чашкою кави. На відміну від українських пенсіонерів, у багатьох з них є машини. Держава надає їм всебічну підтримку. Крім цього, їх оточує одна з найчистіших екологій у Європі: чисте гірське повітря, чисті озера та море, що позитивно впливає на їхнє довголіття. Середня тривалість життя в Словенії становить 78,6 років у чоловіків і 84,1 року у жінок. Гарантована мінімальна пенсія в 2023 році становить 500 євро, а середня - 1 121,40 євро. Хоча це порівняно небагато з іншими країнами Європи, проте пенсіонери мають багато соціальних пільг. Словенія є членом Європейського Союзу, тому пенсіонери мають право на пенсію в будь-якій країні ЄС. Словенія є привабливим місцем для пенсіонерів з усього світу.',
				cardSixTitle: 'Вивчення мови',
				cardSixModalText: 'Словенська мова є однією зі слов`янських мов і належить до південнослов`янської групи. Вона виникла з діалектів слов`янських племен, що населяли територію сучасної Словенії та прилеглих регіонів. Після отримання Словенією незалежності в 1991 році словенська мова стала державною та отримала офіційний статус. Вона активно використовується в освітній, медичній, медіа та державних сферах. Для українців вивчення словенської мови може бути спрощеним завдяки багатому спільному словниковому запасу між цими мовами. Це сприяє більш швидкому розумінню та освоєнню словенської мови порівняно з іншими мовами, наприклад, з романської групи.',
				bayanTitle: 'Національні страви Словенії',
				bayanOne: ' - свиняча ковбаса, яка отримала статус «шедевр національного значення». Щороку у громаді Медводі проходить фестиваль краньської ковбаси. Традиційно цю страву подають з кислою капустою.',
				bayanTwo: ' – в`ялений свинячий окіст. Словенці вважають, що вітер бору та піранська сіль особливим чином впливають на м`ясо, надаючи йому неповторного смаку. Краський пршут дозріває 12-16 місяців і набуває рубіново-червоного кольору.',
				bayanThree: '– половинки звареної в мундирі картоплі, намазані сирною пастою. На честь цієї нехитрої страви у місті Бовець щороку проводять фестиваль «Чомпарская нічь».',
				bayanFour: ' – суп із квашеної або свіжої капусти, картоплі, квасолі, сала, перцю та часнику. У кожному регіоні свій набір спецій для йоти, тому цей суп можна куштувати у різних містах.',
				bayanFive: ' – рулет із дріжджового тіста. Традиційно його начиняють горіхами та маком, але в кожної господині свій варіант начинки. На ярмаркові прилавки часто викладають потици вагою кілька кілограм, а деяких кафе роблять мініатюрні потицы.',
				bayanSix: ' – дев`ятишаровий пиріг з начинкою з яблук, маку, сиру з цукром та ваніллю, родзинок та горіхів, який готують зазвичай на свята. Схожий пиріг печуть у Сербії та Хорватії, але гібаниця з Прекмур`я найскладніша і найбагатша.',
				footerText: 'Цей веб-сайт створений з метою ознайомлення з культурною спадщиною Словенії, її звичаями, архітектурою та природними пам`ятками. Він також є частиною мого портфоліо, що допоможе познайомити потенційного замовника або роботодавця з моїми можливостями та навичками.',
				footerTitleOne: 'Корисні посилання',
				footerLinkOne: 'Посольство України в Словенії',
				footerLinkTwo: 'Продаж авто в Словенії',
				footerLinkThree: 'Оренда житла в Словенії',
				footerLinkFour: 'Розклад міжміських автобусів',
				footerLinkFive: 'Розклад поїздів',
				footerTitleTwo: 'Контакти',
				footerContactOne: 'Поліція:',
				footerContactTwo: 'Анонімний телефон поліції:',
				footerContactThree: 'Швидка допомога і пожежна:',
				footerContactFour: 'Cкарги та пропозиції (для туристів):',
				footerContactFive: 'Посольство України у Словенії:',
				footerContactSix: 'Гаряча лінія Посольства:',
				footerTitleCommunity: 'Спільноти українців',
			},

			english: {
				home: 'Home',
				ljubljana: 'Ljubljana',
				piran: 'Piran',
				bled: 'Bled',
				ptuj: 'Ptuj',
				introTitle: 'Welcome to the charming Slovenia -',
				introSubTitle: 'a country where the beauty of nature, history and hospitality are combined!',
				introButton: 'VIRTUAL TOUR',
				aboutTitle: 'About Slovenia',
				aboutParagraphOne: 'Slovenia is a small country located in Central Europe. It has an area of approximately 20,273 square kilometres, making it one of the smallest countries in Europe.',
				aboutParagraphTwo: 'The capital of Slovenia is Ljubljana, a beautiful and historic city located in the centre of the country. The city is known for its medieval old centre with a castle and many bridges over the Ljubljanica River.',
				aboutParagraphThree: 'Slovenia has approximately 2.1 million inhabitants. Other important cities besides Ljubljana are Maribor, Celje, Koper, Kranj and Novo Mesto. Each of these cities has its own unique history and cultural heritage, attracting tourists from all over the world.',
				aboutParagraphFour: 'Slovenia, with its small size, impresses with its natural beauty, panoramic mountains, picturesque lakes and charming villages. The rich cultural heritage and friendliness of the local population make Slovenia an attractive place to visit and explore.',
				carouselTitle: 'Slovenia: A virtual tour',
				cardsTitle: 'Life in Slovenia',
				cardsBtn: 'LEARN MORE...',
				cardOneTitle: 'Average salary',
				cardOneModalText: 'Remuneration for work in Slovenia: In 2023, the average gross salary is 2,132.58 euros per month. After taking into account all mandatory deductions, local workers have 1,391.65 EUR at their disposal, i.e. net income. The most typical income is €25,218 EUR per year. Living and rent: The average rent for a 1-room apartment in Slovenia is about €500 per month. It is worth noting that rental prices may vary depending on the condition of the apartment, location and other factors. For example, prices may be higher in the capital Ljubljana.',
				cardTwoTitle: 'Medical care',
				cardTwoModalText: 'The cost of medical treatment in Slovenia is high, so most citizens receive basic health insurance when they get a job. However, if a citizen wants to receive the maximum package of medical services, he or she must pay an additional 30 euros per month from his or her income. Unemployed citizens can obtain basic health insurance through the state social security system. The state provides health insurance to minor children regardless of whether their parents are working or not. Unfortunately, refugees do not have a basic medical package, only the "emergency case" rule applies to them. If such a case occurs, the state will pay all the costs associated with treatment. In order to receive a medical package, refugees, like Slovenian citizens, need to get an official job. However, even for employed citizens, finding a family doctor can be a challenge, as their number is limited, and sometimes you have to look for a doctor in another city.',
				cardThreeTitle: 'Teaching and education',
				cardThreeModalText: 'In Slovenia, pre-school education (kindergartens) is paid. On average, the cost of kindergarten education is about 200 euros per month, but school education (primary level - 9 grades, secondary school - 4 years) and higher education is free of charge. Parents only pay for school supplies and lunches for their children at school. Children are not overworked at school. The cost of higher education (colleges and universities) for foreigners in Slovenia is considered one of the lowest in Europe. In public universities and institutes in the capital, the tuition fee ranges from 3 to 4 thousand euros, and in private institutes - from 1 to 2 thousand euros. Foreign students are provided with dormitory accommodation at a price of up to 150 euros per month.',
				cardFourTitle: 'Prospects for an emigrant',
				cardFourModalText: 'Slovenia is not an ideal option for foreigners looking for work, since it is not always easy for locals to find profitable employment, and salaries here are lower than in Germany. Many young Slovenes go to work in Austria and Germany, where there are more opportunities for development. Slovenia is more suitable for recreation and for businessmen from the countries of the former Soviet Union, where it is possible to open a company at relatively low cost and obtain a residence permit. However, for career growth and high salaries, foreigners should consider other European countries with more employment opportunities.',
				cardFiveTitle: 'Pensioners in Slovenia',
				cardFiveModalText: 'Pensioners in Slovenia are happy people, and you can often see them in cafes with a cup of coffee. Unlike Ukrainian pensioners, many of them have cars. The state provides them with comprehensive support. In addition, they are surrounded by one of the cleanest environments in Europe: fresh mountain air, clean lakes and the sea, which has a positive impact on their longevity. The average life expectancy in Slovenia is 78.6 years for men and 84.1 years for women. The guaranteed minimum pension in 2023 is 500 euros, and the average pension is 1,121.40 euros. Although this is relatively low compared to other European countries, pensioners enjoy many social benefits. Slovenia is a member of the European Union, so pensioners are entitled to a pension in any EU country. Slovenia is an attractive destination for retirees from all over the world.',
				cardSixTitle: 'Language learning',
				cardSixModalText: 'The Slovenian language is one of the Slavic languages and belongs to the South Slavic group. It originated from the dialects of the Slavic tribes that inhabited the territory of modern Slovenia and the surrounding regions. After Slovenia gained its independence in 1991, the Slovenian language became the official language and was granted an official status. It is actively used in the educational, medical, media and government sectors. For Ukrainians, learning Slovenian can be simplified due to the rich common vocabulary between these languages. This contributes to a faster understanding and mastery of the Slovenian language as compared to other languages, for example, those of the Romance group.',
				bayanTitle: 'National dishes of Slovenia',
				bayanOne: ' is a pork sausage that has been awarded the status of a masterpiece of national importance. Every year, the Medvodi community hosts a festival of Kranjska klobasa. Traditionally, this dish is served with sauerkraut.',
				bayanTwo: ' is a dried pork ham. The Slovenes believe that the boron wind and Piran salt have a special effect on the meat, giving it a unique taste. It takes 12-16 months for the krajski pršut to mature and turn ruby red.',
				bayanThree: ' are halves of jacketed potatoes smeared with cheese paste. In honour of this simple dish, the town of Bovec annually hosts the Čompe s skuto festival.',
				bayanFour: ' is a soup made from sauerkraut or fresh cabbage, potatoes, beans, bacon, pepper and garlic. Each region has its own set of spices for jota, so this soup can be tasted in different cities.',
				bayanFive: ' is a roll made from yeast dough. Traditionally, it is filled with nuts and poppy seeds, but each hostess has her own version of the filling. Potica stalls at fairs often feature several kilogrammes of potica, and some cafes make miniature potica.',
				bayanSix: ' is a nine-layer pie filled with apples, poppy seeds, cottage cheese with sugar and vanilla, raisins and nuts, usually prepared for holidays. A similar pie is baked in Serbia and Croatia, but gibanica from Prekmurje is the most complex and rich.',
				footerText: 'This website was created to introduce the cultural heritage of Slovenia, its customs, architecture and natural attractions. It is also a part of my portfolio, which will help to introduce my capabilities and skills to a potential client or employer.',
				footerTitleOne: 'Useful links',
				footerLinkOne: 'Embassy of Ukraine in Slovenia',
				footerLinkTwo: 'Sale of a car in Slovenia',
				footerLinkThree: 'Renting a House in Slovenia',
				footerLinkFour: 'Intercity bus timetable',
				footerLinkFive: 'Train schedule',
				footerTitleTwo: 'Contacts',
				footerContactOne: 'Police:',
				footerContactTwo: 'Anonymous police phone number:',
				footerContactThree: 'An ambulance and a fire brigade:',
				footerContactFour: 'Complaints and suggestions (for tourists):',
				footerContactFive: 'Embassy of Ukraine in Slovenia:',
				footerContactSix: 'The Embassy`s hotline:',
				footerTitleCommunity: 'Communities of Ukrainians',
			},
		};

		return allTextsOfSite[language][key];
	};

	const handleNavLinkClick = (link: string) => {
		setNavLink(link === 'home' ? '' : link);
	};

	return (
		<>
			<Router>
				<NaviBar getAllTextsOfSite={getAllTextsOfSite}
					toggleLanguage={toggleLanguage}
					handleNavLinkClick={handleNavLinkClick}
					navLink={navLink} language={language} />
				<Routes>
					<Route path="/" element={<Home getAllTextsOfSite={getAllTextsOfSite} />} />
					<Route path="/users" element={<Users />} />
					<Route path="/about" element={<About />} /> {/* Use 'About' component here */}
				</Routes>
			</Router>
			<Footer getAllTextsOfSite={getAllTextsOfSite} />
		</>
	);
};

export default App;

