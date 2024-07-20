import MainNav from "../components/MainNav"
import SuggestedActs from "../components/Suggestions"
import ExPosts from "./components/ExplorePosts"

const ExHome = () => {
    return (
        <div className="w-full">
            <div className="top-0 w-full">
                <MainNav />
            </div>
            <div className="flex px-8 pt-8">
                <div className="w-3/4">
                    <ExPosts />
                </div>
                <div className="w-1/4">
                    <SuggestedActs />
                </div>
            </div>
        </div>
    )
}

export default ExHome;