import { AudioWaveform, Earth, PlayCircle } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Expertise from "./Expertise";

const Hero = () => {
  return (
    <div>
      <div className="wavy-back w-full text-white px-28">
        <div className="flex flex-col md:flex-row justify-between">
          {/* left */}
          <div className="flex flex-col md:items-start mb-5 items-center pt-20 relative justify-between">
            <div className="flex">
              <AudioWaveform color="#F97316" />
              <Earth color="#FBBF24" />
              <AudioWaveform color="#F97316" />
            </div>
            <h1 className="text-6xl font-extrabold leading-none ">
              Best Handyman
              <br /> Services At Your <br />
              Doorsteps !!
            </h1>
            <div className=" w-96 h-[500px] mt-10 border-[#FBBF24] rounded-t-full bg-transparent border-x-4 border-t-4 border-b-0  relative">
              <div className="absolute left-5 bottom-0">
                <img
                  src="https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/happy-bearded-man-smiling-while-standing-with-crossed.jpg"
                  alt="img"
                  className="rounded-t-full h-[495px]"
                />
              </div>
            </div>
            <div className="flex p-2 items-center justify-center absolute flex-col w-60 h-[390px] bg-[#FF6D31] rounded-full border-8 -right-16 bottom-16 border-[#0C0A1E]">
              <div className="flex items-center my-3 gap-1 flex-col text-black">
                <h1 className="font-bold text-5xl">5K+</h1>
                <p className="font-semibold">Satisfied Clients</p>
              </div>
              <Separator />
              <div className="flex items-center my-3 gap-1 flex-col text-black">
                <h1 className="font-bold text-5xl">120+</h1>
                <p className="font-semibold">Best Professionals</p>
              </div>
              <Separator />
              <div className="flex items-center my-3 gap-1 flex-col text-black">
                <h1 className="font-bold text-5xl">50+</h1>
                <p className="font-semibold">Completed Projects</p>
              </div>
            </div>
          </div>
          {/* right */}

          <div className="flex flex-col items-center md:items-start   relative justify-between">
            <div className=" w-96 h-[500px] border-[#FBBF24] rounded-b-full bg-transparent border-x-4 border-t-0 border-b-4  relative">
              <div className="absolute -left-5 top-0">
                <img
                  src="https://demo.xperthemes.com/handon/wp-content/uploads/sites/11/2024/07/happy-bearded-man-smiling-while-standing-with-crossed.jpg"
                  alt="img"
                  className="rounded-b-full h-[495px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-10 my-10 items-center justify-between">
              <p className=" w-96 text-gray-400 text-md">
                Fermentum possimus nostrud lacinia exercitationem eiusmod nisl
                conubia, beatae veritatis orci aspernatur? Augue ac, totam
                ligula vulputate beatae, nisl aliquid arcu ducimus curae
                hendrerit, rem.
              </p>
              <div className="flex justify-between items-center mb-8 gap-6">
                <Button className="bg-yellow-500 hover:bg-orange-500 text-lg uppercase rounded-sm">
                  Details
                </Button>

                <PlayCircle size={54} className="cursor-pointer" />
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
