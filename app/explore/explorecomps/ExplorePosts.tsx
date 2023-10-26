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
    { id: 1, user: "sheilla", video: "/media/video1.mp4", likes: 15000, comments: 774, fundRaised: 203 },
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
        <div className="inline-flex flex-wrap space-y-4 space-x-4">
            {exploreData.map((post)=>(
                <div>
                    {
                    post.photo ? 
                    <div key={post.id} className="w-80 h-80">
                        <img src={post.photo} alt={post.user}className="w-full h-full object-cover" /> 
                    </div> 
                    :  <div key={post.id} className="w-auto h-80">
                            <video src={post.video} className="w-full h-full object-cover" />
                        </div>
                    }
                </div>    
            ))}
        </div>
    )
}

export default ExPosts;