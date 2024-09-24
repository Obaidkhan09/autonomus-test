import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="bg-secondary-500 shadow-2xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-primary-800">Sign Up</h2>

        <form>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-primary-900 text-sm text-left font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-primary-900 text-sm text-left font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-3 py-2 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-primary-900 text-sm text-left font-semibold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="w-full px-3 py-2 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-primary-900 text-sm text-left font-semibold mb-2" htmlFor="address">
              Address
            </label>
            <input
              className="w-full px-3 py-2 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              id="address"
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Country */}
          <div className="mb-4">
            <label className="block text-primary-900 text-sm text-left font-semibold mb-2" htmlFor="country">
              Country
            </label>
            <select
              className="w-full px-3 py-2 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              id="country"
              required
            >
              <option value="">Select your country</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
              {/* Add more countries as needed */}
            </select>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-primary-900 text-sm text-left font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary-100 shadow-lg rounded-lg w-full text-black py-2 hover:bg-secondary-100 transition duration-200"
            onClick={() => navigate("/")}
          >
            Sign Up
          </button>
        </form>

        {/* Login Option */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <a
              href="#"
              className="text-secondary-50 hover:text-black font-medium"
              onClick={() => navigate("/login")}
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
