import { Key } from "react";
import { UsersDataProps } from "./ProfileData";

interface UploadsProps {
    user: UsersDataProps;
}

const Uploads: React.FC<UploadsProps> = ( { user } ) => {
    return (
        <div className="block w-full h-full relative pt-6">
            <div className="grid grid-cols-3 gap-2">
                {user.photos.map((photo: string | undefined, index: Key | null | undefined) => {
                    return (
                        <div key={index} className="block w-98 h-98">
                            <img src={photo} alt="photo" className="w-full h-full object-cover" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Uploads;