import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[url(/bg.jpg)]">
      <div className="flex h-full w-full justify-center">
        <div className="font-mono bg-white/40 mt-[10%] h-120 w-full flex justify-center flex-col items-center">
          <h1 className="font-mono text-black text-9xl">Sign Up</h1>
          <div className="mt-[20px] text-black text-xl text-center opacity-70">
            Free financial analysis tool.
          </div>
          <div className="mt-[5px] text-black opacity-70 flex gap-4">
            <span className="">Advanced Analysis</span>
            <span className="mx-2 text-black opacity-70">•</span>
            <span className="">Custom Visualizations</span>
            <span className="mx-2 text-black opacity-70">•</span>
            <span className="">AI-powered Insights</span>
          </div>
          <div className="mt-[5%] mb-6 flex gap-4">
            <Link href="/login" className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-full text-lg">
              Login
            </Link>
            <Link href="/sign_up" className="bg-green-400 hover:bg-green-500 text-white font-medium py-3 px-8 rounded-full text-lg">
              Sign up
            </Link>
          </div>
        </div>
      </div>
     
    </div>
  );
}
