import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Carousel from "react-multi-carousel";
import { responsiveAvtar } from "./topCast/context";

function Loding() {
  return (
    <div className="w-full h-full">
      <div className=" absolute overflow-hidden bg-cover opacity-20 bg-center  h-full w-full   ">
        <img
          src=""
          className="  object-cover object-center h-full w-full   "
          alt=""
        />

        <div
          className="absolute bottom-0 bg-transparent inset-0   w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(4, 21, 45, 0) 5%, #04152d 100%)",
          }}
        ></div>
      </div>

      <div className=" py-10 -z-50">
        <ContentWrapper>
          <div className="relative py-[80px]   flex break1:flex-row flex-col gap-5">
            <div className="w-full  break1:w-[450px]  h-full rounded-2xl animate-pulse  ">
              <div className="w-full bg-gray-300 h-[500px]  rounded-xl"></div>
              <div className="mt-1 bg-gray-300 w-1/2 h-4 animate-pulse rounded"></div>
              <div className="mt-2 bg-gray-300 w-3/4 h-4 animate-pulse rounded"></div>
            </div>

            <div className="w-[100%] h-screen bg-gray-300 rounded-2xl animate-pulse ">
              <div className="">
                <h1 className="text-white text-3xl break3:text-4xl md:text-5xl ">
                  <span className=""></span>
                </h1>
              </div>
              <div className="">
                <h3 className="text-gray-400 italic font-semibold py-3 text-xl"></h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className=" text-white px-2 py-1 rounded-md"></span>
              </div>
              <div className="flex gap-10 items-center pt-8">
                <div className=" w-[80px] h-[80px] rounded-full  "></div>
              </div>
              <div className="text-white py-3">
                <h2 className="text-3xl py-3"></h2>
                <p></p>
              </div>
              <div className="py-3 ">
                <div className="text-white flex gap-5 justify-evenly">
                  <span className="flex flex-col break2:flex-row break1:flex-col break3:flex-row gap-2">
                    <span className="text-gray-500 font-semibold"></span>
                  </span>

                  <span className="flex flex-col break2:flex-row break1:flex-col break3:flex-row gap-2">
                    <span className="text-gray-500 font-semibold"></span>
                  </span>

                  <span className="flex flex-col break2:flex-row break1:flex-col break3:flex-row gap-2">
                    <span className="text-gray-500 font-semibold"></span>
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <h1 className="py-3 text-white ">
                    <span className="text-gray-500 font-semibold"></span>
                  </h1>

                  <h1 className="flex gap-4  py-3">
                    <span className="text-white w-fit"></span>
                    <span className="text-gray-500 font-semibold"></span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}

          <div>
            <div className=" pb-10">
              <h1 className="text-white font-semibold text-3xl">Top Cast</h1>
            </div>

            <Carousel responsive={responsiveAvtar}>
              <div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="w-[150px] h-[150px]  bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="mt-2 bg-gray-300 w-3/4 h-4 animate-pulse rounded "></div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="w-[150px] h-[150px]  bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="mt-2 bg-gray-300 w-3/4 h-4 animate-pulse rounded "></div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="w-[150px] h-[150px]  bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="mt-2 bg-gray-300 w-3/4 h-4 animate-pulse rounded "></div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="w-[150px] h-[150px]  bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="mt-2 bg-gray-300 w-3/4 h-4 animate-pulse rounded "></div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="w-[150px] h-[150px]  bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="mt-2 bg-gray-300 w-3/4 h-4 animate-pulse rounded "></div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="w-[150px] h-[150px]  bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="mt-2 bg-gray-300 w-3/4 h-4 animate-pulse rounded "></div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2 items-center">
                  <div className="w-[150px] h-[150px]  bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="mt-2 bg-gray-300 w-3/4 h-4 animate-pulse rounded "></div>
                </div>
              </div>
            </Carousel>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
}

export default Loding;

// <div className="flex w-full ">
//         <div className="p-4 w-[40%]">
//           <div className="bg-gray-300 w-full aspect-[1/1.5] animate-pulse rounded-xl"></div>
//           <div className="mt-2 bg-gray-300 w-3/4 h-4 animate-pulse rounded"></div>
//           <div className="mt-1 bg-gray-300 w-1/2 h-4 animate-pulse rounded"></div>
//         </div>
//         <div className="p-4 w-full h-full">
//           <div className="bg-gray-300 w-[100px] animate-pulse rounded-xl">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure odit
//             error non vitae. Quaerat nemo commodi omnis laborum, libero, soluta
//             facilis vitae aperiam exercitationem, sapiente perspiciatis?
//             Obcaecati tenetur reiciendis architecto.
//           </div>
//           {/* <div className="mt-2 bg-gray-300 w-3/4 h-4 animate-pulse rounded"></div>
//           <div className="mt-1 bg-gray-300 w-1/2 h-4 animate-pulse rounded"></div> */}
//         </div>
//       </div>
