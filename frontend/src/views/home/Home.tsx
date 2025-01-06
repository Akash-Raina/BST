import Hero from "./Hero";
import Navbar from "../../components/Navbar";

const Home = ()=>{


    return <div className="h-screen w-screen flex  flex-col items-center overflow-x-hidden bg-white">
        <Navbar/>
        <Hero/>
    </div>
}

export default Home;