"use client"
import FsLightBox from 'fslightbox-react';
import { useState } from 'react';

export interface EntryProps {
  name: string;
  avatar: string;
  time: string;
  type: string;
  photo?: string;
  video?: string;
}

const recentEntries: EntryProps[] = [
  { name: "jason", avatar: "/media/avatar.jpg", time: "2h", type: "photo", photo: "/media/photo1.jpg" },
  { name: "nina", avatar: "/media/2u.jpg", time: "3h", type: "video", video: "/media/video1.mp4" },
  { name: "sheilla", avatar: "/media/3u.jpg", time: "4h", type: "photo", photo: "/media/photo2.jpg" },
  { name: "john", avatar: "/media/1u.jpg", time: "5h", type: "video", video: "/media/video2.mp4" },
  { name: "dianne", avatar: "/media/5u.jpg", time: "6h", type: "photo", photo: "/media/photo3.jpg" },
];

const ReelLife = () => {
  const [toggler, setToggler] = useState(Array(recentEntries.length).fill(false));

  const openLightbox = (index: number) => {
    const newToggler = [...toggler];
    newToggler[index] = !newToggler[index];
    setToggler(newToggler);
  };

  return (
    <div className="reel-life w-full space-y-8">
      <div className="flex items-center justify-between top-0">
        <p className="text-zinc-800 text-sm font-normal">Reel Life</p>
        <p className="text-stone-500 text-sm font-normal">Watch All</p>
      </div>
      <div className="entries flex items-center justify-between lg:overflow-x-scroll">
        {recentEntries.map((entry, index) => (
          <div className="entry" key={index}>
            <div className="block justify-center items-center lg:space-x-4">
              <span className="w-24 h-24 rounded-full border-stone-500 border-4 flex items-center lg:w-20 lg:h-20">
                <button className="w-full h-full" onClick={() => openLightbox(index)}>
                  <img src={entry.avatar} alt="avatar" className="rounded-full w-20 h-20 justify-center mx-auto my-auto lg:w-16 lg:h-16" />
                </button>
               
              </span>
              <p className="justify-center text-center font-normal">{entry.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReelLife;
