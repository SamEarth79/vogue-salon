import React from "react";
import { Link } from "react-router-dom";
import illustration from "./images/undraw_barber_-3-uel.svg";

function HomeHero() {
	return (
		<div className="h-screen bg-DarkBlue text-white flex flex-col items-center justify-evenly">
			<h1 className="text-8xl z-10">Vogue Salon</h1>
			<div className="flex space-x-8 z-10 justify-center items-center h-24">
				<div className="flex flex-col text-right text-lg">
					<p className="font-bold">Welcome to Vogue Salon</p>
					<p className="font-light">
						where grooming meets perfection
					</p>
				</div>
				<div className="h-full w-0.5 bg-white"></div>
				<Link to="/book">
					<button className="bg-LightBlue px-3 py-4 rounded-md">
						Book Appointment
					</button>
				</Link>
			</div>
			<img
				src={illustration}
				className="absolute bottom-0 h-4/6"
				alt="yo"
			/>
		</div>
	);
}

export default HomeHero;
