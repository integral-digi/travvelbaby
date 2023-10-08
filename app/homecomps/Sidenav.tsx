import Link from "next/link";
import { useMemo } from "react";

interface NavProps {
    name: string;
    label: string;
    href: string;
    isActive: boolean;
}

const navItems: NavProps[] = [
    {name: "/assets/feed.svg", label: "Feed", href: "#",  isActive: false},
    {name: "/assets/explore.svg", label: "Explore", href: "#", isActive: false},
    {name: "/assets/traveler.svg", label: "Travelers", href: "#", isActive: false},
    {name: "/assets/notification.svg", label: "Notification", href: "#", isActive: false},
    {name: "/assets/save.svg", label: "Saved", href: "#", isActive: false},
    {name: "/assets/shop.svg", label: "Shop", href: "#", isActive: false},
    {name: "/assets/earnings.svg", label: "Earnings", href: "#", isActive: false},
    {name: "/assets/settings.svg", label: "Settings", href: "#", isActive: false},
    {name: "/assets/help.svg", label: "Help", href: "#", isActive: false},
    {name: "/assets/logout.svg", label: "Logout", href: "#", isActive: false}
];

const user = {
    name: "carl",
    avatar: "1u.jpg",
    followerCount: 10,
    followingCount: 20,
    postCount: 30,
};

const Sidenav = () => {
    const memoNavItems = useMemo(() => {
        return navItems.map((item, index) => (
            <div className="block space-y-10" key={index}>
                <Link href={item.href} passHref className="flex items-center space-x-4">
                    <img src={item.name} alt="home" className="w-5 h-5" />
                    <p className="text-zinc-800 text-sm font-normal">{item.label}</p>
                </Link>
            </div>
        ));
    }, [navItems])
    
    return (
        <nav className="bg-neutral-50 h-full">
            <div className="block space-y-10">
                <div className="justify-center space-y-4">
                    <img src={user.avatar} alt="avatar" className="rounded-full w-12 h-12 justify-center" />
                    <p className="text-zinc-800 text-sm font-normal">{user.name}</p>
                </div>
                <div className="flex items-center justify-between space-x-11">
                    <span className="space-y-1">
                        <p className="text-stone-800 text-base font-normal">{user.postCount}</p>
                        <p className="opacity-70 text-zinc-500 text-xs font-normal">POSTS</p>
                    </span>
                    <span className="space-y-1">
                        <p className="text-stone-800 text-base font-normal">{user.followerCount}</p>
                        <p className="opacity-70 text-zinc-500 text-xs font-normal">FOLLOWERS</p>
                    </span>
                    <span className="space-y-1">
                        <p className="text-stone-800 text-base font-normal">{user.followingCount}</p>
                        <p className="opacity-70 text-zinc-500 text-xs font-normal">FOLLOWING</p>
                    </span>
                </div>
            </div>
            <div className="block space-y-10 pr-40 pl-12">
                {memoNavItems}
            </div>
        </nav>
    )
}

export default Sidenav;
