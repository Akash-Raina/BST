import { ImageSlider } from "./ImageSlider"

export const ImageSection = () => {
    return (
      <div className="h-screen flex justify-center bg-gradient-to-br from-indigo-950 to-indigo-900 p-6">
        <div className="w-[85%] overflow-hidden">
          <ImageSlider />
        </div>
      </div>
    )
  }