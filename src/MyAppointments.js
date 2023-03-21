import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNav from "./AdminNav";
import { adminActions } from "./features/counter/adminSlice";
import { useNavigate } from "react-router-dom";

function MyAppointments() {
    const user = useSelector((state) => state.user.user);
    const appointments = useSelector((state) => state.admin.appointments);
    const dispatch = useDispatch();
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

    const minusAppointment = (e, index) => {
        e.preventDefault();
        dispatch(adminActions.removeAppointment(index));
    };

    const goBack = async (e) => {
        e.preventDefault();
        navigate("/book");
    };

    if (appointments.length === 0) {
        return (
            <div className="bg-BG h-screen overflow-auto flex flex-col justify-center items-center">
                <h1 className="text-3xl">
                    Looks like you dont have any appointments at the moment.
                </h1>
                <button
                    className="bg-DarkBlue text-white px-4 py-2 rounded-lg absolute bottom-28"
                    onClick={goBack}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="bg-BG h-screen overflow-auto">
            <AdminNav />
            <div className="flex flex-col items-center justify-evenly h-5/6 absolute top-1/2 w-full -translate-y-1/2">
                <h1 className="lg:text-7xl text-5xl  text-DarkBlue font-semibold">
                    My Appointments
                </h1>
                <div className="Appointments lg:w-8/12 w-11/12 bg-white p-10 rounded-2xl overflow-x-auto">
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
                                                    {
                                                        monthArray[
                                                            item.dateTime.slice(
                                                                5,
                                                                7
                                                            ) - 1
                                                        ]
                                                    }{" "}
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
                                } else return {};
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MyAppointments;
