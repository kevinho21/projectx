import React				from 'react';
import NavigationBar 		from '../molecules/NavigationBar';
import Popup 				from '../molecules/Popup';

const Home = () => {
	const handleSearch = (searchValue) => {
		// Perform filtering based on the searchValue
		// Update the filtered content on the page
	};

	return (
		<div>
			<NavigationBar onSearch={handleSearch}/>
			<h2>Home</h2>
			<Popup />
		</div>
	);
}

export default Home;