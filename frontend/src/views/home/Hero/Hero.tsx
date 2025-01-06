import Center from "./Center"
import Left from "./Left"
import News from "./News"
import Right from "./Right"

const Hero = ()=>{

    return <div className="flex w-full justify-center">
        <Left/>
        <div className="flex w-[40%] flex-col">
            <Center/>
            <News/>
        </div>

        <Right/>
    </div>
}

export default Hero