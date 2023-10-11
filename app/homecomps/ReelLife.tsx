"use client"
import { useState } from 'react';
import Lightbox from './Lightbox';

// Entry properties interface
export interface EntryProps {
  name: string;
  avatar: string;
  time: string;
  type: string;
  photo?: string;
  video?: string;
}

const ReelLife = () => {
  const recentEntries: EntryProps[] = [
    { name: "jason", avatar: "/media/avatar.jpg", time: "2h", type: "photo", photo: "/media/photo6.jpg" },
    { name: "nina", avatar: "/media/2u.jpg", time: "3h", type: "video", video: "/media/video3.mp4" },
    { name: "sheilla", avatar: "/media/3u.jpg", time: "4h", type: "photo", photo: "/media/photo7.jpg" },
    { name: "carlroberts", avatar: "/media/1u.jpg", time: "5h", type: "video", video: "/media/video2.mp4" },
    { name: "dianne", avatar: "/media/5u.jpg", time: "6h", type: "photo", photo: "/media/photo8.jpg" },
  ];

  const [openLightboxes, setOpenLightboxes] = useState<boolean[]>(recentEntries.map(() => false));

  const toggleLightbox = (index: number) => {
    const updatedOpenLightboxes = [...openLightboxes];
    updatedOpenLightboxes[index] = !updatedOpenLightboxes[index];
    setOpenLightboxes(updatedOpenLightboxes);
  };

  /**
   * Checks if the entry has media
   * @param entry - Entry object
   * @returns True if the entry has media, false otherwise
   */
  const hasMedia = (entry: EntryProps): entry is EntryProps & { photo: string; video: string } =>
    Boolean(entry.photo || entry.video);

  return (
    <div className="reel-life w-full space-y-8">
      <div className="flex items-center justify-between top-0">
        <p className="text-zinc-800 text-sm font-normal">Reel Life</p>
        <p className="text-stone-500 text-sm font-normal">Watch All</p>
      </div>
      <div className="entries flex items-center justify-between lg:overflow-x-scroll">
        {recentEntries.filter(hasMedia).map((entry, index) => (
          <div className="entry" key={`${entry.name}-${entry.type}`}>
            <div className="block justify-center items-center lg:space-x-4">
              <span className="w-24 h-24 rounded-full border-stone-500 border-4 flex items-center lg:w-20 lg:h-20">
                <button className="w-full h-full" onClick={() => toggleLightbox(index)}>
                  <img src={entry.avatar} alt="avatar" className="rounded-full w-20 h-20 justify-center mx-auto my-auto lg:w-16 lg:h-16" />
                </button>
              </span>
              <p className="justify-center text-center font-normal">{entry.name}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Render Lightbox components based on the isOpen state */}
      {recentEntries.filter(hasMedia).map((entry, index) => (
        openLightboxes[index] && (
          <Lightbox key={`lightbox-${index}`} media={entry.photo || entry.video} isOpen={openLightboxes[index]} setIsOpen={(value) => toggleLightbox(index)} />
        )
      ))}
    </div>
  );
}

export default ReelLife;