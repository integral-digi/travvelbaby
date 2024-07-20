"use client"
import { UserPlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const suggestedUsers = [
    {name: "maryliu", avatar: "/media/6u.jpg", description: "Interacts with your content"},
    {name: "nina", avatar: "/media/2u.jpg", description: "Followed by your followers"},
    {name: "sheilla", avatar: "/media/3u.jpg", description: "Follows you"},
    {name: "alice", avatar: "/media/alice.jpg", description: "Followed by your followers"},
];

const SuggestedActs = () => {
    return (
        <div className="suggested-acts w-full space-y-4">
            <div className="space-y-8">
                <p className="text-zinc-400 text-xs font-secondary">Suggested Accounts</p>  
            </div>
            <div className="entries block space-y-4">
                {suggestedUsers.map((entry, index) => (
                    <div className="entry" key={index}>
                        <div className="block space-y-4 w-full">
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <Link href={`/${entry.name}`} className="flex items-center justify-center space-x-3">
                                        <div className="w-8 h-8 rounded-full">
                                            <img src={entry.avatar} alt="avatar" className="rounded-full w-full h-full justify-center mx-auto my-auto object-cover" />
                                        </div>
                                        <span className="">
                                            <p className="font-normal">{entry.name}</p>
                                            <p className="text-stone-500 text-xs font-normal">{entry.description}</p>
                                        </span>
                                    </Link>
                                </div>
                                
                                <button className="text-stone-500 font-normal flex items-center h-7 w-fit px-4 border border-stone-500 rounded-sm">
                                    <UserPlusIcon className="w-3 h-3" />
                                </button>
                            </div>
                            <hr className="w-full h-px bg-gray-200" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mx-auto">
                <button className="" type="button">
                    <p className="text-stone-500 text-sm font-normal">See All</p>
                </button>
            </div>
        </div>
    );
}

export default SuggestedActs;