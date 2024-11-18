import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Consegne } from "@/sections/Consegne";
import { Idea } from "@/sections/Idea";
import { Loghi } from "@/sections/Loghi";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Loghi />
      <Idea />
      <Consegne />
      <Footer/>
    </>
  );

}