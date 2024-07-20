import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { msgData } from "./MsgData";
import Link from "next/link";

const MsgHeader = ({ id, setId }: any)  => {
    return (
        <div className="w-full h-24 bg-neutral-50 items-center shadow-sm">
            <div className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-6">
                    <Link href={`/${msgData[id].name}`}>
                        <img src={msgData[id].avatar} alt={msgData[id].name} className="w-12 h-12 rounded-full" />
                    </Link>
                    <div className="block space-y-1">
                        <p className="text-sm font-secondary">{msgData[id].name}</p>
                        {msgData[id].isTyping ? <p className="text-sm font-normal text-gray-400">typing...</p> : <p className="text-sm font-normal text-gray-400">{msgData[id].lastSeen}</p>}
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <img src="/assets/searchalt.svg" alt="" className="w-5 h-auto" />
                    <EllipsisVerticalIcon className="w-5 h-5 text-stone-500" />
                </div>
            </div>
        </div>
    )
}

export default MsgHeader;