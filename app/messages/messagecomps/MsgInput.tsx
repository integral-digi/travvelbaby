"use client"
import { useState } from 'react';

const MessageInput = () => {
    const [message, setMessage] = useState('');
    
    const handleSend = () => {
        if (message !== '') {
            setMessage('');
        }
    };
    
    return (
        <div className="message-input relative">
            <hr className='border-gray-400 border-opacity-20 w-full' />
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className='border-none w-full h-16 px-4 py-2 text-sm font-normal focus:outline-none'
            />
            <div className='absolute right-4 top-4 flex items-center space-x-3 z-50'>
                <span className='flex items-center space-x-3'>
                    <img src="/assets/emoji.svg" alt="emoji" className='w-5 h-5' />
                    <img src="/assets/attachment.svg" alt="attachment" className='w-5 h-5' />
                    <img src="/assets/mic.svg" alt="microphone" className='w-5 h-5' />
                </span>
                <button onClick={handleSend} className= "bg-stone-500 rounded-md">
                    <p className='px-8 py-2 text-white text-sm font-secondary'>
                        Send
                    </p>
                </button>
            </div>
        </div>
    );
};

export default MessageInput;
