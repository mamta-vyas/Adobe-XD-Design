import React, { useState } from "react";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "isAgency") {
      setFormData({ ...formData, isAgency: value === "yes" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Account Created:", formData);
    // You can replace this with an API call or form validation logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create your popx account
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Create a password"
          />
        </div>

        {/* Company Name */}
        <div className="mb-6">
          <label className="block text-sm text-gray-700 mb-1">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your company name"
          />
        </div>

        {/* Are you an agency? */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">Are you an agency?</p>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === true}
                onChange={handleChange}
                className="accent-blue-600"
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === false}
                onChange={handleChange}
                className="accent-blue-600"
              />
              No
            </label>
          </div>
        </div>

        {/* Create Account Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
