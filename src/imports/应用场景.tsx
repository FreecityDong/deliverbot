import clsx from "clsx";
import imgLogo from "figma:asset/91ecff96af41b297ca6fb9c8cdac65786784fa44.png";
import imgRectangle13 from "figma:asset/64b74f4a13b80530e7fe1600486c9864ab6f2569.png";
import imgRectangle14 from "figma:asset/1259d93d075da4a150f30d834890e29d23d10ba0.png";
import imgRectangle15 from "figma:asset/bd95326866b030a48887615c75be5dc461f43c29.png";
import imgRectangle16 from "figma:asset/457fd9b797a1c75277324d3982674e84d68e0ae8.png";
import imgBanner from "figma:asset/1a9e2426839d54058a4b057b1edf5050c0d3237c.png";
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
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="应用场景">
      <div className="relative shrink-0 w-full" data-name="导航">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[300px] py-[31px] relative w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1316px]">
              <LogoImage additionalClassNames="h-[54px] w-[254px]" />
              <div className="content-stretch flex items-center justify-between leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap w-[653px]">
                <p className="font-['Times_New_Roman:Regular',sans-serif] relative shrink-0 text-black">Homepage</p>
                <p className="font-['Times_New_Roman:Regular',sans-serif] relative shrink-0 text-black">{`System Architecture & Technical Overview`}</p>
                <p className="font-['Times_New_Roman:Bold',sans-serif] relative shrink-0 text-[#7183e4]">Future Applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aspect-[1920/548] relative shrink-0 w-full" data-name="banner">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBanner} />
      </div>
      <div className="gap-[44px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_fit-content(100%))] px-0 py-[66px] relative shrink-0 w-[1320px]">
        <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[13px] items-start relative self-start shrink-0 w-[638px]">
          <div className="h-[446px] relative rounded-[20px] shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle13} />
          </div>
          <p className="font-['Times_New_Roman:Regular',sans-serif] h-[191px] leading-[normal] not-italic relative shrink-0 text-[18px] text-black w-full">Our target users include individuals with physical disabilities or limited mobility who face challenges in retrieving packages through traditional delivery and pickup systems. By delivering parcels directly to accessible locations, our technology reduces physical barriers, increases independence, and ensures a more efficient and reliable delivery experience. This solution is designed to support inclusive communities by making last-mile logistics more accessible for those who need it most.</p>
        </div>
        <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[13px] items-start relative self-start shrink-0 w-[638px]">
          <div className="h-[446px] relative rounded-[20px] shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle14} />
          </div>
          <p className="font-['Times_New_Roman:Regular',sans-serif] h-[191px] leading-[normal] not-italic relative shrink-0 text-[18px] text-black w-full">Another key group of target users includes individuals and communities with time-consuming responsibilities, such as students, professionals, and staff managing demanding schedules. For these users, traditional package pickup represents an unnecessary interruption to their daily workflow. By automating last-mile delivery, our service minimizes time spent on logistical tasks, allowing users to focus on higher-value activities while ensuring packages are delivered efficiently and reliably.</p>
        </div>
        <div className="[grid-area:2_/_1] content-stretch flex flex-col gap-[13px] items-start relative self-start shrink-0 w-[638px]">
          <div className="h-[446px] relative rounded-[20px] shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle15} />
          </div>
          <p className="font-['Times_New_Roman:Regular',sans-serif] h-[191px] leading-[normal] not-italic relative shrink-0 text-[18px] text-black w-full">While this project was initially designed for Culver Academies, it is not limited to a single campus. Many universities and boarding schools face similar challenges, including high package volumes and dispersed residential areas. With its modular design and adaptable software system, this solution can be easily deployed across other campuses with comparable logistical needs.</p>
        </div>
        <div className="[grid-area:2_/_2] content-stretch flex flex-col gap-[13px] items-start relative self-start shrink-0 w-[638px]">
          <div className="h-[446px] relative rounded-[20px] shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle16} />
          </div>
          <p className="font-['Times_New_Roman:Regular',sans-serif] h-[191px] leading-[normal] not-italic relative shrink-0 text-[18px] text-black w-full">Beyond academic campuses, this system can also be applied in residential communities where traditional postal services are unable to deliver packages directly to individual doors. In gated communities, apartment complexes, and residential areas with centralized mailrooms or security restrictions, residents are often required to travel to designated pickup locations. By enabling autonomous last-mile delivery within these communities, our solution bridges the gap between centralized delivery points and final destinations, improving convenience, efficiency, and accessibility for residents.</p>
        </div>
      </div>
      <div className="bg-black content-stretch flex h-[400px] items-center justify-center px-0 py-[15px] relative shrink-0 w-full" data-name="尾部">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-[330px]">
          <LogoImage additionalClassNames="aspect-[1202/256] w-full" />
          <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-center text-white w-full">Contact: 668134@culver.org</p>
        </div>
      </div>
    </div>
  );
}