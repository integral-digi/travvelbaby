import MainNav from "../homecomps/MainNav"
import SubscriptionPlans from "./subcomps/Plans"

const SubHome = () => {
    return (
        <div className="w-full">
            <div className="top-0 w-full">
                <MainNav />
            </div>
            <div className="w-full px-16 pt-8">
                <SubscriptionPlans />
            </div>
        </div>
    )
}

export default SubHome;