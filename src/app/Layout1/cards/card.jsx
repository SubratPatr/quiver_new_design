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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 grid-flow-row">
      {data.map((item, index) => (
        <Link key={index} href={`/cardDetails/${item.id}`} className="relative m-3">
          <Image src={item.image} alt="image" width={5000} height={5000} className="relative z-0"/>
            <p className="absolute bottom-0 left-0 right-0 text-xl sm:text-base md:text-base bg-black bg-opacity-50 text-white p-3 text-center font-bold shadow-lg">
            {item.title}
            </p>
        </Link>
      ))}
    </div>
  );
}
