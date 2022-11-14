import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Admin_Nav from "./AdminNav";
import { adminActions } from "./features/counter/adminSlice";

function MyAppointments() {
	const user = useSelector((state) => state.user.user);
	const appointments = useSelector((state) => state.admin.appointments);
	const dispatch = useDispatch();

	const monthArray = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const minusAppointment = (e, index) => {
		e.preventDefault();
		dispatch(adminActions.removeAppointment(index));
	};

	const doneAppointment = (e, index) => {
		e.preventDefault();
		dispatch(adminActions.FinishAppointments(index));
	};

	return (
		<div className="bg-BG h-screen">
			<Admin_Nav />
			<div className="flex flex-col h-screen items-center justify-center">
				<h1 className="text-7xl text-DarkBlue font-semibold">
					My Appointments
				</h1>
				<div className="Appointments w-8/12 bg-white p-10 mt-10 rounded-2xl ">
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
								if (item.user.email === user.email) {
									return (
										<tr
											key={index}
											className={
												" p-2 m-2 " +
												(item.isDone
													? "bg-slate-400"
													: "")
											}
										>
											<td className="text-base border-b-2 border-DarkBlue relative left-4">
												<span className="p-2">
													{index + 1}
												</span>
											</td>
											<td
												className={
													"text-base border-b-2 border-spacing-y-2 border-DarkBlue " +
													(item.isDone
														? "line-through"
														: "")
												}
											>
												<span className="">
													{item.name}
												</span>
											</td>
											<td
												className={
													"text-base border-b-2 border-DarkBlue " +
													(item.isDone
														? "line-through"
														: "")
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
													{monthArray[
														item.dateTime.slice(
															5,
															7
														)
													].slice(0, 3)}{" "}
													{item.dateTime.slice(11)}{" "}
												</span>
											</td>
											<td className="text-base border-b-2 border-DarkBlue">
												<span
													onClick={(e) =>
														minusAppointment(
															e,
															index
														)
													}
													className="material-symbols-outlined cursor-pointer"
												>
													delete
												</span>
											</td>
										</tr>
									);
								}
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default MyAppointments;
