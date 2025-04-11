"use client"
import { useState } from "react";
import AddFilter from "./addFilter";
import FilterPopup from "@/components/dashboard/FilterPopup";

export default function Page() {
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

    const handleChartRequest = async (url: string) => {
        console.log("SENDING REQUEST TO: ", url)
        const response = await fetch(url)

        const data = await response.text()
        console.log("GOT DATA FROM FLASK API:", data)
    }
    
    return (
        <div className="h-screen w-screen flex flex-row justify-center relative">
            <AddFilter setIsOpen={setIsFilterOpen}/>

            {isFilterOpen && <FilterPopup setIsFilterOpen={setIsFilterOpen} onSubmitRequest={handleChartRequest} />}
        </div>
    );
}
