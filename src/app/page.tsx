import { BeamsBackground } from "./components/ui/beams-background";
import { HeroSection } from "./components/sections/Hero";
import { Navbar } from "./components/ui/mini-navbar";
import { Benefit } from "./components/sections/Benefits";
import { Features } from "./components/sections/Qualification";
import { Footerdemo } from "./components/ui/Footer";
export default function Home() {
  return (
    <div>
      <BeamsBackground>
        <div className="min-h-screen">
          <Navbar />
          <HeroSection />
        </div>
        <Benefit />
        <Features/>
        <Footerdemo/>
      </BeamsBackground>
    </div>
  );
}
