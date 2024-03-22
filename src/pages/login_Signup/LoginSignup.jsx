import React from "react";
import { backgroundPoster, logo3 } from "../../assets";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Header from "./components/Header";
import Form from "./components/Form";

function LoginSignup() {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundPoster})` }}
      ></div>

      <ContentWrapper>
        <div className="relative w-full">
          <div className="absolute top-0 w-full">
            <Header />
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Form />
        </div>
      </ContentWrapper>
    </div>
  );
}

export default LoginSignup;
