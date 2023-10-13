import MainNav from "../homecomps/MainNav"
import MobileNav from "../homecomps/MobileNav"
import Sidenav from "../homecomps/Sidenav"
import Overview from "./earningcomp/Overview"
import PlannedTrips from "./earningcomp/PlannedTrips"
import Visualization from "./earningcomp/Visualization"

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