import { Header } from "./Header";
import { Footer } from "./Footer";
import { Banner } from "./Banner";
import imgRectangle13 from "figma:asset/64b74f4a13b80530e7fe1600486c9864ab6f2569.png";
import imgRectangle14 from "figma:asset/1259d93d075da4a150f30d834890e29d23d10ba0.png";
import imgRectangle15 from "figma:asset/bd95326866b030a48887615c75be5dc461f43c29.png";
import imgRectangle16 from "figma:asset/457fd9b797a1c75277324d3982674e84d68e0ae8.png";
import imgBanner from "figma:asset/1a9e2426839d54058a4b057b1edf5050c0d3237c.png";

type ApplicationCardProps = {
  image: string;
  description: string;
};

function ApplicationCard({ image, description }: ApplicationCardProps) {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative w-full">
      <div className="h-[300px] md:h-[400px] lg:h-[446px] relative rounded-[20px] shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={image} />
      </div>
      <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] md:text-[18px] text-black w-full">
        {description}
      </p>
    </div>
  );
}

export function ApplicationsPage() {
  const applications = [
    {
      image: imgRectangle13,
      description: "Our target users include individuals with physical disabilities or limited mobility who face challenges in retrieving packages through traditional delivery and pickup systems. By delivering parcels directly to accessible locations, our technology reduces physical barriers, increases independence, and ensures a more efficient and reliable delivery experience. This solution is designed to support inclusive communities by making last-mile logistics more accessible for those who need it most."
    },
    {
      image: imgRectangle14,
      description: "Another key group of target users includes individuals and communities with time-consuming responsibilities, such as students, professionals, and staff managing demanding schedules. For these users, traditional package pickup represents an unnecessary interruption to their daily workflow. By automating last-mile delivery, our service minimizes time spent on logistical tasks, allowing users to focus on higher-value activities while ensuring packages are delivered efficiently and reliably."
    },
    {
      image: imgRectangle15,
      description: "While this project was initially designed for Culver Academies, it is not limited to a single campus. Many universities and boarding schools face similar challenges, including high package volumes and dispersed residential areas. With its modular design and adaptable software system, this solution can be easily deployed across other campuses with comparable logistical needs."
    },
    {
      image: imgRectangle16,
      description: "Beyond academic campuses, this system can also be applied in residential communities where traditional postal services are unable to deliver packages directly to individual doors. In gated communities, apartment complexes, and residential areas with centralized mailrooms or security restrictions, residents are often required to travel to designated pickup locations. By enabling autonomous last-mile delivery within these communities, our solution bridges the gap between centralized delivery points and final destinations, improving convenience, efficiency, and accessibility for residents."
    }
  ];

  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative w-full min-h-screen">
      <Header currentPage="applications" />
      
      <Banner imageSrc={imgBanner} aspectRatio="1920/548" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[44px] px-4 md:px-8 py-[40px] md:py-[66px] relative shrink-0 w-full max-w-[1320px]">
        {applications.map((app, index) => (
          <ApplicationCard key={index} {...app} />
        ))}
      </div>

      <Footer />
    </div>
  );
}