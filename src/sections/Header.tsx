import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-50 ">
      <div className="flex justify-center items-center py-3 bg-gradient-to-r from-[#2B5DFF] to-[#1A3899] text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block"></p>
        
        <a href="https://nexusknights.github.io/nexusknights-project/FHCI-CF.pdf" target="_blank" className="flex items-center gap-1">
          Vai all&apos;ultima consegna
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
        </a>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Logo" height={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />

            <nav className="sm:hidden md:flex gap-6 text.black/60 items-center">
            
              <a href="https://nexusknights.github.io/nexusknights-project/FHCI-CF.pdf" target="_blank">Canva</a>

              <button className="btn btn-primary">
  <a href="https://www.figma.com/proto/OoOH6RZ5Q4X0sctE7Jtvhk/NEXUSKNIGHTS---PARK-IT-UP!--ORIGINAL?node-id=810-6042&p=f&t=Sw1NMV04D5m7iYUb-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=701%3A8713" target="_blank">
    Apri su figma
  </a>
</button>


            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
