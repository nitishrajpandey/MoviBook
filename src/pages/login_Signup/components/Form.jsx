import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSignupToggle } from "../../../store/loginSignupSlice";
import { login, signup } from "../../../firebase/authService";

function Form() {
  const toggleSignInSignup = useSelector(
    (state) => state.loginSignup.loginSignupStatus
  );
  const message = useSelector((state) => state.loginSignup.message);
  const dispatch = useDispatch();

  // store name,email,password from "Form"
  const userNameElement = useRef();
  const emailElement = useRef();
  const passwordElement = useRef();

  // handel login/signup form toggle

  const handelSignSignupToggle = () => {
    dispatch(loginSignupToggle());
  };

  // handel login/signup authuntication button

  const handelSigninSignupButton = () => {
    const email = emailElement.current.value;
    const password = passwordElement.current.value;

    // signup logic
    if (toggleSignInSignup) {
      const username = userNameElement.current.value;
      signup(email, password, username, dispatch);
    }

    // login in logic
    else {
      login(email, password, dispatch);
      emailElement.current.value = "";
      passwordElement.current.value = "";
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      action=""
      className="rounded-md  flex flex-col max-w-[400px] w-full p-5 gap-5 bg-black bg-opacity-80"
    >
      <h1 className="font-bold text-3xl text-white ">
        {toggleSignInSignup ? "Create Account" : "Sign in"}
      </h1>
      {toggleSignInSignup && (
        <input
          type="text"
          ref={userNameElement}
          alt="Name "
          placeholder="example5678"
          className="bg-transparent text-white bg-opacity-80  py-3 px-2 outline-none rounded-lg border border-gray-400"
        />
      )}
      <input
        type="email"
        alt="Email "
        ref={emailElement}
        placeholder="example123@gmail.com"
        className="bg-transparent text-white bg-opacity-80  py-3 px-2 outline-none rounded-lg border border-gray-400"
      />
      <input
        type="password"
        alt="Password"
        ref={passwordElement}
        placeholder="Example@1234"
        className="bg-transparent text-white bg-opacity-80  py-3 px-2 outline-none rounded-lg border border-gray-400"
      />
      <h1 className="text-red-900 font-bold text-xl py-2">{message}</h1>
      <button
        className="text-white bg-[#C11119] py-2 text-xl rounded-md capitalize"
        onClick={handelSigninSignupButton}
      >
        {toggleSignInSignup ? "Sign Up" : "Sign In"}
      </button>
      <p className="text-white">
        New to Netflix?{" "}
        <span
          className="hover:text-red-700 cursor-pointer "
          onClick={handelSignSignupToggle}
        >
          {toggleSignInSignup ? "Sign In Now" : "Sign Up Now"}
        </span>
      </p>
    </form>
  );
}

export default Form;
