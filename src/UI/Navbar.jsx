import React from "react";

export default function Navbar() {
  return (
    <nav className="md:px-20 h-20 px-4 flex justify-between items-center text-white shadow-sm">
      <label className="text-3xl font-bold text-lipstick font-pop">Khunu</label>
      <button className="xl:px-9 md:px-6 bg-lipstick py-2.5 px-4 rounded-2xl font-mont hover:bg-red-700">
        Join Waitlist
      </button>
    </nav>
  );
}
