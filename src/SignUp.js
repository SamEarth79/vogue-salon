import React, { useState } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { authActions } from "./features/counter/userSlice";
import { Link, useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signUp = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(
                    authActions.login({
                        email: email,
                        uid: userAuth.uid,
                    })
                );
            })
            .then(() => {
                navigate("/book");
            })
            .catch((err) => alert(err.message));
    };

    return (
        <div className="font-Montserrat h-screen flex max-sm:flex-col lg:overflow-hidden">
            {/* Left */}
            <div className="flex flex-col justify-center h-full lg:w-1/2 max-sm:w-full lg:pl-8">
                {/* <h1 className="font-light text-xl lg:absolute top-10 px-8">
					<Link to="/">Vogue Salon</Link>
				</h1> */}
                <AdminNav />
                <div className="flex flex-col justify-around w-8/12 mx-auto h-1/2 max-sm:w-11/12">
                    <div className="">
                        <h1 className="text-3xl font-semibold">
                            Welcome to the salon!
                        </h1>
                        <p className="text-slate-400 mt-2">
                            Let's create an account for you
                        </p>
                    </div>
                    <div className="w-full mt-10">
                        <form
                            className="flex flex-col max-sm:items-center"
                            onSubmit={signUp}
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
                                Sign Up
                            </button>
                        </form>
                        <p className="mt-4">
                            Already have an account?{" "}
                            <strong>
                                <Link to="/login">Log In</Link>
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
            {/* Right */}
            <div className="lg:w-1/2 max-sm:p-2 max-sm:mx-auto z-50">
                <img
                    className="object-cover h-full  max-sm:w-52 max-sm:h-52 max-sm:rounded-full"
                    src="https://images.unsplash.com/photo-1580087433295-ab2600c1030e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="cover"
                />
            </div>
        </div>
    );
}

export default SignUp;
