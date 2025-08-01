import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidatData } from "../utils/validate"; // regex lib used for form validation
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUNDIMAGE_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate the from data;
    const message = checkValidatData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    // console.log(email.current.value);
    if (message) return; // return if there is message stop runnign code ahead

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="bg-black md:bg-transparent min-h-screen relative">
      <Header />
      <div>
        <img
          className="absolute object-cover hidden md:inline-block"
          src={BACKGROUNDIMAGE_URL}
          alt="Background-Image"
        ></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black text-white p-14 md:p-11 mt-20 md:mt-36 mx-0 md:mx-auto right-0 left-0 w-full md:w-3/12  rounded-md bg-opacity-80"
      >
        <h1 className="font-bold text-2xl mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="p-2 my-2 w-full rounded-md bg-[#2f2f2f] text-sm border border-[#777777]"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full rounded-md bg-[#2f2f2f] text-sm border border-[#777777]"
        ></input>
        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="p-2 my-2 w-full rounded-md bg-[#2f2f2f] text-sm border border-[#777777]"
        ></input>
        <p className="text-red-500 text-sm py-2">{errorMessage}</p>
        <button
          className="py-1 px-2 my-2 w-full text-sm rounded-md bg-[#ff2121] hover:bg-[#bc0000] transition-colors duration-500 ease-in "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Get started"}
        </button>
        <p
          className="text-sm my-4 text-neutral-400 cursor-pointer"
          onClick={toggleSignIn}
        >
          {isSignInForm
            ? "New to Netflix?Sign up now."
            : "Already registered. Sign In now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
