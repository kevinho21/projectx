import React 							from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home 							from './components/pages/Home';
import About 							from './components/pages/About';
import Contact 							from './components/pages/Contact';
import Login 							from './components/pages/Login';
import Portfolio 						from './components/pages/Portfolio';
import					 		 			 './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />}  />
				<Route path="/About" element={<About />}  />
				<Route path="/Contact" element={<Contact />}  />
				<Route path="/Login" element={<Login />}  />
				<Route path="/Portfolio" element={<Portfolio />}  />
			</Routes>
		</BrowserRouter>
	);
}

export default App;