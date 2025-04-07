import { useState } from "react";

interface AddFilterProps {
    setIsOpen: (isOpen: boolean) => void;
}

export default function AddFilter({setIsOpen}: AddFilterProps) {
    return (
        <button onClick={() => setIsOpen(true)} className="rounded-lg shadow-lg w-[80%] h-[60px] bg-white/60 text-black text-2xl hover:underline hover:bg-white cursor-pointer text-center items-center justify-center flex my-4">
            Add Filter
        </button>

       
        
    )
}
