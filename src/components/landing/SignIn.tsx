'use client'
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (<div className="mt-[5%] mb-6 text-black text-xl text-center">
              <span className="opacity-70 mb-5 block">Click Sign in to login or create an account</span>
              <button 
                  onClick={() => signIn('google')} 
                  className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1 rounded"
                >
                  Sign in
              </button>
            </div>)
}