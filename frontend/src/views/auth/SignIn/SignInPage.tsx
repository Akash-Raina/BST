import { ImageSection } from "../Common/ImageSection"
import { SignInAuth } from "./SignInAuth"

const SignInPage = ()=>{

    return (
        <div className="flex min-h-screen">
          <div className="hidden md:block md:w-[60%] ">
            <ImageSection />
          </div>
          <div className="w-full lg:w-[40%] bg-[#FFDAB9]">
            <SignInAuth />
          </div>
        </div>
      )
}

export default SignInPage