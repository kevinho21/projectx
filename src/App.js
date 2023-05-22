import React 							from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home 							from './components/pages/Home';
import About 							from './components/pages/About';
import Contact 							from './components/pages/Contact';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />}  />
				<Route path="/About" element={<About />}  />
				<Route path="/Contact" element={<Contact />}  />
			</Routes>
		</BrowserRouter>
	);
}

export default App;