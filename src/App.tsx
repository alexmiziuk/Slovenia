import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NaviBar from './Components/NaviBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Users from './Users';
import Abouts from './Abouts';

import Footer from './Components/Footer';


const App: React.FC = () => {
	return (
		<>
	  <Router>
		 <NaviBar />
		 <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/users" element={<Users />} />
			<Route path="/about" element={<Abouts />} /> 
		 </Routes>
		</Router>
			{/* <Footer /> */}
			</>
	);
 }

export default App;
