import { Field } from "formik"
import username from "../assets/logo.png"
import key from "../assets/key.png"

export const SignInFields = ()=>{

    return <div className="flex flex-col gap-5 w-full ">
        <div className="flex gap-2 border-b pb-1">
            <label>
                <img src={username} alt="username" className="w-8 h-8"/>
            </label>
            <Field
                type="text"
                name="username"
                placeholder="Username"
                className="outline-none"
            />
        </div>

        <div className="flex gap-2 border-b pb-1">
            <label>
                <img src={key} alt="email" className="w-8 h-8"/>
            </label>
            <Field
                type="password"
                name="password"
                placeholder="******"
                className="outline-none"
            />
        </div>

    </div>
}