import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./features/counter/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function HomeNav() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user.user);

	const login = (e) => {
		e.preventDefault();
		navigate("/login");
	};

	return (
		<div className="bg-white flex justify-between px-16 py-8 fixed w-screen">
			<div className="logo">
				<h1 className="font-light text-xl">Vogue Salon</h1>
			</div>

			<div className="">
				<div className="">
					<button
						onClick={login}
						className="bg-LightBlue text-white px-2 py-1 rounded-lg active:bg-blue-800"
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
}

export default HomeNav;
