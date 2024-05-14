"use client";
import React from "react";
import Image from "next/image";
import InnerCard from "./InnerCard/page";
import OuterCard from "./OuterCard/page";

export default function Home() {
  return (
        <div className="md:w-1/2 order-1 sm:order-1 md:order-2 shadow-md border border-black m-3 text-center text-black">
          <p className="font-bold text-red-700 text-xl">Today</p>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 m-3">
              <Image src="/quiver.gif" alt="God" width={1500} height={500} />
              <div className="text-red-700 font-bold text-3xl sm:text-5xl md:text-5xl text-center">
                THE QUIVER
              </div>
              <div className="text-black font-bold text-center">
                "Unshackled and Unswayed !<br /> A Lone Beacon for Justice !
                <br />
                No Masters, Just Truth Prevails !<br /> In the Echoes of
                Freedom's Call."
              </div>
              <div>
               <Image src="/banner.jpg" alt="Our services" width={800} height={500} className="mt-5" />
               <p className="text-red-700 mt-2 font-bold text-2xl sm:text-3xl md:text-3xl text-center">
                "ପରିବର୍ତ୍ତନର କମ୍ପନ"</p>
              </div>
            </div>
            <div className="md:w-1/2">
                <InnerCard/>
            </div>
          </div>
          <div className="m-3">
            <OuterCard/>
          </div>
        </div>
  );
}
