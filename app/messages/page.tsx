"use client"
import { useState } from "react";
import MainNav from "@/app/components/MainNav";
import MsgSidebar from "./components/MsgSidebar";
import MsgBody from "./components/MsgBody";
import MsgHeader from "./components/MsgHeader";

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
