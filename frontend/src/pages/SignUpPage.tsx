import { ImageSection } from "../components/ImageSection"
import { SignUpAuth } from "../components/SignUpAuth"

export const SignUpPage = () => {
    return (
        <div className="flex">
            <div className="w-[60%]"> <ImageSection /> </div>
            <div className="w-[40%]"> <SignUpAuth /> </div>
        </div>
    );
}
