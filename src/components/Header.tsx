"use client";
import { ReactNode, useState } from "react";

interface HeadersProps {
  name: string;
  left?: ReactNode;
  callBack?: () => void;
}

const Headers: React.FC<HeadersProps> = ({ name, callBack = () => {}, left }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [show, setShow] = useState("");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop && lastScrollTop > 15) {
      setShow("-translate-y-96");
    } else {
      setShow("");
    }

    setLastScrollTop(scrollTop);
  });

  return (
    <header className={`w-screen z-40 fixed transition-transform duration-700 transform ${show} bg-gradient-to-r from-purple-500 from-25% to-pink-500`}>
      <div className="w-full flex justify-center ">
        <div className="py-2 flex justify-between items-center w-[93vw]">
          <div className="flex text-center text-2xl font-semibold bg-clip-text text-white cursor-pointer" onClick={callBack}>
            {name.toUpperCase()}
          </div>
          <div>{left}</div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
