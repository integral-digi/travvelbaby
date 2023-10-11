import { EllipsisVerticalIcon, PaperAirplaneIcon } from "@heroicons/react/20/solid"

const AddReelComment = () => {
    return (
        <div className="flex items-center space-x-3">
            <div className="rounded-full w-10 h-10 flex items-center">
                <img src="/assets/fund-white.svg" alt="fund" className="w-5 h-5 justify-center m-auto" />
            </div>
            <div className="w-full text-white relative">
                <input type="text" placeholder="Write a message..." className="focus:outline-white w-full h-12 placeholder:text-white rounded-md font-normal bg-transparent px-4 border border-white" />
                <EllipsisVerticalIcon className="w-5 h-5 absolute right-4 top-3 text-white" />
            </div>
            <div className="">
                <PaperAirplaneIcon className="w-5 h-5 text-white" />
            </div>
        </div>
    )
}

export default AddReelComment;