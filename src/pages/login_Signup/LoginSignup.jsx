import React, { useEffect } from "react";
import { backgroundPoster } from "../../assets";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
// import Header from "./components/Header";
import Form from "./components/Form";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { addUser, removeUser } from "../../store/loginSignupSlice";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/home");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundPoster})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <ContentWrapper>
        {/* <div className="relative w-full">
          <div className="absolute top-0 w-full">
            <Header />
          </div>
        </div> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Form />
        </div>
      </ContentWrapper>
    </div>
  );
}

export default LoginSignup;
