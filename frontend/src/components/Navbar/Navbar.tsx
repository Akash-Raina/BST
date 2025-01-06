import { useNavigate } from "react-router-dom";
import logo from "../../../src/views/assets/pan.png"
import { CiSearch } from "react-icons/ci";

const Navbar = ()=>{

    const navigate = useNavigate();

    return <div className="w-[90%] p-1 bg-slate-500 rounded-xl mt-6 flex justify-around cursor-pointer items-center font-semibold text-2xl font-poppins">

        <div className="flex items-center pl-2">
            <img src={logo} alt="logo" className="h-10"/>
            <span className="font-bold text-[#2f3542]">BST</span>
        </div>

        <div> Matches </div>

        <div> Events </div>

        <div onClick={()=>{navigate('/ranking')}}> Rankings </div>

        <div> Stats </div>
        
        <div> News </div>

        <div className="flex border items-center bg-white rounded-lg h-8">
            <CiSearch size={20} className="ml-1"/>
            <input type="text" className="w-40 outline-none mr-1 h-7"/>
        </div>

        <div> Login </div>
    </div>
}

export default Navbar;