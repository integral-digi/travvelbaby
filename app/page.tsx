import Posts from "./components/Posts";
import ReelLife from "./components/ReelLife";
import Sidenav from "./components/Sidenav";
import SuggestedActs from "./components/Suggestions";
import MainNav from "./components/MainNav";
import MobileNav from "./components/MobileNav";

const Home = () => {
  return (
    <body className="bg-white">
      <div className="top-0 w-full lg:hidden z-30">
        <MainNav />
      </div>
      <div className="flex w-full h-full relative justify-between">
        <div className="w-[20%] lg:hidden">
          <Sidenav />
        </div>
        <div className="mx-auto px-16 pt-6 space-y-16 w-[55%] lg:w-full lg:px-8">
          <ReelLife />
          <Posts />
        </div>
        <div className="pr-8 pt-6 w-[25%] lg:hidden">
          <SuggestedActs />
        </div>
        <MobileNav />
      </div>
    </body>
  )
}

export default Home;