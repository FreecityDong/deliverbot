import clsx from "clsx";
import imgLogo from "figma:asset/91ecff96af41b297ca6fb9c8cdac65786784fa44.png";
import imgRectangle10 from "figma:asset/b109d6924aaa85adcec96c6b49e245a0e84258bd.png";
type LogoImageProps = {
  additionalClassNames?: string;
};

function LogoImage({ additionalClassNames = "" }: LogoImageProps) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="技术">
      <div className="relative shrink-0 w-full" data-name="导航">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[300px] py-[31px] relative w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1316px]">
              <LogoImage additionalClassNames="h-[54px] w-[254px]" />
              <div className="content-stretch flex items-center justify-between leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap w-[653px]">
                <p className="font-['Times_New_Roman:Regular',sans-serif] relative shrink-0 text-black">Homepage</p>
                <p className="font-['Times_New_Roman:Bold',sans-serif] relative shrink-0 text-[#7183e4]">{`System Architecture & Technical Overview`}</p>
                <p className="font-['Times_New_Roman:Regular',sans-serif] relative shrink-0 text-black">Future Applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[1320px]">
        <div className="h-[674px] relative shrink-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[146.88%] left-0 max-w-none top-[-12.46%] w-full" src={imgRectangle10} />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[36px] items-start not-italic px-0 py-[31px] relative shrink-0 text-black w-full">
          <p className="font-['Times_New_Roman:Bold',sans-serif] leading-[normal] relative shrink-0 text-[42px] text-center w-full">Project Overview</p>
          <div className="font-['Times_New_Roman:Regular',sans-serif] h-[341px] leading-[24px] relative shrink-0 text-[18px] w-full">
            <p className="mb-[20px]">I designed and built a campus delivery robot system to explore how software can interact with the physical world to solve everyday problems.</p>
            <p className="mb-[20px]">On large school campuses, delivering packages efficiently is often challenging. My project simulates a real-world delivery workflow in which students place delivery requests online, staff assign deliveries, and an autonomous robot completes the final handoff. The system tracks each delivery from start to finish, ensuring that the right package reaches the right person.</p>
            <p className="mb-[20px]">Rather than focusing on a single app or feature, I approached this as a complete system. The project connects a web interface, a secure backend, a database, and a robot control program into one coordinated workflow. Each component plays a specific role, mirroring how real logistics and automation systems operate in practice.</p>
            <p className="mb-[20px]">A key design principle was reliability over complexity. For example, I intentionally simplified user verification and robot communication to prioritize consistency and real-world usability. Throughout development, I emphasized clarity, accountability, and system-level thinking rather than isolated technical tricks.</p>
            <p>This project reflects my interest in engineering systems that bridge software and real-world operations, and it represents my first experience taking full ownership of a complex, end-to-end project from concept to deployment.</p>
          </div>
        </div>
      </div>
      <div className="bg-black content-stretch flex h-[400px] items-center justify-center px-0 py-[15px] relative shrink-0 w-[1920px]" data-name="尾部">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-[330px]">
          <LogoImage additionalClassNames="aspect-[1202/256] w-full" />
          <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-center text-white w-full">Contact: 668134@culver.org</p>
        </div>
      </div>
    </div>
  );
}