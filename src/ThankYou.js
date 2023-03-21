import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./features/counter/userSlice";
import { useNavigate } from "react-router-dom";

function ThankYou() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        <div className="h-screen bg-BG">
            <div className="flex flex-col justify-evenly items-center h-5/6 absolute w-full top-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center justify-evenly">
                    <h1 className="lg:text-9xl text-7xl font-semibold text-DarkBlue">
                        Thank you
                    </h1>
                    <h2 className="lg:text-4xl text-xl text-DarkBlue">
                        for booking at Vogue Salon
                    </h2>
                    <h3 className="lg:pt-10 italic text-xl font-normal p-7">
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
        </div>
    );
}

export default ThankYou;
