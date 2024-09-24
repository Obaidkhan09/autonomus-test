import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setModalData } from "../Store/modalSlice"
import { useDispatch } from 'react-redux';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState({
      email: "",
      password: ""
    });


    const handleOpenModal = () => {
      dispatch(
        setModalData({
          title: 'Forgot Password', 
          message: 'Please enter you email address.',
          value: "ForgetPassword"
          // onSubmit: () => console.log('Submitted'),
        //   onApprove: () => console.log('Approved'),
        })
      )
      };

      const handleLogin = () => {
        localStorage.setItem("Token", true);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
      }
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value});
      }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="bg-secondary-500 shadow-2xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-primary-800">Login</h2>

        <form>
          <div className="mb-4">
            <label className="block text-primary-900 text-sm text-left font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-3 py-2 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value= {user.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label className="block text-primary-900 text-sm text-left font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              type="password"
              id="password"
              name='password'
              placeholder="Enter your password"
              required
              value= {user.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <a
              href="#"
              className="text-sm text-secondary-50 hover:text-black"
              onClick={handleOpenModal}
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-primary-100 shadow-lg rounded-lg w-full text-black py-2 hover:bg-secondary-100 transition duration-200"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <a
              href="#"
              className="text-secondary-50 hover:text-black font-medium"
              onClick={() => navigate("/signUp")}
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
