import MainNav from "../components/MainNav"
import MobileNav from "../components/MobileNav"
import Sidenav from "../components/Sidenav"
import Overview from "./components/Overview"
import PlannedTrips from "./components/PlannedTrips"
import Visualization from "./components/Visualization"

const Earnings = () => {
    return (
        <div className="w-full">
            <div className="lg:px-8">
                <div className="top-0 w-full lg:hidden">
                    <MainNav />
                </div>
                <div className="pt-6 w-full">
                    <div className="flex w-full">
                        <div className="lg:hidden">
                            <Sidenav />
                        </div>
                        <div className="block w-full space-y-8 px-16 lg:px-0 lg:max-w-lg pb-24">
                            <div className="">
                                <Overview />
                            </div>
                            <Visualization />
                            <PlannedTrips />
                        </div>
                    </div>
                </div>
            </div>
            <MobileNav />
        </div>
    );
}

export default Earnings;