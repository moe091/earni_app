'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Link from "next/link"

export default function Providers({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession()

    return (
        <div className="mt-[5%] mb-6 text-black text-xl text-center">
            <span className="opacity-70 mb-5 block">Welcome, {session.user?.name || session.user?.email}. Go to your dashboard to get started!</span>
            <Link className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1 rounded" href="/dashboard">
                Dashboard
            </Link>
        </div>)
}