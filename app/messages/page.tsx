"use client"
import { useState } from "react";
import MainNav from "@/app/homecomps/MainNav";
import MsgSidebar from "./messagecomps/MsgSidebar";
import MsgBody from "./messagecomps/MsgBody";
import MsgHeader from "./messagecomps/MsgHeader";

const Messages = () => {
    const [id, setId] = useState(0);
    return (
        <div className="w-full h-screen">
            <div className="top-0 w-full lg:hidden">
                <MainNav />
            </div>
            <div className="flex w-full">
                <div className="w-[33%] lg:hidden pl-8 pt-6">
                    <MsgSidebar id={id} />
                </div>
                <div className="w-full lg:w-[67%]">
                    <div className="">
                        <MsgHeader id={id} />
                    </div>
                    <MsgBody id={id} />
                </div>
            </div>
        </div>
    )
}

export default Messages;