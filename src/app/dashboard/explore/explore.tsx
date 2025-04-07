"use client"
import { useState } from "react";
import AddFilter from "./addFilter";
import FilterPopup from "@/components/dashboard/FilterPopup";

export default function Page() {
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    
    return (
        <div className="h-screen w-screen flex flex-row justify-center relative">
            <AddFilter setIsOpen={setIsFilterOpen}/>

            {isFilterOpen && <FilterPopup setIsFilterOpen={setIsFilterOpen} />}
        </div>
    );
}
