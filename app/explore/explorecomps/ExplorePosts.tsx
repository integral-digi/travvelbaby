interface ExploreDataProps {
    id: number;
    user: string;
    photo?: string;
    video?: string;
    likes: number;
    comments: number;
    fundRaised: number;
}

const exploreData: ExploreDataProps[] = [
    { id: 1, user: "sheilla", photo: "/media/photo8.jpg", likes: 15000, comments: 774, fundRaised: 203 },
    { id: 2, user: "sheilla", photo: "/media/photo6.jpg", likes: 15000, comments: 774, fundRaised: 203 },
    { id: 3, user: "sheilla", photo: "/media/10u.jpg", likes: 15000, comments: 774, fundRaised: 203 },
    { id: 4, user: "sheilla", photo: "/media/11u.jpg", likes: 15000, comments: 774, fundRaised: 203 },
    { id: 5, user: "sheilla", photo: "/media/12u.jpg", likes: 15000, comments: 774, fundRaised: 203 },
    { id: 6, user: "sheilla", photo: "/media/9u.jpg", likes: 15000, comments: 774, fundRaised: 203 },
    { id: 7, user: "sheilla", photo: "/media/photo6.jpg", likes: 15000, comments: 774, fundRaised: 203 },
    { id: 8, user: "sheilla", photo: "/media/photo7.jpg", likes: 15000, comments: 774, fundRaised: 203 },
    { id: 9, user: "sheilla", photo: "/media/photo8.jpg", likes: 15000, comments: 774, fundRaised: 203 }
]
const ExPosts = () => {
    return (
        <div className="flex flex-1 flex-wrap space-y-4 space-x-4">
            {exploreData.map((post)=>(
                <div key={post.id}>
                    {
                    post.photo ? 
                    <div key={post.id} className="w-96 h-96">
                        <img src={post.photo} alt={post.user}className="w-full h-full object-cover" /> 
                    </div> 
                    :  <div key={post.id} className="w-96 h-96">
                            <video src={post.video} className="w-full h-full object-cover" />
                        </div>
                    }
                </div>    
            ))}
        </div>
    )
}

export default ExPosts;