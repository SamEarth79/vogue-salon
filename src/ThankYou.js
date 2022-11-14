import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./features/counter/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ThankYou() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user.user);

	const logout = async (e) => {
		e.preventDefault();
		await dispatch(authActions.logout());
		navigate("/");
	};

	const goBack = async (e) => {
		e.preventDefault();
		navigate("/myAppointments");
	};

	return (
		<div className="h-screen bg-BG flex flex-col justify-evenly items-center">
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-9xl font-semibold text-DarkBlue">
					Thank you
				</h1>
				<h2 className="text-4xl text-DarkBlue">
					for booking at Vogue Salon
				</h2>
				<h3 className="pt-10 italic text-xl font-normal">
					We'll be waiting for you
				</h3>
			</div>
			<div className="space-x-10">
				<button
					onClick={logout}
					className="bg-LightBlue text-white px-2 py-1 rounded-lg active:bg-blue-800"
				>
					Logout
				</button>
				<button
					onClick={goBack}
					className="bg-LightBlue text-white px-2 py-1 rounded-lg active:bg-blue-800"
				>
					My Appointments
				</button>
			</div>
		</div>
	);
}

export default ThankYou;
