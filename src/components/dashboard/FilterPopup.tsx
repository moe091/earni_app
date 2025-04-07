

export default function FilterPopup({setIsFilterOpen}: {setIsFilterOpen: (isOpen: boolean) => void}) {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center">
            <div className="bg-white w-[80%] text-black h-[400px] flex flex-col justify-center items-center mt-20 mx-10 rounded-lg shadow-lg">
                <h1 className="text-3xl">Filter Options</h1>
                <button onClick={() => setIsFilterOpen(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
            </div>
        </div>
    )
}