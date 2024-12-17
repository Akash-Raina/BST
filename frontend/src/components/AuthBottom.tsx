import { Link } from "react-router-dom"
import google from "../assets/google.png"

export const    AuthBottom = ({type} : {type: 'signup' | 'signin'})=>{

    return <div className="font-montserrat flex flex-col justify-center items-center gap-3 ">
        <div className="mt-3">
            {type === 'signup' ? <AskToSignIn/>: <AskToSignUp/>}
        </div>
        <div className="flex flex-col items-center justify-center w-[80%]">
            <div className="flex items-center w-full gap-3">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="text-sm text-gray-500">Or</span>
                <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <span className="text-xs mt-5 font-medium">With your social network</span>
            <div className="h-10 w-10 rounded-full bg-slate-200 flex justify-center items-center mt-2">
                <img src={google} alt="signin" className="h-5 w-5 cursor-pointer" />
            </div>
        </div>

    </div>
}

const AskToSignIn = ()=>{

    return <div className="flex gap-1 text-xs font-normal">
        <span>Already have an account?</span>
        <Link to={'/signin'} className="text-[#5446D0] font-medium">Sign in instead</Link>
    </div>
}

const AskToSignUp = ()=>{

    return <div className="flex gap-1 text-xs font-normal">
        <span>New on our platform?</span>
        <Link to={'/signup'} className="text-[#5446D0] font-medium">Create an account</Link>
    </div>
}