import { ImageSection } from "../components/ImageSection"
import { SignInAuth } from "../components/SignInAuth"

export const SignInPage = ()=>{

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