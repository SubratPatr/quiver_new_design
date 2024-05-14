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
    <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row">
        {data.map((item, index) => (
        <Link key={index} href={`/cardDetails/${item.id}`} className="m-3 border border-black bg-red-100">
            <Image className="w-full" src={item.image} alt="God" width={500} height={400} />
            <p className="text-xl md:text-base sm:text-2xl">{item.title}</p>
        </Link>
        ))}
    </div>
  );
}
