import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-teal-400 flex justify-between">
      <div className="flex p-4">
        {/* <img src={SigninWell} alt="logoApp" className="w-20 h-10 m-2" /> */}
        <h1 className="font-bold mt-5 text-white">E-Signature</h1>
      </div>
      <div className="flex ml-40 p-2 px-5 font-bold text-white">
        <nav>
          <ul className="flex">
            <Link>
              <li className="p-2 my-4">API</li>
            </Link>
            <Link>
              <li className="p-2 my-4">Security</li>
            </Link>
            <Link>
              <li className="p-2 my-4">Pricing</li>
            </Link>
            <Link>
              <li className="p-2 my-4">About</li>
            </Link>
            <Link>
              <li className="p-2 my-4">Log In</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
