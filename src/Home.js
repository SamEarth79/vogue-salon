import React from "react";
import HomeHero from "./HomeHero";
import HomeBook from "./HomeBook";
import Admin_Nav from "./AdminNav";
import HomeNav from "./HomeNav";

function Home() {
	return (
		<div>
			{/* <HomeNav /> */}
			<Admin_Nav />
			<HomeHero />
		</div>
	);
}

export default Home;
