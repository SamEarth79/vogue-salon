import React from "react";
import { useSelector } from "react-redux";
import Admin from "./Admin";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeBook from "./HomeBook";
import ThankYou from "./ThankYou";
import MyAppointments from "./MyAppointments";

function App() {
	const user = useSelector((state) => state.user.user);
	console.log(user);
	console.log("yo");

	return (
		// <div>
		// <LogIn />
		// 	{/* {!user && <SignUp />} */}
		// 	{/* {user && <Admin />} */}
		// </div>
		// <Admin />
		// <Home />

		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route exact path="/signup" element={<SignUp />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/admin" element={user ? <Admin /> : <Home />} />
				<Route path="/book" element={user ? <HomeBook /> : <LogIn />} />
				<Route
					path="/thankyou"
					element={user ? <ThankYou /> : <Home />}
				/>
				<Route
					path="/myAppointments"
					element={user ? <MyAppointments /> : <Home />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
