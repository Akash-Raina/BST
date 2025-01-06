import { LiaTrophySolid } from "react-icons/lia";
import { PiTrophyLight } from "react-icons/pi"; 

const Left = ()=>{

    return <div className="h-[40%] w-[25%] rounded-md border border-violet-300 m-12 bg-[#F9F7F7]">
        <div className="text-2xl font-bold font-poppins text-violet-500 pl-4 mt-3">Upcoming Events</div>
        <div className="ml-4 mt-4 text-base font-semibold font-montserrat">
            <div className="flex gap-5">
                <LiaTrophySolid size={25} className="text-violet-600"/>
                <p>BGIS 2025</p>
            </div>
            <div className="flex gap-5 mt-2">
                <PiTrophyLight size={25} color="blue"/>
                <p>BGMI Masters Series Season 4</p>
            </div>
        </div>
    </div>
}

export default Left