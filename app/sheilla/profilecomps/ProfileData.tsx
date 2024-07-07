export interface UsersDataProps {
    id: number;
    username: string;
    name: string;
    avatar: string;
    cover: string;
    bio: string;
    followers: number;
    following: number;
    posts: number;
    subscribers: number;
    photoCount: number;
    videos: number;
    about: {
        work: string;
        followedBy: string;
    },
    isVerified: boolean;
    photos: string[];
}

export const formatNumbers = (numCount: number) => {
    let formattedNumber: string;
    const roundedCount = Math.round(numCount);

    switch (true) {
        case numCount >= 10000 && numCount < 100000:
            formattedNumber = `${roundedCount}K`;
            break;
        case numCount >= 100000 && numCount < 1000000:
            formattedNumber = `${(roundedCount / 1000).toFixed(1)}K`;
            break;
        case numCount >= 1000000 && numCount < 100000000:
            formattedNumber = `${(roundedCount / 1000000).toFixed(1)}M`;
            break;
        default:
            formattedNumber = `${(roundedCount / 1000000000).toFixed(1)}B`;
            break;
    }

    return formattedNumber;
};


console.log(formatNumbers(125675));

export const usersData: UsersDataProps[] = [
    {
        id: 1,
        username: "sheilla",
        name: "Sheilla Brian",
        avatar: "/media/3u.jpg",
        cover: "/media/cover.jpg",
        bio: "“Model based out of New York. Follow my adventure as I travel the globe.“",
        followers: 100,
        following: 100,
        posts: 100,
        subscribers: 100,
        photoCount: 100,
        videos: 100,
        about: {
            work: "Model @ Fashion Nova",
            followedBy: "nina, jason, maryliu, +30 others",
        },
        isVerified: true,
        photos: [
            "/media/10u.jpg",
            "/media/11u.jpg",
            "/media/12u.jpg",
            "/media/photo4.jpg",
            "/media/2u.jpg",
            "/media/photo6.jpg",
            "/media/photo7.jpg",
            "/media/photo8.jpg",
            "/media/13u.jpg",
        ],
    },
    {
        id: 2,
        username: "maryliu",
        name: "Mary Liu",
        avatar: "/media/6u.jpg",
        cover: "/media/cover.jpg",
        bio: "Travel Blogger and Globe Throtter",
        followers: 32347,
        following: 107,
        posts: 40,
        subscribers: 1360,
        photoCount: 30,
        videos: 10,
        about: {
            work: "Travel Blogger",
            followedBy: "nina, jason, sheilla, +30 others",
        },
        isVerified: true,
        photos: [
            "/media/10u.jpg",
            "/media/11u.jpg",
            "/media/12u.jpg",
            "/media/photo4.jpg",
            "/media/2u.jpg",
            "/media/photo6.jpg",
            "/media/photo7.jpg",
            "/media/photo8.jpg",
            "/media/13u.jpg",
        ],
    },

]

