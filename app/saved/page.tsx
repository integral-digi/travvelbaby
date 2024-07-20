import MainNav from "../components/MainNav";
import MobileNav from "../components/MobileNav";
import Sidenav from "../components/Sidenav";

const SavedHome = () => {
    return (
        <div className="w-full">
            <div className="lg:px-8">
                <div className="top-0 w-full lg:hidden">
                    <MainNav />
                </div>
                <div className="w-full">
                    <div className="flex w-full">
                        <div className="lg:hidden">
                            <Sidenav />
                        </div>
                        <div className="block w-full space-y-8 px-16 lg:px-0 lg:max-w-lg pb-24 pt-6">
                            <div className="">
                                <h2 className="leading-8 text-zinc-800 text-2xl font-secondary">Saved</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileNav />
        </div>
    );
}

export default SavedHome;