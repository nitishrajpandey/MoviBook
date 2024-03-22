import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMessages,
  loginSignupToggle,
} from "../../../store/loginSignupSlice";
import { checkValidData } from "../formValidate/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase";

function Form() {
  const toggleSignInSignup = useSelector(
    (state) => state.loginSignup.loginSignupStatus
  );
  const message = useSelector((state) => state.loginSignup.message); // Change variable name to 'message'
  const dispatch = useDispatch();
  const userNameElement = useRef();
  const emailElement = useRef();
  const passwordElement = useRef();

  const handelSignSignupToggle = () => {
    dispatch(loginSignupToggle());
  };

  const handelSigninSignupButton = () => {
    // signup logic
    if (toggleSignInSignup) {
      const message = checkValidData(
        // Change variable name to 'message'
        emailElement.current.value,
        passwordElement.current.value,
        userNameElement.current.value
      );
      dispatch(addMessages(message));
      console.log(message);

      if (message) return;

      createUserWithEmailAndPassword(
        auth,
        emailElement.current.value,
        passwordElement.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          dispatch(addMessages(errorCode + " - " + errorMessage));
        });
    }

    // sign in logic
    else {
      const message = checkValidData(
        // Change variable name to 'message'
        emailElement.current.value,
        passwordElement.current.value
      );
      console.log(message);
      dispatch(addMessages(message));

      if (message) return;
      signInWithEmailAndPassword(
        auth,
        emailElement.current.value,
        passwordElement.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          dispatch(addMessages(errorCode + " - " + errorMessage));
        });
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      action=""
      className="rounded-md  flex flex-col max-w-[400px] w-full p-5 gap-5 bg-black bg-opacity-80"
    >
      <h1 className="font-bold text-3xl text-white ">
        {toggleSignInSignup ? "sign out" : "sign in"}
      </h1>
      {toggleSignInSignup && (
        <input
          type="text"
          ref={userNameElement}
          alt="Name "
          placeholder="Enter UserName here..."
          className="bg-transparent text-white bg-opacity-80  py-3 px-2 outline-none rounded-lg border border-gray-400"
        />
      )}
      <input
        type="email"
        alt="Email "
        ref={emailElement}
        placeholder="Enter Email here..."
        className="bg-transparent text-white bg-opacity-80  py-3 px-2 outline-none rounded-lg border border-gray-400"
      />
      <input
        type="password"
        alt="Password"
        ref={passwordElement}
        placeholder="Enter Password here..."
        className="bg-transparent text-white bg-opacity-80  py-3 px-2 outline-none rounded-lg border border-gray-400"
      />
      <h1 className="text-white text-xl">{message}</h1>{" "}
      {/* Change variable name to 'message' */}
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
