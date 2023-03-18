import React from "react";
import HomeHero from "./HomeHero";
import AdminNav from "./AdminNav";

function Home() {
    return (
        <div>
            {/* <HomeNav /> */}
            <AdminNav />
            <HomeHero />
        </div>
    );
}

export default Home;
