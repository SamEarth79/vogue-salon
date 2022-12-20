import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./features/counter/userSlice";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";

function LogIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	let noUserFound = false;

	const logIn = (e) => {
		e.preventDefault();

		auth.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				console.log("userAuth");
				console.log(userAuth.email);
				console.log(userAuth.uid);
				dispatch(
					authActions.login({
						email: email,
						uid: userAuth.uid,
					})
				);
			})
			.then(() => {
				if (email === "admin1@gmail.com" && password === "admin1")
					navigate("/admin");
				else navigate("/book");
			})
			.catch((err) => {
				if (err.code === "auth/user-not-found") {
					noUserFound = true;
					alert("No user record found. Please sign up first.");
				} else {
					alert(err.message);
				}
			});
	};

	return (
		<div className="font-Montserrat font-medium h-screen flex max-sm:flex-col lg:overflow-hidden">
			{/* Left */}
			<div className="flex flex-col justify-around h-full lg:w-1/2 max-sm:w-full lg:pl-8">
				<h1 className="font-light text-xl lg:absolute top-10 px-8">
					<Link to="/">Vogue Salon</Link>
				</h1>
				<div className="flex flex-col justify-around w-8/12 mx-auto h-1/2 max-sm:w-11/12">
					<div className="">
						<h1 className="text-3xl font-semibold">
							Welcome back to the salon
						</h1>
						<p className="text-slate-400 mt-2">
							We are delighted to have you back
						</p>
					</div>
					<div className="mt-10">
						<p>First create an appointment as a user</p>
						<p className="text-sm text-gray-600">
							email: users1@gmail.com pwd: users1
						</p>
						<p>Then manage appointments as an admin</p>
						<p className="text-sm text-gray-600">
							email: admin1@gmail.com pwd: admin1
						</p>
					</div>
					<div className="w-full mt-12">
						<form
							className="flex flex-col max-sm:items-center"
							onSubmit={logIn}
						>
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="border-b-2 w-3/4 mb-6 font-normal py-1 focus:outline-none"
								type="Email"
								placeholder="Email"
							/>
							<input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="border-b-2 w-3/4 mb-6 font-normal py-1 focus:outline-none"
								type="Password"
								placeholder="Password"
							/>
							<button
								className="bg-black text-white py-2 rounded-md font-normal mt-4 w-3/4 active:bg-slate-800"
								type="submit"
							>
								Log In
							</button>
						</form>
						<p className="mt-4">
							Don't have an account?{" "}
							<strong>
								<Link to="/signup">Sign up</Link>
							</strong>
						</p>
					</div>
				</div>
			</div>
			{/* Right */}
			<div className="lg:w-1/2 max-sm:mt-6 max-sm:p-2 max-sm:mx-auto">
				<img
					className="object-cover h-full  max-sm:w-52 max-sm:h-52 max-sm:rounded-full"
					src="https://images.unsplash.com/photo-1621645539688-b4b6a1c3699d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
					alt="cover"
				/>
			</div>
		</div>
	);
}

export default LogIn;
