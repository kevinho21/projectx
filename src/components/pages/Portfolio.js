import React            from "react";
import NavigationBar    from "../molecules/NavigationBar";

const Portfolio = () => {
    const handleSearch = (searchValue) => {
		// Perform filtering based on the searchValue
		// Update the filtered content on the page
	};

	return (
		<div>
			<NavigationBar onSearch={handleSearch}/>
		</div>
	);
}

export default Portfolio;