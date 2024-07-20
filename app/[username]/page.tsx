"use client";
import { useParams } from "next/navigation";
import { usersData } from "./components/ProfileData";
import MainNav from "../components/MainNav";
import UserBio from "./components/Bio";
import Uploads from "./components/Uploads";

const UserProfile = () => {
  const { username } = useParams();

  // Find the user data based on the username
  const user = usersData.find((u) => u.username === username);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <div className="lg:px-8">
        <div className="top-0 w-full lg:hidden">
          <MainNav />
        </div>
        <div className="block w-full h-full relative space-y-8">
          <UserBio user={user} />
          <div className="block px-24 pb-12 lg:px-0">
            <Uploads user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
