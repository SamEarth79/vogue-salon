import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./features/counter/userSlice";
import { Link, useNavigate } from "react-router-dom";

function AdminNav() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);

    const logout = async (e) => {
        e.preventDefault();
        await dispatch(authActions.logout());
        navigate("/");
    };
    const login = (e) => {
        e.preventDefault();
        navigate("/login");
    };

    return (
        <div className="bg-white z-50 fixed top-0 left-0 flex font-Montserrat justify-between px-16 py-8 w-screen">
            <div className="logo">
                <Link to="/">
                    <h1 className="tracking-widest text-xl">Vogue Salon</h1>
                    {/* <img
						src={logo}
						width={40}
						className="object-contain"
						alt="yo"
					/> */}
                </Link>
            </div>

            <div className="">
                {user && (
                    <div
                        className={
                            "logout " + user === null ? " hidden " : "  "
                        }
                    >
                        <button
                            onClick={logout}
                            className="bg-LightBlue text-white px-2 py-1 rounded-lg active:bg-blue-800"
                        >
                            Logout
                        </button>
                    </div>
                )}
                {user != null && (
                    <div
                        className={"login " + user !== null ? " hidden " : " "}
                    >
                        <button
                            onClick={login}
                            className="bg-LightBlue text-white px-2 py-1 rounded-lg active:bg-blue-800"
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminNav;
