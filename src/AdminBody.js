import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminActions } from "./features/counter/adminSlice";

function AdminBody() {
	const [currTime, setCurrTime] = useState("");
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [dateTime, setDateTime] = useState(new Date());
	const monthArray = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"June",
		"July",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const dispatch = useDispatch();
	const appointments = useSelector((state) => state.admin.appointments);
	const user = useSelector((state) => state.user.user);

	useEffect(() => {
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

	const plusAppointment = (e) => {
		e.preventDefault();

		console.log("User" + { user });
		console.log(dateTime);
		if (name === "" || number === "")
			alert("Name or phone number cannot be empty");
		else if (dateTime === null)
			alert(
				"Please click and mention all the fields of date and time(including AM and PM)"
			);
		else {
			dispatch(
				adminActions.addAppointment({
					name: name,
					number: number,
					dateTime: dateTime,
					isDone: false,
					user: user,
				})
			);

			setName("");
			setNumber("");
			setDateTime(null);
		}
	};

	const minusAppointment = (e, index) => {
		e.preventDefault();
		dispatch(adminActions.removeAppointment(index));
	};

	const doneAppointment = (e, index) => {
		e.preventDefault();
		dispatch(adminActions.FinishAppointments(index));
	};

	useEffect(() => {
		setInterval(() => {
			let dateTimeVar = new Date();
			let minutesLength = dateTimeVar.getMinutes().toString().length;
			let timeSplitter = minutesLength === 1 ? ":0" : ":";
			setCurrTime(
				dateTimeVar.getDate() +
					" " +
					monthArray[dateTimeVar.getMonth()] +
					" " +
					dateTimeVar.getHours() +
					timeSplitter +
					dateTimeVar.getMinutes()
			);
		}, 1000);
	});

	return (
		<div className="flex flex-col items-center justify-around pt-20 max-sm:pt-8">
			<div className="heading flex flex-col items-center">
				<h1 className="lg:text-8xl text-6xl text-center text-DarkBlue">
					{currTime}
				</h1>
				<p className="lg:pt-4 pt-6 lg:text-xl text-lg italic">
					Have a great day
				</p>
			</div>

			<div className="Appointments lg:w-8/12 w-11/12 bg-white p-10 my-10 rounded-2xl overflow-x-auto">
				<table className="mx-auto">
					<thead id="thead">
						<td className="text-xl text-LightBlue font-semibold"></td>
						<td className="text-xl text-LightBlue font-semibold">
							Name
						</td>
						<td className="text-xl text-LightBlue font-semibold">
							Number
						</td>
						<td className="text-xl text-LightBlue font-semibold">
							Time
						</td>
					</thead>
					<tbody>
						{appointments.map((item, index) => {
							return (
								<tr
									key={index}
									className={
										" p-2 m-2 " +
										(item.isDone ? "bg-slate-400" : "")
									}
								>
									<td className="text-base border-b-2 border-DarkBlue relative left-4">
										<span className="p-2">{index + 1}</span>
									</td>
									<td
										className={
											"text-base border-b-2 border-spacing-y-2 border-DarkBlue " +
											(item.isDone ? "line-through" : "")
										}
									>
										<span className="">{item.name}</span>
									</td>
									<td
										className={
											"text-base border-b-2 border-DarkBlue " +
											(item.isDone ? "line-through" : "")
										}
									>
										<span>{item.number}</span>
									</td>
									<td className="text-base border-b-2 border-DarkBlue">
										<span>
											{item.dateTime.slice(8, 10)}
											<span className="text-xs align-super">
												th
											</span>{" "}
											{
												monthArray[
													item.dateTime.slice(5, 7) -
														1
												]
											}{" "}
											{item.dateTime.slice(11)}{" "}
										</span>
									</td>
									<td className="text-base border-b-2 border-DarkBlue">
										<span
											onClick={(e) =>
												doneAppointment(e, index)
											}
											className="material-symbols-rounded cursor-pointer"
										>
											done
										</span>
									</td>
									<td className="text-base border-b-2 border-DarkBlue">
										<span
											onClick={(e) =>
												minusAppointment(e, index)
											}
											className="material-symbols-outlined cursor-pointer"
										>
											delete
										</span>
									</td>
								</tr>
							);
						})}
						<tr>
							<td></td>
							<td>
								<input
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="py-1 px-2 bg-inherit outline-1 border-b-2 border-DarkBlue outline-none"
									type="text"
									placeholder="Name"
								/>
							</td>
							<td>
								<input
									value={number}
									onChange={(e) => setNumber(e.target.value)}
									className="py-1 px-2 bg-inherit outline-1 border-b-2 border-DarkBlue outline-none"
									type="number"
									placeholder="Number"
								/>
							</td>
							<td>
								<div className="flex space-x-4">
									{/* <label className="text-slate-400 pr-1">
										Date and Time
									</label> */}
									<input
										value={dateTime}
										onChange={(e) =>
											setDateTime(e.target.value)
										}
										type="datetime-local"
										placeholder="Add datetime local"
									/>
									{/* {dateTime} */}
									<span
										onClick={plusAppointment}
										className="cursor-pointer material-symbols-outlined"
									>
										add
									</span>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default AdminBody;
