'use client'
import ImgHome from "@/components/img";
import { set } from "mongoose";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const Register = () => {
    const [error, setError] = useState("");
    const router = useRouter();
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


        try {
            const res = await fetch("/api/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if (res.status === 400) {
                setError("This email is already register")
            }
            if (res.status === 200) {
                setError("")
                router.push("/login")
            }

        } catch (error) {
            setError("error, try again");
            console.log(error)
        }
    }
    return (
        <div className="flex justify-center items-center pt-20">
            <div className="w-96 bg-white p-8 rounded shadow">
                <h2 className="text-2xl font-bold mb-6">Đăng ký</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium" htmlFor="email">Email:</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="email" id="email" name="email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium" htmlFor="password">Mật khẩu:</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="password" id="password" name="password" required />
                    </div>
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-200"
                        type="submit">Đăng ký</button>
                    <p className="text-red-600 mb-4 mt-3 text-center">{error && error}</p>
                </form>

            </div>
        </div>

    )
}
export default Register;