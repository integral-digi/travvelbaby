"use client"
import { useEffect, useRef } from "react";
import AddReelComment from "./ReelComment";
import { Progress } from "flowbite-react";

interface LightboxProps {
  media: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Lightbox = ({ media, isOpen, setIsOpen }: LightboxProps) => {
  const closeLightbox = () => {
    setIsOpen(false);
  };

  const mediaRef = useRef<HTMLImageElement | HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && mediaRef.current) {
      const timeout = setTimeout(() => {
        setIsOpen(false);
      }, 10000); // Use 10000 instead of '10000'

      mediaRef.current.addEventListener("ended", () => {
        clearTimeout(timeout);
        setIsOpen(false);
      });
    }
  }, [isOpen]);

  return (
    <div className="w-full h-full">
      {isOpen && (
        <div className="fixed top-0 w-1/2 h-full z-50 lg:w-[90%]">
          <div className="w-full">
            <div className="">
              <Progress progress={0} />
            </div>
            <div className="lightbox-overlay fixed top-0 left-0 w-full h-full bg-black opacity-80" />
            <div className="lightbox bg-zinc-800 rounded-lg h-full min-h-screen w-full flex items-center justify-center relative">
              <div className="absolute bottom-12 mx-auto z-50 justify-center w-full px-12">
                  <AddReelComment />
              </div>
              {media.endsWith(".mp4") ? (
                <video autoPlay controls className="w-full h-full object-cover">
                  <source src={media} type="video/mp4" />
                </video>
              ) : (
                <img src={media} alt="lightbox" className="w-full h-full object-cover" />
              )}
              <button onClick={closeLightbox} className="absolute top-4 right-4 bg-stone-500 text-white px-4 py-2 rounded-md">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lightbox;