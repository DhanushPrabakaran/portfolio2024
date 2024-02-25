import { HeroParallaxDemo } from "@/components/hero";
import {About} from "@/components/about"
import {TypewriterEffectSmoothDemo} from "@/components/TypewriterEffectSmoothDemo"
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroParallaxDemo></HeroParallaxDemo>
    <About></About>
    <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo>
    </>
  );
}
