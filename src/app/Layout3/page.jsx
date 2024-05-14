"use client";
import React from "react";
import Cards from "./cards/card"

export default function Home() {
  return (
    <div className="md:w-1/4 order-3 sm:order-3 md:order-3 border border-black m-3 text-center text-black">
        <p className="text-red-700 font-bold text-xl">Yesterday</p>
        <Cards/>
    </div>
  );
}
