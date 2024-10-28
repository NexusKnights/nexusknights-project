import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block"></p>
        
    
        <a href="https://nexusknights.github.io/nexusknights-project/C1/FHCI-C1.pdf" download="FHCI-C1.pdf" className="flex items-center gap-1">
          vai all'ultima consegna
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
        </a>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Logo" height={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />

            <nav className="sm:hidden md:flex gap-6 text.black/60 items-center">
              <a href="#">Il team</a>
              <a href="#">l'idea</a>
              <a href="#">canva</a>

              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                apri su figma
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};