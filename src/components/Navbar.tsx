// src/components/Navbar.tsx
'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Navbar() {
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
        </div>
        
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : session ? (
            <div className="flex items-center space-x-4">
              <span>Hello, {session.user?.name || session.user?.email}</span>
              <button 
                onClick={() => signOut()} 
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
              >
                Sign out
              </button>
            </div>
          ) : (
            <button 
              onClick={() => signIn('google')} 
              className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}