"use client"
import { useState } from "react";
import { msgData } from "./MsgData";

const MsgSidebar = ({ id, setId }: any) => {
  // const handleClick = (index: number) => {
  //     // Use the setId function to update the id in the parent component
  //     setId(index);
  // };
  
    return (
      <div className="block space-y-10 w-full h-fit overflow-x-hidden overflow-y-scroll">
        <div className="w-full space-y-10">
          <p className="text-sm text-stone-800 font-normal">Message</p>
          <div className="flex items-center space-x-4 pr-8 relative">
            <input type="text" placeholder="Search" className="w-full h-10 px-4 rounded-md border border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent placeholder:font-normal" />
            <img src="/assets/search.svg" alt="search" className="w-5 h-5 absolute top-3 right-12" />
          </div>
        </div>
        <div className="w-full space-y-0">
          {msgData.map((msg, index) => (
            <div className="w-full hover:bg-neutral-50 items-center cursor-pointer" key={index} data-testid={`msg-${index}`} onClick={setId}>
              <div className="pr-4 py-8 w-full relative">
                <div className="flex items-center space-x-4 w-max">
                  <span className="relative block">
                   <img src={msg.avatar} alt="avatar" className="w-16 h-16 rounded-full" />
                   {msg.isActive ? <div className="w-5 h-5 bg-white flex items-center rounded-full justify-center absolute bottom-0 right-1"><span className="w-3 h-3 bg-red-500 rounded-full" data-testid={`active-indicator-${index}`} /></div> : null}
                  </span>
                  <span className="space-y-5">
                    <p className="text-sm text-slate-800 font-secondary">{msg.name}</p>
                    {msg.isTyping ? <p className="text-zinc-500 text-opacity-70 text-base font-primary leading-tight">Typing...</p> : <p className="text-zinc-500 text-opacity-70 text-base font-primary leading-tight w-[80%]">{msg.lastMsg}</p>}
                  </span>
                </div>
                <span className="space-y-8 justify-end absolute top-8 right-8">
                  <span className="relative">
                    <p className="text-zinc-500 text-opacity-70 text-sm font-primary text-right whitespace-nowrap">{msg.lastSeen}</p>
                    {msg.unreadCount > 0 ? <span className="flex items-center justify-center w-5 h-5 bg-stone-500 rounded-full absolute right-0 top-16" data-testid={`unread-count-${index}`}>
                      <p className="text-xs text-white font-normal">{msg.unreadCount}</p>
                    </span> : null}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MsgSidebar;
  