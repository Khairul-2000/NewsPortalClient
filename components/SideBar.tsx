"use client";



import React, { useContext, useState } from "react";
import { PortalContext } from "@/context/PortalContext";




type NewsPortal = {
    fetchNewsSummary: (url: string) => void;
}


const portals = {
    BBC: "https://www.bbc.com/",
    CNN: "https://edition.cnn.com",
    DW: "https://www.dw.com/en/top-stories/s-9097",
    AlJazeera: "https://www.aljazeera.com/news",
  };
  
  




const SideBar = ({fetchNewsSummary}: NewsPortal) => {
    const [value, setValue] = useState("");

    const { setPortal} = useContext(PortalContext);

    return (
        <div>
            <div className="w-64 bg-gray-800 text-white p-4 space-y-4 h-full">
                <h2 className="text-xl font-bold mb-4">News Portals</h2>
                {Object.entries(portals).map(([name, url]) => (
                    <button
                        key={name}
                        className="w-full text-left hover:bg-gray-700 p-2 rounded courser-pointer"
                        onClick={()=> {fetchNewsSummary(url), setValue(name), setPortal(name)}}

                    >
                       
                        {value === name ? <span className="text-red-500 text-bold">{name}</span> : name}
                        {/* <span className="text-blue-500">{name}</span> */}
                    </button>
                ))}
            </div>

        </div>
    )

    
    

}


export default SideBar; 