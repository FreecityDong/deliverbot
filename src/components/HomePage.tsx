import { Header } from "./Header";
import { Footer } from "./Footer";
import { Banner } from "./Banner";
import imgRectangle2 from "figma:asset/41802439684c4aa0ae7c731315c620e404f6c0a1.png";
import imgRectangle3 from "figma:asset/cd972f2cc276d5c903908db739461f01779883ce.png";
import imgRectangle4 from "figma:asset/1f8b01c9c2c3e97f7ab40bc16ba16ec1daff8e00.png";
import imgRectangle5 from "figma:asset/8eef839aa5987c79d5a7bb57a9a222985de6182c.png";
import imgRectangle8 from "figma:asset/9f12c0dff48d622a509879b6a6450f8c1ab850a4.png";
import imgRectangle9 from "figma:asset/1730811b61f176d5fbd9f03d8f0c5a47758305bf.png";
import imgRectangle10 from "figma:asset/2af5fc695878cbd425d5ded0a4cf07df81d41dc0.png";
import imgRectangle11 from "figma:asset/33d0cba5f94a17aa484ca09c5659a5ec96c3804a.png";
import imgRectangle12 from "figma:asset/2a21711fff86d7c44901deb3484a5d2a1c7147c7.png";
import imgRectangle13 from "figma:asset/101dbc6b0793e82a8940a1b927f26123825e5bdc.png";
import imgRectangle14 from "figma:asset/e258e26bbdb4666003606a540281ae0aec1789ad.png";
import imgRectangle15 from "figma:asset/f6a7fff88abc9d13d127b137771477047ad88d85.png";
import homeBanner from "../assets/home_banner.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[200px] md:h-[250px] relative rounded-[20px] shrink-0 w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        {children}
      </div>
    </div>
  );
}

type TimelineStepProps = {
  image: string;
  title: string;
  description: string;
  isWrapper?: boolean;
};

function TimelineStep({
  image,
  title,
  description,
  isWrapper = false,
}: TimelineStepProps) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-[440px]">
      {isWrapper ? (
        <Wrapper>
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            src={image}
          />
        </Wrapper>
      ) : (
        <div className="h-[200px] md:h-[250px] relative rounded-[20px] shrink-0 w-full">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full"
            src={image}
          />
        </div>
      )}
      <p className="capitalize font-['Times_New_Roman:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] md:text-[20px] text-white w-full">
        {title}
      </p>
      <div
        className="font-['Times_New_Roman:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] md:text-[18px] text-white w-full"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}

