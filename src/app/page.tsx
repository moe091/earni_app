"use client"
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from 'next-auth/react';
import SignIn from "@/components/landing/SignIn";
import Dashboard from "@/components/landing/GotoDashboard";

export default function Home() {
  const { status } = useSession();
  const action_component = status === 'authenticated' ? <Dashboard children={undefined} /> : <SignIn children={undefined} />;

  return (
    <div className="h-screen w-screen bg-[url(/bg.jpg)]">
      <div className="flex h-full w-full justify-center">
        <div className="font-mono bg-white/40 mt-[10%] h-120 w-full flex justify-center flex-col items-center">
          <h1 className="font-mono text-black text-9xl">EARNI</h1>
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
          {action_component}
        </div>
      </div>
    </div>
  );
}
