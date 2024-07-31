import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <form className="w-3/12 p-8 bg-teal-300 my-12 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-black font-semibold">Log In</h1>
        <input
          type="text"
          placeholder="Your E-mail"
          className="p-2 my-4 w-full bg-white"
        />
        <input
          type="password"
          placeholder="Your Password"
          className="p-2 my-4 w-full bg-white"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          Log In
        </button>
        <p className="text-black">
             New to E-Signature? Sign Up Now
        </p>
      </form>
    </div>
  );
};

export default Login;
