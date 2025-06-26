import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

const [isSignInForm, setIsSignInForm]= useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div className="bg-black md:bg-transparent min-h-screen relative">
      <Header />
      <div>
        <img
          className=" hidden md:block h-full w-full object-cover absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_small.jpg"
          alt="Background-Image"
        ></img>
      </div>

      <form className="absolute bg-black text-white p-11 md:mt-36 sm:mt-24 mt-20 mx-auto right-0 left-0 lg:w-3/12 sm:8/12 md: 4/12 w-11/12  rounded-md bg-opacity-80">
        <h1 className="font-bold text-2xl mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full name"
          className="p-2 my-2 w-full rounded-md bg-[#2f2f2f] text-sm border border-[#777777]"
        ></input>}
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 my-2 w-full rounded-md bg-[#2f2f2f] text-sm border border-[#777777]"
        ></input>
        <input
          type="Password"
          placeholder="Password"
          className="p-2 my-2 w-full rounded-md bg-[#2f2f2f] text-sm border border-[#777777]"
        ></input>
        <button className="py-1 px-2 my-2 w-full text-sm rounded-md bg-[#ff2121] hover:bg-[#bc0000] transition-colors duration-500 ease-in ">
          {isSignInForm ? "Sign In" : "Get started"}
        </button>
        <p className="text-sm my-4 text-neutral-400 cursor-pointer" onClick={toggleSignIn}>{isSignInForm ? "New to Netflix?Sign up now." : "Already registered. Sign In now!"}</p>
      </form>
    </div>
  );
};

export default Login;
