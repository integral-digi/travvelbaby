import MainNav from "../components/MainNav";
import AccountSettings from "./components/AccountSettings";
import SettingTab from "./components/SettingTab";

const SetHome = () => {
    return (
        <div className="w-full">
            <div className="w-full">
                <MainNav />
            </div>
            <div className="w-full flex">
                <div className="w-[20%] h-full lg:hidden">
                    <SettingTab />
                </div>
                <div className="mx-auto px-16 pt-6 space-y-16 w-[80%] lg:w-full lg:px-8">
                    <AccountSettings />
                </div>
            </div>
        </div>
    )
}

export default SetHome;