import { EllipsisHorizontalIcon, UserPlusIcon } from "@heroicons/react/20/solid"
import exp from "constants";

export const user = {
    name: "Carl Roberts",
    avatar: "/media/1u.jpg",
    cover: "/media/cover.jpg",
    bio: "“Model based out of New York. Follow my adventure as I travel the globe.“",
    followers: 100,
    following: 100,
    posts: 100,
    subscribers: 100,
    photoCount: 100,
    videos: 100,
    about: {
        work: "Model @ Fashion Nova",
        followedBy: "nina, sheilla, maryliu, +30 others",
    },
    isVerified: true,
    photos: [
        "/media/10u.jpg",
        "/media/11u.jpg",
        "/media/12u.jpg",
        "/media/photo4.jpg",
        "/media/2u.jpg",
        "/media/photo6.jpg",
        "/media/photo7.jpg",
        "/media/photo8.jpg",
        "/media/13u.jpg",
    ],
}

const UserBio = () => {
    return (
        <div className="user-bio w-full space-y-8 top-0">
            <div className="block space-y-4 w-full">
                <img src={user.cover} alt="cover" className="w-full h-72 object-cover" />
            </div>
            <div className="block space-y-4 mx-auto relative px-24">
                <img src={user.avatar} alt="avatar" className="-mt-24 rounded-full w-36 h-36 justify-center mx-auto my-auto" />
                <span className="flex items-center justify-center space-x-3">
                    <p className="font-normal">{user.name}</p>
                    {user.isVerified ? <img src="/assets/verified.svg" alt="verified" className="cursor-pointer w-4 h-4" /> : null}
                </span>
                <span className="flex justify-center">
                    <p className="text-stone-500 text-center text-sm font-normal">{user.bio}</p>
                </span>
            <div className="flex items-center space-x-3 absolute right-24 top-20">
                <button className="p-4 bg-stone-500 font-normal flex items-center h-7 w-fit space-x-4 rounded-sm">
                    <UserPlusIcon className="text-white w-3 h-3" />
                    <p className="text-white text-sm font-normal">Subscribe</p>
                </button>
                <button className="p-4 bg-stone-500 font-normal flex items-center h-7 w-fit space-x-4 rounded-sm">
                    <img src="/assets/down.svg" alt="more" className="w-3 h-auto" />
                </button>
                <EllipsisHorizontalIcon className="text-stone-500 w-5 h-5" />
            </div>
            </div>
            
            <div className="flex space-x-16 items-center justify-center px-24 mx-auto">
                <div className="block justify-center space-y-3">
                    <p className="text-center text-stone-800 text-2xl font-normal">{user.posts}</p>
                    <p className="opacity-70 text-zinc-500 text-sm font-normal text-center">POSTS</p>
                </div>
                <div className="block justify-center space-y-3">
                    <p className="text-center text-stone-800 text-2xl font-normal">{user.followers}</p>
                    <p className="``opacity-70 text-zinc-500 text-sm font-normal text-center``">FOLLOWERS</p>
                </div>
                <div className="block justify-center space-y-3">
                    <p className="text-center text-stone-800 text-2xl font-normal">{user.following}</p>
                    <p className="opacity-70 text-zinc-500 text-sm font-normal text-center">FOLLOWING</p>
                </div>
            </div>
            <div className="block space-y-4 justify-center">
                <p className={user.about.followedBy ? "text-zinc-800 text-center text-sm font-normal" : "hidden"}>Followed by {user.about.followedBy}</p>
            </div>
            <hr className="w-full h-px bg-zinc-300" />
        </div>
    );
}

export default UserBio;
