import { Field } from "formik"
import username from "../assets/logo.png"
import key from "../assets/key.png"
import { Link } from "react-router-dom"


export const SignInFields = ()=>{

    return <div className="flex flex-col gap-5 w-full bg-[#FFDAB9]">
        <div className="flex gap-2 border-b border-zinc-500 pb-1">
            <label>
                <img src={username} alt="username" className="w-7 h-7"/>
            </label>
            <Field
                type="text"
                name="username"
                placeholder="Username"
                className="outline-none bg-[#FFDAB9] placeholder-slate-500"
            />
        </div>

        <div className="flex gap-2 border-b border-zinc-500 pb-1">
            <label>
                <img src={key} alt="email" className="w-7 h-7"/>
            </label>
            <Field
                type="password"
                name="password"
                placeholder="******"
                className="outline-none bg-[#FFDAB9] placeholder-slate-500"
            />
        </div>

        <div className="flex gap-3 justify-around text-slate-500 font-small text-sm">
            <div className="flex gap-1">
                <Field
                    type="checkbox"
                />
                <label>Remember Me</label>
            </div>
            
            <Link to="" className="hover:text-[#5446D0]">Forgot Password?</Link>
        </div>

    </div>
}