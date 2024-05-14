"use client";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
const [data,setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://backend-thequiver.onrender.com/todays_news_web",
          { cache: "no-store" }
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const uniqueData = Array.from(new Set(data.posts.map((item) => item.id))).map((id) => {
          return data.posts.find((post) => post.id === id);
        });
        setData(uniqueData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex-wrap grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 grid-flow-row">
    {data.slice(0,6).map((item, index) => (
      <Link key={index} href={`/cardDetails/${item.id}`} className="relative m-3">
        <Image src={item.image} alt="God" width={400} height={400} className="relative z-0 border border-black w-full h-full"/>
        <p className="absolute bottom-0 left-0 right-0 top-0 sm:top-10 md:top-3 text-sm md:text-sm sm:text-lg bg-black bg-opacity-0 text-white p-3 text-center font-bold shadow-lg">
        </p>
      </Link>
    ))}
  </div>
  );
}
