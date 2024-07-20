"use client"
import { Select } from "flowbite-react";
import { user } from "./Sidenav";

interface FormButtonProps { 
    name: string;
    icon: string;
}

const formButtons: FormButtonProps[] = [
    { name: "Photo/Video", icon: "media" },
    { name:"Live", icon: "live" },
    { name: "Story", icon: "forward" },
    { name: "Fundraiser", icon: "fundraiser" },
];

const NewPost = () => {
    return (
        <div className="new-post w-full space-y-8 block">
            <hr className="w-full h-px bg-neutral-200" />
            <div className="flex items-center justify-between">
                <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full" />
                <Select
                    defaultValue="Public"
                    className="w-fit h-fit z-30 rounded-md bg-white text-zinc-800 text-sm font-normal"
                    >
                    <option value="public">Public</option>
                    <option value="followers">Followers</option>
                    <option value="subscribers">Subscribers</option>
                </Select>
            </div>
            <div className="w-full border border-stone-500 rounded-2xl h-36 relative">
                <div className="w-full">
                    <input type="text" placeholder="Write Something" className="rounded-2xl focus:outline-none h-16 border-0 w-full px-16 py-2 text-stone-500 text-sm font-normal" />
                    <img src="/assets/write.svg" alt="write" className="w-6 h-6 absolute top-5 left-4" />
                </div>
                <hr className="w-full h-px bg-neutral-200" />
                <div className="flex items-center justify-between w-full px-4 pt-6">
                    {formButtons.map((button, index) => (
                        <div className="flex items-center justify-center space-x-4 rounded-md cursor-pointer hover:animate-pulse" key={index}>
                            <img src={`/assets/${button.icon}.svg`} alt={button.name} className="w-auto h-5" />
                            <p className="text-base font-normal">{button.name}</p>
                        </div>
                    ))}
                </div>  
            </div>
            <div className="right-0 float-right">
                <button className="w-40 h-10 rounded-md bg-stone-500 text-white text-sm font-normal">Post</button>
            </div>
        </div>
    );
}

export default NewPost;