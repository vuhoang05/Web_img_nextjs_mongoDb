import ImgHome from "@/components/img";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


const ImgPage = async () => {
    const session = await getServerSession();
    if (!session) {
        redirect("/");

    }
    return (
        <div className="mt-20">
            <ImgHome />
            <ImgHome />
        </div>

    )
}

export default ImgPage;