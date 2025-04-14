"use client"
import { useState } from "react";
import AddFilter from "./addFilter";
import FilterPopup from "@/components/dashboard/FilterPopup";

export default function Page() {
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const [charts, setCharts] = useState<string[]>([]);



    const handleChartRequest = async (url: string) => {
        try {
            console.log("SENDING REQUEST TO: ", url)
            const response = await fetch(url)

            const data = await response.text()
            console.log("GOT DATA FROM FLASK API:", data)

            setCharts(prevCharts => [...prevCharts, data]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const removeChart = (index: number) => {
        setCharts(prevCharts => prevCharts.filter((_, i) => i !== index));
    }
    
    return (
        <div className="h-screen w-screen flex justify-center relative">
            <div className="w-full flex items-center justify-center">
                <div className="flex flex-row flex-wrap gap-6 p-8 content-start justify-center">
                    {charts.map((chartHtml, index) => (
                        <div key={index} className="w-[calc(50%-1rem)] min-w-[400px] max-w-[680px] h-fit relative border border-gray-200 rounded-lg shadow-sm p-4 bg-white">
                            <div className="w-full"dangerouslySetInnerHTML={{ __html: chartHtml }} />
                            <button className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center" onClick={() => removeChart(index)}>
                                ×
                            </button>
                        </div>
                    ))}

                    <AddFilter setIsOpen={setIsFilterOpen}/>
                </div>
            </div>
            
            
            {isFilterOpen && <FilterPopup setIsFilterOpen={setIsFilterOpen} onSubmitRequest={handleChartRequest} />}
        </div>
    );
}
