import { HoverButton } from "../ui/LearnMoreBtn";
import { ButtonColorful } from "../ui/ColorfulApplyBtn";
export function HeroSection() {
  return (
    <div className=" flex-col flex items-center mt-10  ">
      <h1 className="text-5xl h-24 relative bottom-24 leading-relaxed cursor-pointer font-black text-center text-white">
        Web Developer Internship Opportunities <br /> at Cognifyz Technologies
      </h1>
      <p className="text-2xl  text-center text-[#A9A9A9]">
        Join our dynamic team at Cognifyz Technologies and gain real-world
        experience <br />
        as a Web Developer Intern for 3 months.
      </p>
      <div className="flex mt-6 gap-11 items-center justify-center">
        <HoverButton className="text-white text-xl ">Apply now</HoverButton>
      <ButtonColorful className=" text-xl cursor-pointer"/>
      </div>
      
    </div>
  );
}
