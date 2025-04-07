"use client"
import Sidebar from "../sidebar";
import Explore from "./explore";
export default function Page() {
    //const { status } = useSession();
    
    return (
        <div className="h-screen w-screen flex flex-row  bg-[url(/bg.jpg)]">
            <Sidebar />
            <Explore />
        </div>
    );
}
