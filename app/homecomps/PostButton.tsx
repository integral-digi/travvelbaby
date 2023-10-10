import { useState } from "react";
import PostModal from "./PostModal";

const PostButton = () => {
    const [openModal, setOpenModal] = useState<string | undefined>();

    return (
        <div>
            <button className="h-9 bg-stone-500 rounded-sm" onClick={() => setOpenModal('default')}>
                <span className="flex items-center space-x-1 px-2">
                    <img src="/assets/add.svg" alt="add" className="w-2.5 h-2.5" />
                    <p className="text-xs text-white font-normal">New Post</p>
                </span>
            </button>
            <PostModal openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    );
}

export default PostButton;
