"use client"
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [isNav,setIsNav] = useState(true); 

  const toggleBar = () => {
    setIsNav(!isNav)
  };

  return (
      <div className="sticky top-0 z-10">
        <div>
          <Image className="w-full h-40" src="/banner1.png" alt="Our services" width={500} height={500} />
        </div>
        <div className=" flex flex-row justify-between bg-white md:hidden">
          <div>
            <Image className="w-30 h-10 m-3" src="/quiver.gif" alt="Our services" width={100} height={100}/>
          </div>
          <div>
            <button onClick={toggleBar}>
              <Image className="w-full h-14 mt-1" src="/toggle.png" alt="Our services" width={500} height={500}/>
            </button>
          </div>
        </div>
        <div className={`${isNav ? "hidden md:flex" : "flex flex-col"} flex-wrap justify-center text-white bg-white md:flex-row`}>
          <div className="hover:text-red-400 hover:bg-white hover:font-bold bg-red-400 px-3 py-2 md:m-1">Shree Jagannath</div>
          <div className="hover:text-red-400 hover:bg-white hover:font-bold bg-red-400 px-3 py-2 md:m-1">Politics</div>
          <div className="hover:text-red-400 hover:bg-white hover:font-bold bg-red-400 px-3 py-2 md:m-1">Education</div>
          <div className="hover:text-red-400 hover:bg-white hover:font-bold bg-red-400 px-3 py-2 md:m-1">Farming</div>
          <div className="hover:text-red-400 hover:bg-white hover:font-bold bg-red-400 px-3 py-2 md:m-1">State</div>
          <div className="hover:text-red-400 hover:bg-white hover:font-bold bg-red-400 px-3 py-2 md:m-1">Business</div>
          <div className="hover:text-red-400 hover:bg-white hover:font-bold bg-red-400 px-3 py-2 md:m-1">Education</div>
          <div className="hover:text-red-400 hover:bg-white hover:font-bold bg-red-400 px-3 py-2 md:m-1">National</div>
          <div className="hover:text-red-400 hover:bg-white hover:font-bold bg-red-400 px-3 py-2 md:m-1">International</div>
          <div className="hover:text-red-400 hover:bg-white hover:font-bold bg-red-400 px-3 py-2 md:m-1">Sports</div>
          <div className="hover:text-red-400 hover:bg-white hover:font-bold bg-red-400 px-3 py-2 md:m-1">Health & lifestyle</div>
          <div className="hover:text-red-400 hover:bg-white hover:font-bold bg-red-400 px-3 py-2 md:m-1">Technology</div>
        </div>
      </div>
  );
}
