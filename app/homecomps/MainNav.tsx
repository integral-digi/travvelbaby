"use client"
import Link from "next/link";
import { useState } from "react";
import PostButton from "./PostButton";

interface NavItemProps {
    id: number,
    name: string;
    icon?: string;
    avatar?: string;
    href: string;
}

export const navItems: NavItemProps[] = [
    { id: 1, name: "messages", icon: "/assets/message.svg", href: "#" },
    { id: 2,  name: "explore", icon: "/assets/explore.svg", href: "#" },
    { id: 3,  name: "notification", icon: "/assets/notification.svg", href: "#" },
    { id: 4,  name: "profile", avatar: "/media/1u.jpg", href: "#" },
];

const logoMain = { name: "logo", href: "/", src: "/assets/logo-main.svg" };

const MainNav = () => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const [modalPlacement, setModalPlacement] = useState<string>('center');
    const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };

    return (
        <nav className="shadow-sm top-0" role="navigation">
            <div className="flex justify-between items-center relative h-14 w-full px-8">
                <div className="cursor-pointer">
                    <Link href={logoMain.href}>
                        <img src={logoMain.src} alt={logoMain.name} className="w-auto h-6" />
                    </Link>
                </div>
                <div className="flex items-center w-96 relative -ml-4">
                    <input type="text" placeholder="Search" className="w-96 h-9 rounded-sm font-normal px-4 border border-zinc-800 border-opacity-20" /> 
                    <img src="/assets/search.svg" alt="search" className="w-5 h-5 absolute right-4" />  
                </div>
                <div className="flex items-center space-x-4">
                    <PostButton />
                    <button className="h-9 bg-stone-500 rounded-sm">
                        <p className="text-xs text-white font-normal px-2">Go Live</p>
                    </button>
                </div>
                <div className="flex items-center space-x-6 cursor-pointer right-0 my-auto">
                    {navItems.map((item) => (
                        <Link href={item.href} key={item.id}>
                            {item.id !== 4 ? <img src={item.icon} key={item.id} alt={item.name} className="w-5 h-5" /> : <img src={item.avatar} key={item.id} alt={item.name} className="w-7 h-7 rounded-full" />}    
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default MainNav;