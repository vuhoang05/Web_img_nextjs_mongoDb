'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const LoginForm = () => {
    const [error, setError] = useState("");
    const router = useRouter();
    const session = useSession();
    useEffect(() => {
        if (session?.status === 'authenticated') {
            router.replace("/img")
        }
    }, [session, router])
    const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Z0-9._&+-]+@([A-Z0-9.-]+\.)+[A-Z]{2,}$/i;
        return emailRegex.test(email);
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        if (!isValidEmail(email)) {
            setError("email is invalid")
            return;
        } if (!password || password.length < 6) {
            setError("Passwword must be > 6 character !!!")
            return;
        }
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password
        })
        if (res?.error) {
            setError("Invalid email or password");
            if (res?.url) router.replace("/img");

        } else { setError("") };



    }
    return (
        <div className="pt-20 flex items-center justify-center mb-auto">
            <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Login here</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input id="email" type="email" placeholder="Email" required
                            className="w-full px-4 py-2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <input id="password" type="password" placeholder="Mật khẩu" required
                            className="w-full px-4 py-2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <button type="submit"
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600">
                            Login
                        </button>
                    </div>
                    <p className="text-red-600 mb-4 mt-3 text-center">{error && error}</p>
                </form>
            </div>
        </div>

    )
}

export default LoginForm;