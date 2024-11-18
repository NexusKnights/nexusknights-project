import Image from "next/image";
import Logo from "@/assets/logopolimi.png"; // Add your logo image here

export const Loghi = () => {
  return (
    <section className="h-[100px] bg-white flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="flex justify-center mt-12">
          <Image
            src={Logo}
            alt="Logo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
