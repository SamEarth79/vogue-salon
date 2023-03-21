import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";
import { adminActions } from "./features/counter/adminSlice";
import { serviceActions } from "./features/counter/serviceSlice";
import ServiceCard from "./ServiceCard";
import { services } from "./ServicesList";

function HomeBook() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [dateTime, setDateTime] = useState("");

    const servicesCart = useSelector((state) => state.service.cart);
    const cartBill = useSelector((state) => state.service.bill);
    const user = useSelector((state) => state.user.user);

    const navigate = useNavigate();

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

    const goBack = async (e) => {
        e.preventDefault();
        navigate("/myAppointments");
    };

    console.log("User");
    console.log(user.uid);
    console.log("Datetime");
    console.log(dateTime);
    const addAppointment = async (e) => {
        e.preventDefault();
        console.log(dateTime);
        console.log(name);
        console.log(phone);
        if (name === "" || phone === "")
            alert("Name or phone number cannot be empty");
        else if (dateTime === null)
            alert(
                "Please click and mention all the fields of date and time(including AM and PM)"
            );
        else {
            await dispatch(
                adminActions.addAppointment({
                    name: name,
                    number: phone,
                    dateTime: dateTime,
                    isDone: false,
                    user: user,
                })
            );
            clearServices();
            navigate("/thankyou");
        }
    };

    return (
        <div className="flex flex-col">
            <nav className="fixed">
                <AdminNav />
            </nav>
            <div className="bg-BG h-full min-h-screen flex flex-col pt-20 max-sm:pt-24 items-center justify-evenly">
                <h1 className="text-DarkBlue text-6xl max-sm:text-4xl font-normal text-center max-sm:py-8">
                    Schedule an appointment
                </h1>
                <div className="bg-white w-8/12 max-sm:w-11/12 rounded-2xl mx-auto p-8 text-lg flex flex-col space-y-10">
                    <div className="leading-10 max-sm:flex max-sm:flex-col">
                        <p className="inline">Hey, my name is </p>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Name"
                            className="bg-inherit border-b-2 border-DarkBlue text-center mx-3 focus:outline-none placeholder:text-gray-400 text-LightBlue"
                        />
                        <p className="inline max-sm:mt-4">
                            and you can contact me at{" "}
                        </p>
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
                        <p>
                            {dateTime.slice(8, 10)}
                            <span className="text-xs align-super">
                                {dateTime.length ? "th" : ""}
                            </span>{" "}
                            {monthArray[dateTime.slice(5, 7) - 1]}{" "}
                            {dateTime.slice(11)}{" "}
                        </p>
                    </div>
                    <div className="">
                        <p>I would like to get</p>
                        <div className="my-2">
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

                    <div className="flex justify-between">
                        <p>
                            Your bill is{" "}
                            <span className="font-bold">{cartBill}</span>
                        </p>
                        <div
                            onClick={clearServices}
                            className="inline cursor-pointer bg-LightBlue w-fit px-3 py-2 rounded-full text-white"
                        >
                            Clear
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={goBack}
                        className="bg-DarkBlue my-4 px-4 py-3 text-xl rounded-lg text-white cursor-pointer"
                    >
                        My Appointments
                    </button>
                    <div
                        className="bg-DarkBlue my-4 px-4 py-3 text-xl rounded-lg text-white cursor-pointer"
                        onClick={addAppointment}
                    >
                        Book Appointment
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBook;
