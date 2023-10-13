"use client"
import { useState } from "react";
import { navItems } from "./MainNav"; 
import Link from "next/link";  

const MobileNav = () => {
    const [activeTab, setActiveTab] = useState<string>('feed');
    return (
        <nav className="bg-white shadow-md h-14 w-full fixed bottom-0 z-30 hidden lg:block">
            <div className="flex justify-between items-center relative h-14 w-full px-8">
                <Link href="/">
                    <img src="/assets/feed.svg" alt="feed" className="w-5 h-5" />
                </Link>
                {navItems.map((item) => (
                    <Link href={item.href} key={item.id}>
                        {item.id !== 4 ? <img src={item.icon} key={item.id} alt={item.name} className="w-5 h-5" /> : <img src={item.avatar} key={item.id} alt={item.name} className="w-7 h-7 rounded-full" />} 
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default MobileNav;