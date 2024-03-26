import React, { useEffect, useState } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <div
      className={`ssm:hidden w-full absolute ${
        isOpen ? "top-16" : "top-0"
      } py-5 z-30 bg-[#020C1B] transition-all duration-200`}
    >
      <ContentWrapper>
        <div className="flex flex-col gap-3 text-white">
          <span className="text-xl">Movie</span>
          <span className="text-xl">Tv series</span>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Hamburger;
