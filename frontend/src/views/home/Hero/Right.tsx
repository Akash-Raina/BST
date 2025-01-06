const Right = ()=>{

    return <div className="h-full w-[25%] flex flex-col border mt-12 rounded-md gap-5 justify-center items-start border-orange-200 cursor-pointer bg-[#F9F7F7]">
        <div className="text-2xl font-bold font-poppins text-orange-400 pl-4">Upcoming Matches</div>
        <Matches/>
        <Matches/>
        <Matches/>
        <Matches/>
        <Matches/>
        <Matches/>


    </div>
}

const Matches = ()=>{
    return <div className="w-[90%] flex flex-col hover:bg-orange-100 ml-4 p-4 border-orange-200 rounded-md border font-montserrat">
        <div className="w-[80%] flex justify-between mx-2">
            <span>Team A</span>
            <span>vs</span>
            <span>Team B</span>           
        </div>
        <span className="text-sm ml-2 mt-2">
            Today, 18:00 IST
        </span>
    </div>
}

export default Right