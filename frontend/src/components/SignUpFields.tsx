import { Field, FormikErrors, FormikTouched } from "formik"
import username from "../assets/logo.png"
import email from "../assets/email.png"
import key from "../assets/key.png"

interface FormFieldsName{
    username: string
    password: string
    email: string
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SignUpFieldType{
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

export const SignUpFields = ()=>{

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
                <img src={email} alt="email" className="w-8 h-8"/>
            </label>
            <Field
                type="email"
                name="email"
                placeholder="Email"
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