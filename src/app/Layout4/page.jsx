"use client";
import React from "react";
import Cards from "./cards/card"

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-red-300 md:py-50 rotate-180 origin-center m-3">
        <div className="text-black text-center py-3 md:py-96 font-bold rotate-180 origin-center md:rotate-90 md:origin-center">!!!!God!!!!</div>
      </div>
       <Cards/>
    </div>
  );
}
