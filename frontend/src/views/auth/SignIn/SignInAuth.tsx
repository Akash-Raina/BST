import { AuthForm, InitialDataType } from "../AuthForm"
import { AuthHeader } from "../Common/AuthHeader"

export const SignInAuth = ()=>{

    const initialData = {
        username: '',
        password: ''
    }

    const onSubmit = (values: InitialDataType)=>{
        console.log("SignIn values",values)
    }

    return <div className="h-screen flex justify-center items-center">
        <div className="h-[80%] w-[90%] flex flex-col items-center justify-center">
            <AuthHeader type="login"/>
            <AuthForm type="signin" initialData={initialData} submitData={onSubmit}/>
        </div>
    </div>
}