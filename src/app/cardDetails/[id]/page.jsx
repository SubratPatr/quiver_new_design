"use client"
import { useState,useEffect } from "react";
import Image from "next/image";
import NavBar from "@/app/components/navBar"

export default function Page({ params }) {
  const [data, setData] = useState(null);
  const id = params.id;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://backend-thequiver.onrender.com/todays_news_web/${id}`,{ cache: "no-cache" });
      const data = await res.json();
      setData(data[0]);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <NavBar/>
      <div className="flex justify-center">
        <div className="w-4/5 bg-white m-5 p-3 rounded-lg shadow-md">
          <div className="flex flex-row items-center mb-3">
            <p className="text-black text-xl sm:text-3xl md:text-5xl font-bold">
              {data?.title}
            </p>
          </div>
          <div className="text-black mb-3">
            <Image src={data?.image} alt="image" width={5000} height={500} />
          </div>
          <div className="px-3">
            <div className="text-base sm:text-xl md:text-xl text-black mb-3">
              {data?.content}
            </div>
            <div className="text-black flex flex-row">
              <p className="font-bold">Author:-</p>{data?.author}
            </div>
            <div className="text-black mb-3 font-bold">{data?.posted_at}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
