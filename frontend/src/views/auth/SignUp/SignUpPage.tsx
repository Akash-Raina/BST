import { ImageSection } from "../Common/ImageSection"
import { SignUpAuth } from "./SignUpAuth"

const SignUpPage = () => {
    return (
        <div className="flex min-h-screen">
          <div className="hidden md:block md:w-[60%] ">
            <ImageSection />
          </div>
          <div className="w-full lg:w-[40%] bg-[#FFDAB9]">
            <SignUpAuth />
          </div>
        </div>
      )
}

export default SignUpPage
