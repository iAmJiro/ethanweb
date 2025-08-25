import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.comments,
    };

    emailjs
      .send(
        "service_hyexll9",
        "template_ojkknut",
        templateParams,
        "4ppPBIU8dYO8f5mGS"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-neutral-800 shadow-xl rounded-lg p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-white">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full bg-neutral-700 text-white border-gray-600 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full bg-neutral-700 text-white border-gray-600 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full bg-neutral-700 text-white border-gray-600 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full bg-neutral-700 text-white border-gray-600 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">
            Comments
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full bg-neutral-700 text-white border-gray-600 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold rounded-md shadow hover:from-yellow-600 hover:to-yellow-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
