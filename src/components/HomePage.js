import React from "react";
import Header from "./Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-center font-semibold text-3xl p-5 m-25 text-teal-600">
        How would you like to create your electronic signature?
      </h1>
      <div className="w-1/6 h-25 bg-gray-100 m-20 p-6">
        <a href="/drawsign">
          <img
            className="p-4"
            src="https://www.signwell.com/assets/draw-icon-f26b458ab5c08e92e62619672df5d2b1c28e867bc159fe30eb0fc57c661e5dd4.svg"
            alt="draw"
          />
          <span>Draw Signature</span>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
