/**
 * @description
 * This is the source for the messages component
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
        role: string;
        message?: string | string[];
        messageType: string;
        gift?: string;
        time: string;
        isRead: boolean;
    }[];
    lastMsg: string;
    isActive: boolean;
    unreadCount: number;
}

export const msgData: MsgDataProps[] = [
    {
        id: 1,
        name: "nina",
        avatar: "/media/2u.jpg",
        isTyping: true,
        lastSeen: "Active now",
        conversation: [
            // ... (your conversation data here)
            {
                "id": 1,
                "role": "sender",
                "message": ["/media/maldives.jpg", "/media/bali.jpg", "/media/zanzibar.jpg"],
                "messageType": "image",
                "time": "5 hrs ago",
                "isRead": true,
            },
            {
                "id": 2,
                "role": "sender",
                "message": "Hey people, thanks for supporting me here on travvelbaby, I’m raising money to go to Maldives, I have zero doubt it will be a surreal experience. Help me go to Maldives and get the chance to hangout with me on my weekly podcast. Click the Support button now, Let’s go baby!!!!",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": true,
            },
            {
                "id": 3, 
                "role": "receiver",
                "message": "Awesome.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": true,
            },
            {
                "id": 4,              
                "role": "receiver",
                "gift": "$300",
                "messageType": "gift",
                "time": "5 mins ago",
                "isRead": true,
            },
            {
                "id": 5,
                "role": "receiver",
                "message": "Hey, I love you, I wanna see you go to Maldives.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": true,
            },
        ],
        lastMsg: "Hi, how you doing today? I just supported your getaway with.....",
        isActive: true,
        unreadCount: 3
    },
    {
        id: 2,
        name: "jason",
        avatar: "/media/avatar.jpg",
        isTyping: true,
        lastSeen: "Active now",
        conversation: [
            // ... (jason's conversation data here)
            {
                "id": 1,
                "role": "sender",
                "message": "Hey, I love you, I wanna see you go to Maldives.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": false,
            }
        ],
        lastMsg: "Hi, how you doing today? I just supported your getaway with.....",
        isActive: true,
        unreadCount: 0
    },
    {
        id: 3,
        name: "jane",
        avatar: "/media/9u.jpg",
        isTyping: false,
        lastSeen: "5 mins ago",
        conversation: [
            // ... (jane's conversation data here)
            {
                "id": 1,
                "role": "sender",
                "message": "Hey, I love you, I wanna see you go to Maldives.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": false,
            }
        ],
        lastMsg: "Hi, how you doing today? I just supported your getaway with.....",
        isActive: false,
        unreadCount: 1
    },
    {
        id: 4,
        name: "sheilla",
        avatar: "/media/3u.jpg",
        isTyping: false,
        lastSeen: "5 mins ago",
        conversation: [
            // ... (dianne's conversation data here)
            {
                "id": 1,
                "role": "sender",
                "message": "Hey, I love you, I wanna see you go to Maldives.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": false,
            }
        ],
        lastMsg: "Hi, how you doing today? I just supported your getaway with.....",
        isActive: false,
        unreadCount: 0
    },
    {
        id: 5,
        name: "maryliu",
        avatar: "/media/5u.jpg",
        isTyping: false,
        lastSeen: "Active now",
        conversation: [
            // ... (maryliu's conversation data here)
            {
                "id": 1,
                "role": "sender",
                "message": "Hey, I love you, I wanna see you go to Maldives.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": false,
            }
        ],
        lastMsg: "Hi, how you doing today? I just supported your getaway with.....",
        isActive: true,
        unreadCount: 2
    },
    {
        id: 6,
        name: "sindell",
        avatar: "/media/6u.jpg",
        isTyping: false,
        lastSeen: "5 mins ago",
        conversation: [
            // ... (sindell's conversation data here)
            {
                "id": 1,
                "role": "sender",
                "message": "Hey, I love you, I wanna see you go to Maldives.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": false,
            }
        ],
        lastMsg: "Hi, how you doing today? I just supported your getaway with.....",
        isActive: false,
        unreadCount: 0
    },
    {
        id: 7,
        name: "nynaeve",
        avatar: "/media/7u.jpg",
        isTyping: false,
        lastSeen: "Active now",
        conversation: [
            // ... (nynaeve's conversation data here)
            {
                "id": 1,
                "role": "sender",
                "message": "Hey, I love you, I wanna see you go to Maldives.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": false,
            }
        ],
        lastMsg: "Hi, how you doing today? I just supported your getaway with.....",
        isActive: true,
        unreadCount: 3
    },
    {
        id: 8,
        name: "Larry",
        avatar: "/media/8u.jpg",
        isTyping: false,
        lastSeen: "5 mins ago",
        conversation: [
            // ... (sheilla's conversation data here)
            {
                "id": 1,
                "role": "sender",
                "message": "Hey, I love you, I wanna see you go to Maldives.",
                "messageType": "text",
                "time": "5 mins ago",
                "isRead": false,
            }

        ],
        lastMsg: "Hi, how you doing today? I just supported your getaway with.....",
        isActive: false,
        unreadCount: 0
    },
];
