import { useState } from "react";
import { Dropdown}

const formButtons = [
    { name: "Photo/Video", icon: "media" },
    { name: "Story", icon: "forward" },
    { name: "Live", icon: "live"}
    { name: "Fundraiser", icon: "fundraiser" },
];

const NewPost = () => {
    const [body, setBody] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [video, setVideo] = useState<string>("");
    const [fundraiser, setFundraiser] = useState<string>("");

    return (
        <div className="new-post w-full space-y-8">
            <div className="">
                <input type="text" placeholder="Write Something" className="w-full h-16 rounded-2xl border border-stone-500 px-4 py-2 text-stone-500 text-sm font-normal" />
                <img src="/assets/write.svg" alt="write" className="w-6 h-6 absolute top-4 right-4" />
            </div>
            <div className="flex items-center justify-between w-full">
                {formButtons.map((button, index) => (
                    <div className="flex items-center justify-center space-x-4" key={index}>
                        <img src={`/assets/${button.icon}.svg`} alt={button.name} className="w-auto h-5" />
                        <p className="text-base font-normal">{button.name}</p>
                    </div>
                ))}
            </div>  
            <div className="right-0">
                <button className="w-40 h-10 rounded-md bg-zinc-800 text-white text-sm font-normal">Post</button>
            </div>
        </div>
    );
}

export default NewPost;