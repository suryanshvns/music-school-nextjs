import { Meteors } from "@/components/ui/meteors";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="max-w-md w-full px-4 py-8 bg-gray-900 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-white bg-gray-700" // Added bg-gray-700 class
          />
        </div>
        <div className="mb-4">
          <label htmlFor="suggestions" className="block text-gray-700 font-semibold mb-2">Suggestions</label>
          <textarea
            id="suggestions"
            name="suggestions"
            placeholder="Enter your suggestions"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-white bg-gray-700" // Added bg-gray-700 class
          ></textarea>
        </div>
        <button
          type="button"
          className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-6  00 transition duration-200"
        >
          Submit
        </button>
        <Meteors number={80} />
      </div>
    </div>
  );
}

export default Page;
