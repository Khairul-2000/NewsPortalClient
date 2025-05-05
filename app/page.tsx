"use client";


import SideBar from "@/components/SideBar";
import Summary from "@/components/Summary";
import { useContext, useEffect, useState } from "react";
import { PortalContext } from "@/context/PortalContext";





export default function Home() {


  const [newsSummary, setNewsSummary] = useState<
    { title: string; summary: string; readMore: string }[]
  >([]);

  const [loading, setLoading] = useState(false);

  const {portal} = useContext(PortalContext);


  useEffect(() => {
    console.log("News Summary updated:", newsSummary);
  }, [newsSummary]);

  // 🟢 This function will be called when a news portal is clicked
  async function fetchNewsSummary(url: string) {

    setLoading(true);
    const res = await fetch("https://newsportalsummarybackend.onrender.com/scraping", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    if (!res.ok) throw new Error("Failed to fetch news");
    const data = await res.json();
    const rawText = data.Data; // 🟢 Use `result` key here
    console.log("Raw Text:", rawText);
    const startIndex = rawText.indexOf("[");
    const endIndex = rawText.indexOf("]") + 1;
    const cleanJson = rawText.slice(startIndex, endIndex);

    const parsed = JSON.parse(cleanJson);
    setNewsSummary(parsed);// 🟢 Log the parsed data
    setLoading(false);



  }


  return (

    <div>
      <div className="flex flex-row min-h-screen ">

        <SideBar fetchNewsSummary={fetchNewsSummary} />
        {
          loading ? (
            <div className="flex items-center justify-center w-full h-screen">
              <p className="text-2xl">Loading...</p>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-bold text-center mt-4">Latest News of {portal}</h1>
              <Summary summary={newsSummary} />
            </div>
          )
        }

      </div>
    </div>
  );
}
