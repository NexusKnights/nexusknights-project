import ArrowIcon from '@/assets/arrow-right.svg'
import cogImage from "@/assets/PARKING.png"
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 z-1 md:pt-5 md:pb-10 h-[60vh] md:h-auto bg-[radial-gradient(ellipse_130%_60%_at_bottom_left,#183EC2,#EAEEFE_66%)] md:bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-hidden">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            <a href="https://nexusknights.github.io/nexusknights-project/FHCI-C3.pdf" target="_blank" className="flex items-center gap-1">
              ultima consegna C3
              </a>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mt-6">
              <span className="block bg-gradient-to-r from-[#2B5DFF] to-[#1A389A] text-transparent bg-clip-text">Park</span>
              <span className="block bg-gradient-to-b from-[#2B5DFF] via-[#1A389A] to-[#1A389A] text-transparent bg-clip-text">it up!</span>
            </h1>
            <p className="text-xl text-[#010DE] tracking-tight mt-6">
              Parcheggiare non è mai stato così semplice
            </p>

            <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">
  <a href="https://www.figma.com/design/nRNjpyoPVGR6mjiIM9asZe/WIREFRAMES?node-id=1-1534&t=GC56unhpwX2TCNU1-1" target="_blank">
    apri su figma
  </a>
</button>

              <button className="btn btn-text gap-1">
                <span></span>
                <ArrowIcon className="w-5 h-5 " />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[420px] md:flex-1 ">
            <Image src={cogImage} alt="cog" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};
