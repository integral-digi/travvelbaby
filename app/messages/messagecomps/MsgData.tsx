/**
 * @description
 * This is the data for the messages component
 * 
 * @returns {MsgDataProps[]}
 * 
 **/

interface MsgDataProps {
    id: number;
    name: string;
    avatar: string;
    isTyping: boolean;
    lastSeen?: string;
    conversation: {
        id: number;
        sender: string;
        receiver: string;
        message?: string | string[];
        messageType: string;
        gift?: string;
        time: string;
        isRead: boolean;
    }[];
}

export const msgData: MsgDataProps[] = [
    {
        id: 1,
        name: "nina",
        avatar: "/media/1u.jpg",
        isTyping: true,
        lastSeen: "Active now",
        conversation: [
            {
                "id": 1,
                "sender": "nina",
                "receiver": "carlroberts",
                "message": ["/media/maldives.jpg", "/media/bali.jpg", "/media/zanzibar.jpg"],
                "messageType": "image",
                "time": "5 hrs ago",
                "isRead": true,
            },
            {
                "id": 2,
                "sender": "nina",
                "receiver": "carlroberts",
                "message": "Hey people, thanks for supporting me here on travvelbaby, I’m raising money to go to Maldives, I have zero doubt it will be a surreal experience. Help me go to Maldives and get the chance to hangout with me on my weekly podcast. Click the Support button now, Let’s go baby!!!!",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": true,
            },
            {
                "id": 3,
                "sender": "carlroberts",
                "receiver": "nina",
                "message": "Awesome.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": true,
            },
            {
                "id": 4,
                "sender": "carlroberts",
                "receiver": "nina",
                "gift": "$300",
                "messageType": "gift",
                "time": "5 mins ago",
                "isRead": true,
            },
            {
                "id": 5,
                "sender": "carlroberts",
                "receiver": "nina",
                "message": "Hey, I love you, I wanna see you go to Maldives.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": true,
            },
        ]
    },
    {
        id: 2,
        name: "jason",
        avatar: "/media/2u.jpg",
        isTyping: false,
        lastSeen: "5 mins ago",
        conversation: [
            {
                "id": 1,
                "sender": "carlroberts",
                "receiver": "jason",
                "message": "Hey, I love you, I wanna see you go to Maldives.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": true,
            },
        ]
    },
    {
        id: 3,
        name: "jane",
        avatar: "/media/3u.jpg",
        isTyping: false,
        lastSeen: "5 mins ago",
        conversation: [
            {
                "id": 1,
                "sender": "carlroberts",
                "receiver": "jane",
                "message": "Hey, I love you, I wanna see you go to Maldives.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": true,
            },
        ]
    },
    {
        id: 4,
        name: "dianne",
        avatar: "/media/4u.jpg",
        isTyping: false,
        lastSeen: "5 mins ago",
        conversation: [
            {
                "id": 1,
                "sender": "carlroberts",
                "receiver": "dianne",
                "message": "Hey, I love you, I wanna see you go to Maldives.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": true,
            },
        ]
    },
    {
        id: 5,
        name: "maryliu",
        avatar: "/media/5u.jpg",
        isTyping: false,
        lastSeen: "Active now",
        conversation: [
            {
                "id": 1,
                "sender": "carlroberts",
                "receiver": "maryliu",
                "message": "Hey, I love you, I wanna see you go to Maldives.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": false,
            },
        ]
    },
    {
        id: 6,
        name: "sindell",
        avatar: "/media/6u.jpg",
        isTyping: false,
        lastSeen: "5 mins ago",
        conversation: [
            {
                "id": 1,
                "sender": "carlroberts",
                "receiver": "sindell",
                "message": "Hey, I love you, I wanna see you go to Maldives.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": false,
            },
        ]
    },
    {
        id: 7,
        name: "nynaeve",
        avatar: "/media/7u.jpg",
        isTyping: false,
        lastSeen: "5 mins ago",
        conversation: [
            {
                "id": 1,
                "sender": "carlroberts",
                "receiver": "nynaeve",
                "message": "Hey, I love you, I wanna see you go to Maldives.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": false,
            },
        ]
    },
    {
        id: 8,
        name: "sheilla",
        avatar: "/media/8u.jpg",
        isTyping: false,
        lastSeen: "5 mins ago",
        conversation: [
            {
                "id": 1,
                "sender": "carlroberts",
                "receiver": "sheilla",
                "message": "Hey, I love you, I wanna see you go to Maldives.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": false,
            },
        ]
    },
];