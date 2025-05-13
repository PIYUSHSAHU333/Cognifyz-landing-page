import { CardSpotlight } from "../ui/FeatureCard";
export function Benefit() {
  return (
    <div id="1" className="featureCard relative grid-cols-1  grid md:grid-cols-3 mx-auto min-h-screen ">
      <div className="flex justify-center items-center">
        <CardSpotlight className="w-2/3 h-[300px] border-[#cb6ad4]">
          <p className="text-xl font-bold relative z-20 mt-2 text-[#cb6ad4]">
            Industry Exposure
          </p>
          <p className="text-white relative font-semibold text-left z-20 mt-6 ">
            {" "}
            Interns attend team meetings, sprint planning, and demos, <br />{" "}
            giving them a clear view of how professional teams operate.
          </p>
          <p className="relative z-20 text-sm  mt-5">
            Such exposure bridges the gap between academic learning and industry
            dynamics
          </p>
        </CardSpotlight>
      </div>

      <div className="flex justify-center items-center">
        <CardSpotlight className="w-2/3 h-[300px] border-[#cb6ad4]">
          <p className="text-xl font-bold relative z-20 mt-2 text-[#cb6ad4]">
            1-on-1 Mentorship
          </p>
          <p className="text-white relative font-semibold text-left z-20 mt-6 ">
            {" "}
            Each intern is paired with an experienced mentor <br /> for
            personalized guidance, career advice, and skill development.
          </p>
          <p className="relative z-20 text-sm  mt-5">
            This mentorship fosters confidence and accelerates both technical
            and personal growth
          </p>
        </CardSpotlight>
      </div>

      <div className="flex justify-center items-center">
        <CardSpotlight className="w-2/3 h-[300px] border-[#cb6ad4]">
          <p className="text-xl font-bold relative z-20 mt-2 text-[#cb6ad4]">
            Hands-on Project Work
          </p>
          <p className="text-white relative font-semibold text-left z-20 mt-6 ">
            Interns contribute to live projects, gaining real-world
            problem-solving <br />
            experience that directly impacts the product or service.
          </p>
          <p className="relative z-20 text-sm  mt-5">
            practical involvement ensures they graduate with tangible
            achievements
          </p>
        </CardSpotlight>
      </div>

      <div className="flex justify-center items-center">
        <CardSpotlight className="w-2/3 h-[300px] border-[#cb6ad4]">
          <p className="text-xl font-bold relative z-20 mt-2 text-[#cb6ad4]">
            Code Review Culture
          </p>
          <p className="text-white relative font-semibold text-left z-20 mt-6 ">
            {" "}
            Regular code reviews help interns write clean, <br /> efficient code
            while learning best practices from senior developers.
          </p>
          <p className="relative z-20 text-sm  mt-5">
            This collaborative feedback loop enhances their coding standards
          </p>
        </CardSpotlight>
      </div>

      <div className="flex justify-center items-center">
        <CardSpotlight className="w-2/3 h-[300px] border-[#cb6ad4]">
          <p className="text-xl font-bold relative z-20 mt-2 text-[#cb6ad4]">
            Career Growth Support
          </p>
          <p className="text-white relative font-semibold text-left z-20 mt-6 ">
            The internship includes resume reviews, mock interviews, <br />
            and networking sessions to boost long-term career readiness.
          </p>
          <p className="relative z-20 text-sm  mt-5">
            These initiatives equip interns with the tools and confidence needed
            to thrive in future job opportunities.
          </p>
        </CardSpotlight>
      </div>

      <div className="flex justify-center items-center">
        {" "}
        <CardSpotlight className="w-2/3 h-[300px] border-[#cb6ad4]">
          <p className="text-xl font-bold relative z-20 mt-2 text-[#cb6ad4]">
            Cross-Functional Collaboration
          </p>
          <p className="text-white relative font-semibold text-left z-20 mt-6 ">
            interns work alongside product managers, designers, and QA <br />{" "}
            engineers, gaining imp insight.
          </p>
          <p className="relative z-20 text-sm mt-5">
            This helps interns develop teamwork skills.
          </p>
        </CardSpotlight>
      </div>
    </div>
  );
}
