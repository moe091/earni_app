"use client"
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from 'next-auth/react';
import Sidebar from "./sidebar";
import Dashboard from "./dashboard";

export default function Page() {
    const { status } = useSession();
    
    return (
        <div className="h-screen w-screen flex flex-row  bg-[url(/bg.jpg)]">
            <Sidebar />
            <Dashboard />
        </div>
    );
}

