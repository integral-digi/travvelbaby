import MainNav from "../homecomps/MainNav";
import UserBio from "./profilecomps/Bio";
import Uploads from "./profilecomps/Uploads";

const Profile = () => {
    return (
        <div>
            <div className="top-0 w-full lg:hidden">
                <MainNav />
            </div>
            <div className="block w-full h-full relative space-y-8">
                <UserBio />
                <div className="block px-24 pb-12">
                    <Uploads />
                </div>
            </div>
        </div>
    );
}

export default Profile;