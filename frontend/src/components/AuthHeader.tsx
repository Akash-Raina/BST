import logo from "../assets/pan.png"
import { Link } from "react-router-dom"
export const AuthHeader = ({type}: {type: string})=>{

    return <div className="flex flex-col ">
        <Brand/>
        <div className="flex h-[5%] gap-3 mt-10 justify-center items-center font-poppins">
            {type === "signup" ? <SignUp/>: <Login/>}
        </div>
    </div>
}

export const Brand = ()=>{

    return <div className="h-[10%]  flex items-center justify-center gap-1">
        <img src={logo} alt="logo" className="h-10"/>
        <span className="font-semibold text-2xl font-poppins text-[#2f3542]">BST</span>
    </div>
}

const SignUp = ()=>{

    return <>
        <Link to={'/signin'} className="">Sign in</Link> 
        <div className="text-[#5446D0] border-[#5446D0] border-t-2">Sign up</div>
    </>
}

const Login = ()=>{
    return <>
        <div className="text-[#5446D0] border-[#5446D0] border-t-2">Sign in</div> 
        <Link to={'/signup'} className="">Sign up</Link>
    </>
}