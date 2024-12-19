import { Form, Formik } from "formik";
import { SignUpFields } from "./SignUp/SignUpFields";
import { AuthBottom } from "./Common/AuthBottom";
import { SignInFields } from "./SignIn/SignInFields";

export interface InitialDataType{
    email?: string
    password?: string
    username?: string
}

interface AuthFormType{
    initialData: InitialDataType
    submitData : (values: InitialDataType) => void
    type: "signup" | "signin"
}

export const AuthForm = ({initialData, submitData, type}: AuthFormType)=>{

    return <div className="font-poppins ml-6 w-[75%]">
        <Formik
            initialValues={initialData}
            onSubmit={submitData}
        >
            <Form className="flex flex-col items-center">
                {type === "signup" ? <SignUpFields/>: <SignInFields/>}              
                <button 
                    type="submit" 
                    className=" w-[65%] h-9 rounded-xl bg-[#5446D0] mt-7 text-white font-semibold">
                    {type === "signup" ? "Sign Up": "Sign In"}
                </button>
                <AuthBottom type={type}/>
            </Form>
        </Formik>
    </div>
}