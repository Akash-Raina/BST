
import { apiSignUp } from "../../../services/authService"
import { AuthForm, InitialDataType } from "../AuthForm"
import { AuthHeader } from "../Common/AuthHeader"


export const SignUpAuth = ()=>{

    const initialData = {
        username: '',
        password: '',
        email:''
    }

    const onSubmit = async(values : InitialDataType)=>{
        const data = values;
        await apiSignUp(data)
    }

    return <div className="h-screen flex justify-center items-center">
        <div className="h-[80%] w-[90%] flex flex-col items-center justify-center">
            <AuthHeader type="signup"/>
            <AuthForm type="signup" initialData={initialData} submitData={onSubmit}/>
        </div>
    </div>
}

