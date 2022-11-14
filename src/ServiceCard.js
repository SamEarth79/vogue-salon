import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serviceActions } from "./features/counter/serviceSlice";

function ServiceCard({ id, service, price, isPressed }) {
	const dispatch = useDispatch();

	const addServiceFn = () => {
		console.log(isPressed);
		// isPressed = !isPressed;
		// console.log(isPressed);
		dispatch(
			serviceActions.addService({
				id: id,
				service: service,
				price: price,
				isPressed: isPressed,
			})
		);
	};

	return (
		<div
			onClick={addServiceFn}
			className={
				"border-2 inline-block px-4 py-2 rounded-3xl my-2 mx-4 cursor-pointer hover:border-DarkBlue " +
				(isPressed ? "bg-LightBlue text-white" : "bg-inherit")
			}
		>
			<p>{service}</p>
		</div>
	);
}

export default ServiceCard;