export function HomePage() {
  const timelineSteps = [
    {
      image: imgRectangle8,
      title: "Step 1 – Problem Identification",
      description:
        "As a student who receives packages on a weekly basis, I found the existing package pickup process inefficient and frustrating.",
      isWrapper: true,
    },
    {
      image: imgRectangle15,
      title: "Step 2 – Idea Formation",
      description:
        "I envisioned an autonomous delivery robot capable of transporting packages directly to dorms",
      isWrapper: false,
    },
    {
      image: imgRectangle11,
      title: "Step 3 – Technical Foundation",
      description:
        "The project was built on a mature Raspberry Pi–based robotic platform discovered through research, which already supported autonomous navigation.",
      isWrapper: false,
    },
    {
      image: imgRectangle14,
      title: "Step 4 – Mechanical Redesign",
      description:
        "The original Ackermann steering system was replaced with a differential drive mechanism. The overall chassis structure was redesigned to accommodate parcel storage while significantly reducing the turning radius.",
      isWrapper: false,
    },
    {
      image: imgRectangle10,
      title: "Step 5 – Control System Development",
      description:
        "New motion control algorithms were developed to support the differential drive system.",
      isWrapper: false,
    },
    {
      image: imgRectangle13,
      title: "Step 6 – Field Testing & Validation",
      description:
        "The redesigned locomotion system was tested on the Zhejiang University campus, achieving successful initial functional validation.",
      isWrapper: false,
    },
    {
      image: imgRectangle9,
      title: "Step 7 – Software System Development",
      description: `A full software stack was developed, including:<ul class="list-disc ml-[27px]"><li>Frontend: React + TypeScript</li><li>Backend: Django + Django REST Framework</li><li>Database: MySQL</li><li>Robot Client: Python</li></ul>`,
      isWrapper: true,
    },
    {
      image: imgRectangle12,
      title: "Step 8 – System Integration & Deployment",
      description:
        "Hardware and software were fully integrated to deliver a one-stop campus delivery solution, combining order management, role-based collaboration, robot dispatching, real-time delivery tracking, and secure package verification—forming a complete end-to-end delivery pipeline from order placement to final handoff.",
      isWrapper: true,
    },
  ];

  return (
    <div className="bg-white content-stretch flex flex-col items-end relative w-full min-h-screen">
      <Header currentPage="homepage" />

      <Banner imageSrc={homeBanner} aspectRatio="1920/621" />

      <div
        className="content-stretch flex items-center justify-center px-4 md:px-8 py-[40px] relative shrink-0 w-full"
        data-name="项目介绍"
      >
        <div className="content-stretch flex flex-col lg:flex-row gap-[24px] md:gap-[34px] items-center relative shrink-0 max-w-[1320px] w-full">
          <div className="h-[200px] md:h-[232px] relative shrink-0 w-full lg:w-[448px] lg:flex-none">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-full w-full object-cover left-0 top-0"
                src={imgRectangle2}
              />
            </div>
          </div>
          <div className="content-stretch flex flex-col font-['Times_New_Roman:Regular',sans-serif] gap-[20px] md:gap-[26px] items-start leading-[24px] not-italic relative text-black w-full lg:flex-1 lg:min-w-0 lg:basis-0 lg:max-w-full pr-4 md:pr-6 lg:pr-8">
            <p className="relative text-[28px] md:text-[36px] lg:text-[40px] w-full">
              Campus Package Delivery System
            </p>
            <p className="relative text-[16px] md:text-[18px] w-full">
              Our project is designed for a school campus environment. This
              system would address the challenge of the time-consuming process
              of delivering packages over a large distance for a student with a
              busy schedule. Students submit delivery requests through a simple
              web interface, after which staff members assign the task to a
              delivery robot. The robot completes the delivery while the system
              tracks progress and ensures the package reaches the correct
              destination. Upon arrival, the recipient verifies and retrieves
              the package, and the delivery is recorded from start to finish to
              ensure reliability and accountability in a real-world campus
              setting.
            </p>
          </div>
        </div>
      </div>

      <div
        className="content-stretch flex flex-col items-center justify-center px-4 md:px-8 py-[40px] md:py-[53px] relative shrink-0 w-full"
        data-name="项目初衷"
      >
        <div className="content-stretch flex flex-col gap-[30px] md:gap-[40px] items-center justify-center relative shrink-0 max-w-[1323px] w-full">
          <p className="font-['Times_New_Roman:Bold',sans-serif] leading-[28px] md:leading-[20px] not-italic relative shrink-0 text-[#7183e4] text-[24px] md:text-[32px] lg:text-[40px] text-center w-full px-4">
            making campus life more accessible, efficient, and inclusive
          </p>
          <div className="content-stretch flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[40px] items-start w-full">
            <div className="content-stretch flex flex-col gap-[15px] items-center justify-center relative shrink-0 w-full">
              <div className="h-[250px] md:h-[272px] relative shrink-0 w-full">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                  src={imgRectangle3}
                />
              </div>
              <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] md:text-[18px] text-black text-center w-full">
                Students with tight schedules often struggle to find time
                between classes and activities to walk to a delivery center.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[15px] items-center justify-center relative shrink-0 w-full">
              <div className="h-[250px] md:h-[272px] relative shrink-0 w-full">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                  src={imgRectangle4}
                />
              </div>
              <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] md:text-[18px] text-black text-center w-full">
                Injured athletes may face physical limitations that make long
                distances difficult or even painful.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[15px] items-center justify-center relative shrink-0 w-full md:col-span-2 lg:col-span-1">
              <div className="h-[250px] md:h-[272px] relative shrink-0 w-full">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                  src={imgRectangle5}
                />
              </div>
              <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] md:text-[18px] text-black text-center w-full">
                For students living in far-away dorms, retrieving packages can
                be time-consuming and inconvenient.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[#7183e4] relative shrink-0 w-full py-12 md:py-16 lg:py-20"
        data-name="历程"
      >
        <div className="content-stretch flex flex-col items-center px-4 md:px-8 lg:px-16 relative w-full max-w-[1400px] mx-auto">
          <p className="capitalize font-['Times_New_Roman:Bold',sans-serif] leading-[28px] md:leading-[20px] not-italic relative shrink-0 text-[28px] md:text-[36px] lg:text-[40px] text-center text-white mb-12 md:mb-16">
            From idea to execution
          </p>

          {/* Mobile and Tablet: Single column timeline */}
          <div className="lg:hidden w-full space-y-8 md:space-y-12">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-8 h-8 bg-[#ED24FF] rounded-full -ml-4"></div>
                <div className="pl-8">
                  <TimelineStep {...step} />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Two column zigzag timeline */}
          <div className="hidden lg:block w-full">
            <div className="relative w-full mx-auto" style={{ maxWidth: 900 }}>
              <div className="absolute left-1/2 top-0 bottom-0 w-[12px] bg-[#ff923d] -ml-[6px] pointer-events-none rounded-full"></div>

              <div className="flex flex-col py-8" style={{ gap: 0 }}>
                {timelineSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative w-full grid grid-cols-2 items-start"
                  >
                    {/* Dot aligned to image vertical center (250px / 2) */}
                    <div
                      className="absolute left-1/2 w-[58px] h-[58px] bg-[#ED24FF] rounded-full"
                      style={{ top: 125, transform: "translate(-50%, -50%)" }}
                    ></div>

                    {index % 2 === 0 ? (
                      <>
                        <div className="flex justify-start">
                          <div className="pr-12 w-full flex justify-start">
                            <TimelineStep {...step} />
                          </div>
                        </div>
                        <div></div>
                      </>
                    ) : (
                      <>
                        <div></div>
                        <div className="flex justify-end">
                          <div className="pl-12 w-full flex justify-end">
                            <TimelineStep {...step} />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
