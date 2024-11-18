import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import F1 from "@/assets/Screenshot 2024-10-28 alle 21.22.17.png";
import F2 from "@/assets/Screenshot 2024-10-28 alle 21.26.23.png";
import F3 from "@/assets/Screenshot 2024-10-28 alle 21.26.40.png";
import F4 from "@/assets/F3.png";


import F11 from "@/assets/C1/Screenshot 2024-10-28 alle 21.30.51.png";
import F12 from "@/assets/C1/Screenshot 2024-10-28 alle 21.31.07.png";
import F13 from "@/assets/C1/Screenshot 2024-10-28 alle 21.31.16.png";
import F14 from "@/assets/C1/Screenshot 2024-10-28 alle 21.31.25.png";


import F15 from "@/assets/C3/sc31.png";
import F16 from "@/assets/C3/sc32.png";
import F17 from "@/assets/C3/sc33.png";
import F18 from "@/assets/C3/sc34.png";

import ArrowRight from "@/assets/arrow-right.svg";
export const Consegne = () => {
  const data = [
    {
      title: "C 1",
      content: (
        <div>
          <h1 className="text-black text-2xl md:text-4xl font-bold mb-8">
            Individuazione dei bisogni
          </h1>
          <h2 className="text-black text-xs md:text-sm font-normal mb-8">
            <a href="https://nexusknights.github.io/nexusknights-project/FHCI-C1.pdf" target="_blank" className="flex items-center gap-1">
              vai al file canva
              <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
            </a>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={F11}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={F12}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={F13}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={F14}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "C 2",
      content: (
        <div>
         <h1 className="text-black text-2xl md:text-4xl font-bold mb-8">
         Raffinamento e Focus</h1>
         <h2 className="text-black text-xs md:text-sm font-normal mb-8">
            <a href="https://nexusknights.github.io/nexusknights-project/FHCI-C2.pdf" target="_blank" className="flex items-center gap-1">
              vai al file canva 
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
        </a>    </h2>
          

          
          <p className="text-black text-xs md:text-sm font-normal mb-8">
          
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src = {F1}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
               src = {F2}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
               src = {F3}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
               src = {F4}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "C 3",
      content: (
        <div>
          <h1 className="text-black text-2xl md:text-4xl font-bold mb-8">
            HTA e wireframe
          </h1>
          <h2 className="text-black text-xs md:text-sm font-normal mb-8">
            <a href="https://nexusknights.github.io/nexusknights-project/FHCI-C3.pdf" target="_blank" className="flex items-center gap-1">
              vai al file canva
              <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
            </a>
            <a href="https://www.figma.com/design/g7FIVzmzavZYOragrxXhTQ/WIREFRAME-APP?node-id=28-4886&node-type=frame&t=zA2eWquwWtg2YNKg-0" target="_blank" className="flex items-center gap-1">
              apri wireframe app
              <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
            </a>
            <a href="https://www.figma.com/design/NwihD2AoTzZxfqdUj2l7er/WIREFRAME-ASSISTENTE-VOCALE?node-id=0-1&node-type=canvas&t=VbIndEevkI3ZzE1P-0" target="_blank" className="flex items-center gap-1">
              apri wireframe assistente vocale
              <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
            </a>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={F15}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={F16}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={F17}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={F18}
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-25 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
   
  ];

  return (
    <section>
      <div className="container"></div>

      <div className="w-full" >
        <Timeline data={data} />
      </div>
    </section>
  );
};
