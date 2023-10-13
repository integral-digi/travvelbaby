import MainNav from "../homecomps/MainNav"
import Sidenav from "../homecomps/Sidenav"
import Overview from "./earningcomp/Overview"
import PlannedTrips from "./earningcomp/PlannedTrips"
import Visualization from "./earningcomp/Visualization"

const Earnings = () => {
    return (
        <div className="w-full">
            <div className="top-0 w-full lg:hidden">
                <MainNav />
            </div>
            <div className="pt-6 w-full">
                <div className="flex w-full">
                    <Sidenav />
                    <div className="block w-full space-y-8 px-16">
                        <Overview />
                        <Visualization />
                        <PlannedTrips />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Earnings;