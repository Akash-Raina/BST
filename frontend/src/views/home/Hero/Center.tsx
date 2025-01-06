import { LiaTrophySolid } from "react-icons/lia"
import { PiTrophyLight } from "react-icons/pi"

const Center = ()=>{

    return <div className="h-[40%] w-[80%] rounded-md border border-green-300 m-12 bg-[#F9F7F7]">
            <div className="text-2xl font-bold font-poppins text-green-400 pl-4 mt-3">OnGoing Events</div>
            <div className="ml-4 mt-4 text-base font-semibold font-montserrat">
                <div className="flex gap-5">
                    <LiaTrophySolid size={25} className="text-green-600"/>
                    <p>BGIS 2024</p>
                </div>
                <div className="flex gap-5 mt-2">
                    <PiTrophyLight size={25} color="blue"/>
                    <p>Skyesports Championship 2024</p>
                </div>
            </div>
        </div>
}

export default Center