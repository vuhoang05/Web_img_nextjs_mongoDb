
'use client'
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";


export default function Navbar() {
    const { data: session }: any = useSession();
    return (
        <header className=" bg-white p-4 fixed top-0 w-full">
            <nav className="flex items-center justify-around ">
                <Link href={'/'} className="text-3xl font-semibold text-blue-500 hover:text-blue-400">HuyHoang</Link>
                <div className="font-semibold  text-lg flex gap-8 text-gray-600">
                    <Link className="hover:text-blue-500 active:text-blue-500" href={"/about"}>About</Link>
                    <Link className="hover:text-blue-500 active:text-blue-500" href={"/img"}>Image</Link>
                    {!session ? (
                        <>
                            <Link className="hover:text-blue-500 active:text-blue-500" href={"/register"}>Register</Link>
                            <Link className="hover:text-blue-500 active:text-blue-500" href={"/login"} >Login</Link>
                        </>

                    ) : (
                        <>
                            {session.user?.email}

                            <button onClick={() => { signOut() }} className="p-2 -mt-2 text-white bg-blue-500 rounded-full">Logout</button>

                        </>
                    )}
                </div>
            </nav>
        </header>

    )
}