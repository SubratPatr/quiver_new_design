"use client";
import React from "react";
import Cards from "./cards/card"

export default function Home() {
  return (
    <div className="md:w-1/4 order-2 sm:order-2 md:order-1 border border-black m-3 text-center text-black">
        <p className="text-red-700 font-bold text-xl">Yesterday</p>
        <Cards/>
    </div>
  );
}
