import { AudioWaveform, Earth, Play, PlayCircle } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Expertise from "./Expertise";

const Hero = () => {
  return (
    <div>
      <div className="wavy-back max-w-full text-white px-4 md:px-28 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section */}
          <div className="flex flex-col md:items-start items-center pt-20 relative justify-between">
            {/* Icons */}
            <div className="flex mb-5 space-x-2">
              <AudioWaveform color="#F97316" />
              <Earth color="#FBBF24" />
              <AudioWaveform color="#F97316" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl md:font-extrabold text-center md:text-start w-full md:w-[500px] font-bold leading-tight">
              Best Handyman Services At Your Doorsteps!!
            </h1>

            {/* Left Image Frame */}
            <div className="w-96 h-[450px] md:h-[500px] mt-10 border-[#FBBF24] rounded-t-full bg-transparent border-x-4 border-t-4 border-b-0 relative">
              <div className="absolute left-5 bottom-0">
                <img
                  src="https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/happy-bearded-man-smiling-while-standing-with-crossed.jpg"
                  alt="Handyman"
                  className="rounded-t-full h-[450px] md:h-[495px] w-96"
                />
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex p-2 items-center justify-center absolute flex-col w-72 md:w-60 h-[380px] md:h-[390px] bg-[#FF6D31] rounded-full border-8 right-18 md:-right-16 -bottom-80 md:bottom-16 border-[#0C0A1E]">
              <div className="flex items-center my-3 gap-1 flex-col text-black">
                <h1 className="font-bold text-4xl md:text-5xl">5K+</h1>
                <p className="font-semibold text-sm md:text-base">
                  Satisfied Clients
                </p>
              </div>
              <Separator />
              <div className="flex items-center my-3 gap-1 flex-col text-black">
                <h1 className="font-bold text-4xl md:text-5xl">120+</h1>
                <p className="font-semibold text-sm md:text-base">
                  Best Professionals
                </p>
              </div>
              <Separator />
              <div className="flex items-center my-3 gap-1 flex-col text-black">
                <h1 className="font-bold text-4xl md:text-5xl">50+</h1>
                <p className="font-semibold text-sm md:text-base">
                  Completed Projects
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-start relative justify-between mt-10 md:mt-0">
            {/* Right Image Frame */}
            <div className="w-[350px] h-[450px] md:w-96 md:h-[500px] md:mt-0 mt-[300px] border-[#FBBF24] rounded-b-full bg-transparent border-x-4 border-t-0 border-b-4 relative">
              <div className="absolute -left-5 top-0">
                <img
                  src="https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/happy-bearded-man-smiling-while-standing-with-crossed.jpg"
                  alt="Handyman"
                  className="rounded-b-full h-[450px] md:h-[495px] w-96"
                />
              </div>
            </div>

            {/* Description and Buttons */}
            <div className="flex flex-col gap-10 my-10 items-center md:items-start justify-between">
              <p className="w-96  text-gray-400 text-center md:text-start text-md">
                Fermentum possimus nostrud lacinia exercitationem eiusmod nisl
                conubia, beatae veritatis orci aspernatur? Augue ac, totam
                ligula vulputate beatae, nisl aliquid arcu ducimus curae
                hendrerit, rem.
              </p>
              <div className="flex justify-center md:justify-start items-center mb-8 gap-6">
                <Button className="bg-yellow-500 hover:bg-orange-500 text-lg uppercase rounded-sm">
                  Details
                </Button>
                <a
                  href="#"
                  className="h-12 w-12 flex items-center cursor-pointer justify-center rounded-full bg-black text-white z-50"
                >
                  <Play />
                </a>
                <p className="uppercase font-semibold text-lg">Watch video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Expertise />
    </div>
  );
};

export default Hero;
