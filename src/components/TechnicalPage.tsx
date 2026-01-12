import { Header } from "./Header";
import { Footer } from "./Footer";
import imgRectangle10 from "figma:asset/b109d6924aaa85adcec96c6b49e245a0e84258bd.png";

export function TechnicalPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative w-full min-h-screen">
      <Header currentPage="technical" />

      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full max-w-[1320px] px-4 md:px-8 py-8 md:py-12">
        <div className="h-[300px] md:h-[500px] lg:h-[674px] relative shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-lg">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgRectangle10} />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] md:gap-[36px] items-start not-italic px-0 py-[20px] md:py-[31px] relative shrink-0 text-black w-full">
          <p className="font-['Times_New_Roman:Bold',sans-serif] leading-[normal] relative shrink-0 text-[28px] md:text-[36px] lg:text-[42px] text-center w-full">
            Project Overview
          </p>
          <div className="font-['Times_New_Roman:Regular',sans-serif] leading-[24px] relative shrink-0 text-[16px] md:text-[18px] w-full space-y-5">
            <p>
              I designed and built a campus delivery robot system to explore how software can interact with the physical world to solve everyday problems.
            </p>
            <p>
              On large school campuses, delivering packages efficiently is often challenging. My project simulates a real-world delivery workflow in which students place delivery requests online, staff assign deliveries, and an autonomous robot completes the final handoff. The system tracks each delivery from start to finish, ensuring that the right package reaches the right person.
            </p>
            <p>
              Rather than focusing on a single app or feature, I approached this as a complete system. The project connects a web interface, a secure backend, a database, and a robot control program into one coordinated workflow. Each component plays a specific role, mirroring how real logistics and automation systems operate in practice.
            </p>
            <p>
              A key design principle was reliability over complexity. For example, I intentionally simplified user verification and robot communication to prioritize consistency and real-world usability. Throughout development, I emphasized clarity, accountability, and system-level thinking rather than isolated technical tricks.
            </p>
            <p>
              This project reflects my interest in engineering systems that bridge software and real-world operations, and it represents my first experience taking full ownership of a complex, end-to-end project from concept to deployment.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}