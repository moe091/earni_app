import { useState } from "react";

interface AddFilterProps {
    setIsOpen: (isOpen: boolean) => void;
}
// rounded-lg shadow-lg w-[80%] h-[60px] bg-white/60 text-black text-2xl hover:underline hover:bg-white cursor-pointer text-center items-center justify-center flex my-4
export default function AddFilter({setIsOpen}: AddFilterProps) {
    return (
        <button onClick={() => setIsOpen(true)} className="w-[calc(50%-1rem)] min-w-[400px] max-w-[680px] relative bg-white/60 min-h-[350px] h-fit text-black text-3xl hover:underline hover:bg-white cursor-pointer ">
            Add Filter
        </button>

       
        
    )
}
