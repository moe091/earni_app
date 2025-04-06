import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="h-screen w-screen bg-[url(/bg.jpg)] text-center flex justify-center relative">
            <div className="grid grid-cols-2 gap-4 pt-10 bg-white/40">
                <div className="font-mono mx-9 h-[500px] w-[540px] flex justify-center flex-col items-center">
                    <Link 
                        href="/dashboard/visualize" 
                        className="block w-[540px] opacity-50 hover:opacity-100 transition-opacity h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center" 
                        style={{ backgroundImage: 'url(/bargraph.jpg)' }}
                        >
                        <span className="text-black bg-white/40 text-5xl p-4">New Visualization</span>
                    </Link>
                </div>
                <div className="font-mono mx-9 h-[500px] w-[540px] flex justify-center flex-col items-center">
                    <Link 
                        href="/dashboard/visualize" 
                        className="block w-[540px] opacity-50 hover:opacity-100 transition-opacity h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center" 
                        style={{ backgroundImage: 'url(/explore.jpg)' }}
                        >
                        <span className="text-black bg-white/40 text-5xl p-4">Explore Data</span>
                    </Link>
                </div>
                <div className="font-mono mx-9 h-[500px] w-[540px] flex justify-center flex-col items-center">
                    <Link 
                        href="/dashboard/visualize" 
                        className="block w-[540px] opacity-50 hover:opacity-100 transition-opacity h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center" 
                        style={{ backgroundImage: 'url(/stonks.jpg)' }}
                        >
                        <span className="text-black bg-white/40 text-5xl p-4">New Strategy</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}