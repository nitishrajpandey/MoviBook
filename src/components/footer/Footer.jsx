import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" py-10 bg-[#020C1B]">
      <ContentWrapper>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center ss:flex-row gap-3 ss:gap-5 text-white py-5 text-[16px] cursor-pointer ">
            <span className="hover:text-[#da2f68]">Terms Of Use</span>
            <span className="hover:text-[#da2f68]">Privacy-Policy</span>
            <span className="hover:text-[#da2f68]">About</span>
            <span className="hover:text-[#da2f68]">Blog</span>
            <span className="hover:text-[#da2f68]">FAQ</span>
          </div>

          <div className="w-full ssm:w-[90%] sm:w-[80%] md:w-[60%] text-center text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>

          <div className="flex gap-5 py-5 text-xl text-white">
            <Link
              to="https://github.com/nitishrajpandey"
              target="_blank"
              className="bg-[#04152D] p-3 rounded-full hover:shadow-md hover:shadow-[#da2f68] hover:text-[#da2f68] transition-all cursor-pointer"
            >
              <FaGithub />
            </Link>

            <Link className="bg-[#04152D] p-3 rounded-full hover:shadow-md hover:shadow-[#da2f68] hover:text-[#da2f68] transition-all cursor-pointer">
              <GrInstagram />
            </Link>

            <Link className="bg-[#04152D] p-3 rounded-full hover:shadow-md hover:shadow-[#da2f68] hover:text-[#da2f68] transition-all cursor-pointer">
              <FaTwitter />
            </Link>

            <Link
              to="https://www.linkedin.com/in/nitish-raj-a93517238/"
              target="_blank"
              className="bg-[#04152D] p-3 rounded-full hover:shadow-md hover:shadow-[#da2f68] hover:text-[#da2f68] transition-all cursor-pointer"
            >
              <FaLinkedinIn />
            </Link>
          </div>
          <h1 className="text-white">© 2024 NITISH RAJ . All Right Reserved</h1>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Footer;
