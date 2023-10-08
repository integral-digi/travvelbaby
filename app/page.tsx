import Posts from "./homecomps/Posts"
import ReelLife from "./homecomps/ReelLife"
import Sidenav from "./homecomps/Sidenav";

const Home = () => {
  return (
    <body className="bg-white">
      <div className="flex w-full h-full relative justify-between">
        <div className="">
          <Sidenav />
        </div>
        <div className="mx-auto px-16 space-y-16">
          <ReelLife />
          <Posts />
        </div>
      </div>
    </body>
  )
}

export default Home;