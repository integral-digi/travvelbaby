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
    {name: "jason", avatar: "/media/jason.jpg", time: "2 hrs ago", type: "photo", photo: "/media/photo1.jpg", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.", likes: 10, comments: 2},
    {name:"nina", avatar: "/media/nina.jpg", time: "3 hrs ago", type: "video", video: "/media/video1.mp4", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.", likes: 10, comments: 2},
    {name:"sheilla", avatar: "/media/sheilla.jpg", time: "4 hrs ago", type: "photo", photo: "/media/photo2.jpg", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.", likes: 10, comments: 2},
];

const Posts = () => {
    return (
        <div className="posts">
            <div className="flex items-center justify-between">
                <p className="text-zinc-800 text-sm font-normal">Recent Updates</p>
                <p className="text-stone-500 text-sm font-normal">See All</p>
            </div>
            <div className="entries">
                {recentUpdates.map((entry, index) => (
                    <div className="entry block items-center space-y-11" key={index}>
                        <div className="flex items-center justify-between">
                            <div className="flex space-x-11 items-center">
                                <img src={entry.avatar} alt="avatar" className="rounded-full w-14 h-14" />
                                <p>{entry.name}</p>
                                <p className="text-stone-500 text-sm font-normal">{entry.time}</p>
                            </div>
                            <img src="/assets/ellipsis.svg" alt="ellipsis" className="w-6 h-6" />
                        </div>
                        <div className="block">
                            <div className="">
                                <div className="block">
                                    <img src={entry.photo} alt="photo" className="w-96 h-96" />
                                </div>
                                <div className="block">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-8">
                                            <p className="text-zinc-800 text-sm font-normal">{entry.caption}</p>
                                            <div className="flex items-center space-x-2">
                                                <img src="/assets/like.svg" alt="like" className="w-6 h-6" />
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
                                            <img src="/assets/save.svg" alt="save" className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="w-full h-px bg-neutral-200" />
                            <input type="text" placeholder="Add a comment..." className="w-full h-12 text-zinc-400 text-sm font-normal px-4" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;