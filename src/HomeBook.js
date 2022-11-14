import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Admin_Nav from "./AdminNav";
import { adminActions } from "./features/counter/adminSlice";
import { serviceActions } from "./features/counter/serviceSlice";
import ServiceCard from "./ServiceCard";
import { services } from "./ServicesList";

function HomeBook() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [dateTime, setDateTime] = useState(new Date());

	const servicesCart = useSelector((state) => state.service.cart);
	const cartBill = useSelector((state) => state.service.bill);
	const user = useSelector((state) => state.user.user);

	const navigate = useNavigate();

	useEffect(() => {
		console.log(servicesCart);
	}, [servicesCart]);

	const dispatch = useDispatch();
	const clearServices = () => {
		dispatch(serviceActions.removeServices());
		dispatch(adminActions.deleteAppointment());
		console.log("cleared");
	};

	const appointments = useSelector((state) => state.admin.appointments);

	useEffect(() => {
		console.log(appointments);
		const sendData = async () => {
			await fetch(
				"https://vouge-salon-default-rtdb.asia-southeast1.firebasedatabase.app/appointments.json",
				{
					method: "PUT",
					body: JSON.stringify(appointments),
				}
			);
		};
		sendData();
	}, [appointments]);

	console.log("User");
	console.log(user.uid);
	const addAppointment = async (e) => {
		e.preventDefault();
		await dispatch(
			adminActions.addAppointment({
				name: name,
				number: phone,
				dateTime: dateTime,
				isDone: false,
				user: user,
			})
		);

		navigate("/thankyou");
	};

	return (
		<div className="flex flex-col space-y-10">
			<Admin_Nav />
			<div className="bg-BG h-screen max-h-screen flex flex-col p-20 items-center justify-evenly">
				<h1 className="float-left text-DarkBlue text-6xl font-normal">
					Schedule an Appointment
				</h1>
				<div className="bg-white w-10/12 rounded-2xl mx-auto p-8 text-lg flex flex-col space-y-10">
					<div className="">
						<p className="inline">Hey, my name is </p>
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							type="text"
							placeholder="Name"
							className="bg-inherit border-b-2 border-DarkBlue text-center mx-3 focus:outline-none placeholder:text-gray-400 text-LightBlue"
						/>
						<p className="inline">and you can contact me at </p>
						<input
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							type="text"
							placeholder="Ph. no"
							className="bg-inherit border-b-2 border-DarkBlue text-center mx-3 focus:outline-none placeholder:text-gray-400 text-LightBlue"
						/>
					</div>
					<div className="flex space-x-4">
						<p className="inline">I'll make it to the salon at </p>
						<input
							value={dateTime}
							onChange={(e) => setDateTime(e.target.value)}
							type="datetime-local"
							placeholder="Add datetime local"
						/>
					</div>
					<div className="">
						<p>I would like to get</p>
						<div className="mt-6">
							{services.map((service, index) => (
								<ServiceCard
									key={index}
									id={service.id}
									service={service.service}
									price={service.price}
									isPressed={
										servicesCart.findIndex(
											(item) => item.id === service.id
										) >= 0
											? true
											: false
									}
								/>
							))}
						</div>
					</div>
					<div
						onClick={clearServices}
						className="inline cursor-pointer"
					>
						Clear
					</div>
					<div className="">Your bill is {cartBill}</div>
				</div>
				<div
					className="bg-DarkBlue px-4 py-3 text-xl rounded-lg text-white cursor-pointer"
					onClick={addAppointment}
				>
					Book Appointment
				</div>
			</div>
		</div>
	);
}

export default HomeBook;
