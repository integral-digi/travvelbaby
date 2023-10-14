import { msgData } from "./MsgData";
import MessageInput from "./MsgInput";

const MsgBody = ({ id }: any) => {
  return (
    <div className="w-full h-full border-l border-gray-400 border-opacity-20"> 
      <div className="w-full h-full pt-8 px-8 space-y-4">
        {msgData[id].conversation.map((msg) => (
          <div key={msg.id} className={`w-[60%] h-auto space-y-4 ${msg.sender ? 'float-left, left-0 justify-start' : ' float-right, right-0 justify-end'}`}>
            <div className="w-fit space-y-4">
              {Array.isArray(msg.message) ? ( // Check if it's an array (image)
                <div className="flex items-center space-x-4">
                  {msg.message.map((image, imgIndex) => (
                    <div key={imgIndex} className="object-cover w-72 h-64">
                      <img src={image} alt={`image-${imgIndex}`} className="w-full h-full" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full bg-neutral-50 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl p-4">
                  <p className="text-sm font-normal w-full">{msg.message}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full bottom-0">
        <MessageInput />
      </div>
    </div>
  );
};

export default MsgBody;
