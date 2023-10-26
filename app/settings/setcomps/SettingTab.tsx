import Link from "next/link";
import { useMemo } from "react";
import { NavProps } from "@/app/homecomps/Sidenav";

const tabItems: NavProps[] = [
    {name: "/assets/traveler.svg", label: "Profile Information", href: "/settings/profile",  isActive: false},
    {name: "/assets/general.svg", label: "General Settings", href: "/settings/general", isActive: false},
    {name: "/assets/settings.svg", label: "Account Settings", href: "/settings/account", isActive: false},
    {name: "/assets/notification-s.svg", label: "Notification Settings", href: "/settings/notification", isActive: false},
    {name: "/assets/payment.svg", label: "Payment Settings", href: "/settings/payment", isActive: false},
    {name: "/assets/privacy.svg", label: "Privacy Settings", href: "/settings/privacy", isActive: false},
    {name: "/assets/security.svg", label: "Security Settings", href: "/settings/security", isActive: false},
];

const SettingTab = () => {
    const memoTabItems = useMemo(() => {
        return tabItems.map((item, index) => (
            <div className="block space-y-10" key={index}>
                <Link href={item.href} passHref className="flex items-center space-x-4">
                    <img src={item.name} alt="home" className="w-5 h-5" />
                    <p className="text-zinc-800 text-sm font-normal">{item.label}</p>
                </Link>
            </div>
        ));
    }, [tabItems])
    
    return (
        <nav className="bg-neutral-50 h-full ">
            <div className="space-y-20 pt-6 h-screen">
                <div className="block space-y-10 pr-20 pl-12">
                    <h2 className="text-zinc-800 text-2xl font-secondary">Settings</h2>
                    {memoTabItems}
                </div>
            </div>
        </nav>
    )
}

export default SettingTab;
