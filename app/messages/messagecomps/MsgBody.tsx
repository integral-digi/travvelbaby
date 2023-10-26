import { msgData } from "./MsgData";
import MessageInput from "./MsgInput";

const MsgBody = ({ id }: any) => {
  return (
    <div className="w-full h-fit border-l border-gray-400 border-opacity-20"> 
      <div className="w-full h-full pt-8 px-8 pb-4 space-y-4">
        {msgData[id].conversation.map((msg) => (
          <div key={msg.id} className="w-[60%] h-auto space-y-4 lg:w-[90%]">  
            <div className={msg.role === "receiver" ? "w-fit space-y-4 float-left left-0 clear-both" : "w-fit clear-both"}>
              {Array.isArray(msg.message) ? ( // Checking if this is an image array
                <div className="flex items-center space-x-4 overflow-x-scroll">
                  {msg.message.map((image, imgIndex) => (
                    <div key={imgIndex} className="object-cover w-72 h-64">
                      <img src={image} alt={`image-${imgIndex}`} className="w-full h-full rounded-xl" />
                    </div>
                  ))}
                </div>
              ) : msg.gift ? (
                <div className="flex items-center space-x-8 bg-stone-500 p-6 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
                  <img src="/assets/confetti.svg" alt="confetti" className="w-10 h-10" />
                  <p className="text-2xl font-black text-white">{msg.gift}</p>
                  <img src="/assets/confetti.svg" alt="confetti" className="w-10 h-10" />
                </div>
              ) : (
                <div className="w-full shadow-sm bg-neutral-50 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl p-6">
                  <p className="text-sm font-normal w-full">{msg.message}</p>
                </div>
              )}
            </div>
          </div>
        ))}
        { msgData[id].isTyping && 
          <div className="w-fit shadow-sm bg-neutral-50 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl p-8 float-right right-0">
            <img src="/assets/loading.svg" alt="typing" className="w-12 h-auto animate-bounce" />
          </div>
        }
      </div>
      <div className="w-full bottom-0 fixed">
        <MessageInput />
      </div>
    </div>
  );
};

export default MsgBody;
