
import ArrowIcon from '@/assets/arrow-right.svg'
import cogImage from "@/assets/PARKING.png"

import Image from "next/image";
export const Hero = () => {
  return (
    <section className="pt-8 pb-20 z-1 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_130%_60%_at_bottom_left,#183EC2,#EAEEFE_66%)] md:bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-hidden">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              ultima consegna C2
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Park it up!
            </h1>
            <p className="text-xl text-[#010DE] tracking-tight mt-6">
              Parcheggiare non è mai stato così semplice
            </p>

            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary"> apri su figma</button>
              <button className="btn btn-text gap-1">
                <span></span>
                <ArrowIcon className="w-5 h-5 " />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 ">
            <Image src={cogImage} alt="cog" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};
