import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { msgData } from "./MsgData";

const MsgHeader = ({ id }: any) => {
    return (
        <div className="w-full h-24 bg-neutral-50 items-center shadow-sm">
            <div className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-6">
                    <img src={msgData[id].avatar} alt="" className="w-12 h-12 rounded-full" />
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