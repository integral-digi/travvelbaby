import { useState } from "react";
import { Modal } from "flowbite-react"; 
import NewPost from "./PostNew";

interface PostModalProps {
    openModal: string | undefined;
    setOpenModal: (value: string | undefined) => void;
}

const PostModal = ({openModal, setOpenModal}: PostModalProps) => {
    const [modalPlacement, setModalPlacement] = useState<string>('center');
    const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };

    return (
        <div className="">
            <Modal 
                show={openModal === 'default'} 
                position={props.modalPlacement}
                className="w-[60%] h-[496px] bg-white rounded-2xl shadow-2xl relative px-24 py-8 m-auto"
            
                onClose={() => props.setOpenModal('initial-focus')}>    
                <Modal.Header className="w-full text-zinc-800 text-2xl font-secondary flex items-center whitespace-nowrap justify-between">Create Post</Modal.Header>
                <Modal.Body className="w-full absolute top-16 z-50">
                    <NewPost />
                </Modal.Body>  
            </Modal>
            {/* <section className="bg-black opacity-80 w-screen h-screen top-0 left-0 z-50 absolute" /> */}
        </div>
    )
}

export default PostModal;