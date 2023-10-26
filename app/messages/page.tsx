"use client"
import { useState } from "react";
import MainNav from "@/app/homecomps/MainNav";
import MsgSidebar from "./messagecomps/MsgSidebar";
import MsgBody from "./messagecomps/MsgBody";
import MsgHeader from "./messagecomps/MsgHeader";

const Message = () => {
    const [id, setId] = useState(0);

    // Function to update the id
    const handleIdChange = (newId: number) => {
        setId(newId);
    };

    return (
        <div className="w-full h-screen">
            <div className="top-0 w-full lg:hidden">
                <MainNav />
            </div>
            <div className="flex">
                <div className="w-[33%] lg:hidden pl-8 pt-6">
                    <MsgSidebar id={id} />
                </div>
                <div className="w-[67%] lg:w-full">
                    <div className="">
                        {/* Pass id and handleIdChange function to child components */}
                        <MsgHeader id={id} setId={handleIdChange} />
                    </div>
                    {/* Pass id to MsgBody component */}
                    <MsgBody id={id} />
                </div>
            </div>
        </div>
    )
}

export default Message;
