import React from "react";
import { Link } from "react-router-dom";
import illustration from "./images/undraw_barber_-3-uel.svg";

function HomeHero() {
	return (
		<div className="h-screen  bg-DarkBlue text-white flex flex-col items-center lg:justify-evenly justify-center">
			<h1 className="lg:text-8xl  text-5xl z-10 max-sm:relative max-sm:bottom-28">
				Vogue Salon
			</h1>
			<div className="flex lg:space-x-12 z-10 justify-around items-center h-24 max-sm:w-11/12 max-sm:mx-auto">
				<div className="flex flex-col text-right text-lg">
					<p className="font-bold">Welcome to Vogue Salon</p>
					<p className="font-light">
						where grooming meets perfection
					</p>
				</div>
				<div className="h-full w-0.5 bg-white"></div>
				<Link to="/book">
					<button className="bg-LightBlue lg:px-3 lg:py-4 px-2 py-3 rounded-md">
						Book Appointment
					</button>
				</Link>
			</div>
			<img
				src={illustration}
				className="absolute bottom-0 lg:h-4/6 h-2/6"
				alt="yo"
			/>
		</div>
	);
}

export default HomeHero;
