export interface EntryProps {
    name: string;
    avatar: string;
    time: string;
    type: string;
    photo?: string;
    video?: string;
}

const recentEntries: EntryProps[] = [
    {name: "jason", avatar: "/media/jason.jpg", time: "2h", type: "photo", photo: "/media/photo1.jpg"},
    {name:"nina", avatar: "/media/nina.jpg", time: "3h", type: "video", video: "/media/video1.mp4"},
    {name:"sheilla", avatar: "/media/sheilla.jpg", time: "4h", type: "photo", photo: "/media/photo2.jpg"},
    {name:"john", avatar: "/media/john.jpg", time: "5h", type: "video", video: "/media/video2.mp4"},
];

const ReelLife = () => {
    return (
        <div className="reel-life">
            <div className="flex items-center justify-between">
                <p className="text-zinc-800 text-sm font-normal">Reel Life</p>
                <p className="text-stone-500 text-sm font-normal">Watch All</p>
            </div>
            <div className="entries">
                {recentEntries.map((entry, index) => (
                    <div className="entry flex items-center space-x-11" key={index}>
                        <div className="block justify-center items-center">
                            <img src={entry.avatar} alt="avatar" className="rounded-full w-20 h-20" />
                            <p>{entry.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReelLife;