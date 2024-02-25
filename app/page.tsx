import { HeroParallaxDemo } from "@/components/hero";
import {About} from "@/components/about"
import {NavbarDemo} from "@/components/navbar"
import {TypewriterEffectSmoothDemo} from "@/components/TypewriterEffectSmoothDemo"
import {TracingBeamDemo} from "@/components/projects"
import Image from "next/image";

export default function Home() {
  return (
    <>
    <NavbarDemo />
    <HeroParallaxDemo></HeroParallaxDemo>
    <About></About>
    <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo>
    <TracingBeamDemo />
    </>
  );
}
