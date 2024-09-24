import { useDispatch } from "react-redux";
import { setModalData } from "../Store/modalSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAddNew = () => {
        dispatch(setModalData({
            title: "Add New App",
            value: "AddNewApp",
        }))
    }

    const [ user, setUser ] = useState("");
    const handleLogOut = () => {
        localStorage.removeItem("Token");
        localStorage.removeItem("user");
        navigate("/login");
    }

    useEffect(() => {
        let data = localStorage.getItem("user");
        if (data) {
            data = JSON.parse(data);
            setUser(data.email.split("@")[0]);
        }
    }, [])

    return (
        <header className="bg-secondary-500 text-white py-4 px-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Profile Section */}
                <div className="flex items-center">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Profile Icon"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="hidden md:block text-lg font-bold">
                        {user ? user : "Guest User"}
                    </span>
                </div>

                {/* Logout Button */}
                <div>

                    <button
                        onClick={handleAddNew}
                        className="bg-success hover:bg-primary-200 hover:text-success text-white font-medium py-2 px-4 rounded-md transition duration-300 mr-4 shadow-md"
                    >
                        Add New App
                    </button>
                    <button
                        onClick={handleLogOut}
                        className="bg-danger hover:bg-primary-200 hover:text-danger text-white font-medium py-2 px-4 rounded-md transition duration-300  shadow-md"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;