import { ImageSection } from "../components/ImageSection"
import { SignInAuth } from "../components/SignInAuth"

export const SignInPage = ()=>{

    return <>
        <div className="flex">
            <div className="w-[60%]"> <ImageSection /> </div>
            <div className="w-[40%]"> <SignInAuth /> </div>
        </div>
    </>
}