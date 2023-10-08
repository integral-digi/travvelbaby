"use client"
import { useState } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

interface PostProps {
    name: string;
    avatar: string;
    time: string;
    type: string;
    photo?: string;
    video?: string;
    caption?: string;
    likes?: number;
    comments?: number;
}

const recentUpdates: PostProps[] = [
    {name: "jason", avatar: "/media/avatar.jpg", time: "2 hrs ago", type: "photo", photo: "/media/photo2.jpg", caption: "Cultural immersion at its finest. From trying exotic dishes at local markets to participating in traditional ceremonies, I've embraced every opportunity to connect with the culture here. Travel is the best teacher. 🌍 #TravelGoals #LocalFlavors #CulturalImmersion", likes: 10, comments: 2},
    {name:"nina", avatar: "/media/2u.jpg", time: "3 hrs ago", type: "photo", photo: "/media/photo1.jpg", caption: "Every corner of this city is a work of art waiting to be discovered. 🎨 #StreetArt #UrbanExploration", likes: 10, comments: 2},
    {name:"sheilla", avatar: "/media/3u.jpg", time: "4 hrs ago", type: "video", video: "/media/video1.mp4", caption: "Sunsets like these make me appreciate the simple joys of life. 🌅 #NatureLover #SunsetMagic", likes: 10, comments: 2},
];

const Posts = () => {
    const [like, setLike] = useState(false);
    const handleLike = () => {
        setLike(true)
        return (
            <button className="">
                <img src="/assets/comment.svg" alt="comment" className="w-6 h-6" /> 
            </button>
        )
    }
    
    return (
        <div className="posts">
            <div className="entries space-y-6">
                {recentUpdates.map((entry, index) => (
                    <div className="entry block items-center space-y-8" key={index}>
                        <div className="flex items-center justify-between">
                            <div className="flex space-x-4 items-center w-full">
                                <img src={entry.avatar} alt="avatar" className="rounded-full w-12 h-12 justify-center" />
                                <p className="">{entry.name}</p>
                                <p className="text-stone-500 text-sm font-normal">{entry.time}</p>
                            </div>
                            <span className="w-6 h-6">
                                <EllipsisHorizontalIcon />
                            </span>
                        </div>
                        <div className="block space-y-8">
                            <div className="space-y-8">
                                <div className="block">
                                    {entry.type === "photo" ? <img src={entry.photo} alt="photo" className="w-full h-auto" />: <video src={entry.video} className="w-full h-auto" />}
                                </div>
                                <div className="block space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-8">
                                            <div className="flex items-center space-x-2">
                                                <button className="" onClick={handleLike}>
                                                    <img src="/assets/like.svg" alt="like" className="w-6 h-6" />
                                                </button>
                                                <p className="text-zinc-800 text-sm font-normal">{entry.likes}</p>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <img src="/assets/comment.svg" alt="comment" className="w-6 h-6" />
                                                <p className="text-zinc-800 text-sm font-normal">{entry.comments}</p>
                                            </div>
                                            <div className="w-6 h-6">
                                                <img src="/assets/fund.svg" alt="fund" className="w-6 h-6" />
                                            </div>
                                        </div>
                                        <div className="w-6 h-6">
                                            <img src="/assets/bookmark.svg" alt="save" className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="block">
                                        <p className="text-zinc-800 text-sm font-normal">{entry.caption}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <hr className="w-full h-px bg-neutral-200" />
                                <input type="text" placeholder="Add a comment..." className="w-full h-12 text-zinc-400 text-sm font-normal px-4 focus:outline-none caret-sky-950" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;