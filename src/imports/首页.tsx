import clsx from "clsx";
import imgLogo from "figma:asset/91ecff96af41b297ca6fb9c8cdac65786784fa44.png";
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
import imgBanner from "figma:asset/f96b0a66659b6f857ad58e8fabf8292c6a402199.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[250px] relative rounded-[20px] shrink-0 w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">{children}</div>
    </div>
  );
}
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
    <div className="bg-white content-stretch flex flex-col items-end relative size-full" data-name="首页">
      <div className="relative shrink-0 w-full" data-name="导航">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[300px] py-[31px] relative w-full">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1316px]">
              <LogoImage additionalClassNames="h-[54px] w-[254px]" />
              <div className="content-stretch flex items-center justify-between leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap w-[653px]">
                <p className="font-['Times_New_Roman:Bold',sans-serif] relative shrink-0 text-[#7183e4]">Homepage</p>
                <p className="font-['Times_New_Roman:Regular',sans-serif] relative shrink-0 text-black">{`System Architecture & Technical Overview`}</p>
                <p className="font-['Times_New_Roman:Regular',sans-serif] relative shrink-0 text-black">Future Applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aspect-[1920/621] relative shrink-0 w-full" data-name="banner">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBanner} />
      </div>
      <div className="content-stretch flex items-center justify-center px-0 py-[40px] relative shrink-0 w-full" data-name="项目介绍">
        <div className="content-stretch flex gap-[34px] items-center relative shrink-0">
          <div className="h-[232px] relative shrink-0 w-[448px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[128.74%] left-0 max-w-none top-[-18.68%] w-full" src={imgRectangle2} />
            </div>
          </div>
          <div className="content-stretch flex flex-col font-['Times_New_Roman:Regular',sans-serif] gap-[26px] items-start leading-[24px] not-italic relative shrink-0 text-black w-[835px]">
            <p className="relative shrink-0 text-[40px] w-full">Campus Package Delivery System</p>
            <p className="h-[144px] relative shrink-0 text-[18px] w-full">Our project is designed for a school campus environment. This system would address the challenge of the time-consuming process of delivering packages over a large distance for a student with a busy schedule. Students submit delivery requests through a simple web interface, after which staff members assign the task to a delivery robot. The robot completes the delivery while the system tracks progress and ensures the package reaches the correct destination. Upon arrival, the recipient verifies and retrieves the package, and the delivery is recorded from start to finish to ensure reliability and accountability in a real-world campus setting.</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center justify-center px-0 py-[53px] relative shrink-0 w-full" data-name="项目初衷">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0">
          <p className="font-['Times_New_Roman:Bold',sans-serif] h-[28px] leading-[20px] not-italic relative shrink-0 text-[#7183e4] text-[40px] text-center w-full">making campus life more accessible, efficient, and inclusive</p>
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1323px]">
            <div className="content-stretch flex flex-col gap-[15px] items-center justify-center relative shrink-0 w-[394px]">
              <div className="h-[272px] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle3} />
              </div>
              <p className="font-['Times_New_Roman:Regular',sans-serif] h-[63px] leading-[20px] not-italic relative shrink-0 text-[18px] text-black text-center w-full">Students with tight schedules often struggle to find time between classes and activities to walk to a delivery center.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[15px] items-center justify-center relative shrink-0 w-[398px]">
              <div className="h-[272px] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle4} />
              </div>
              <p className="font-['Times_New_Roman:Regular',sans-serif] h-[63px] leading-[20px] not-italic relative shrink-0 text-[18px] text-black text-center w-full">Injured athletes may face physical limitations that make long distances difficult or even painful.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[15px] items-center justify-center relative shrink-0 w-[396px]">
              <div className="h-[272px] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle5} />
              </div>
              <p className="font-['Times_New_Roman:Regular',sans-serif] h-[63px] leading-[20px] not-italic relative shrink-0 text-[18px] text-black text-center w-full">For students living in far-away dorms, retrieving packages can be time-consuming and inconvenient.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#7183e4] h-[3400px] relative shrink-0 w-full" data-name="历程">
        <div className="content-stretch flex flex-col items-start px-[510px] py-[71px] relative size-full">
          <div className="h-[30px] relative shrink-0 w-full">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col gap-[354px] items-center px-[243px] py-0 relative size-full">
                <p className="capitalize font-['Times_New_Roman:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[40px] text-nowrap text-white">From idea to execution</p>
                <div className="absolute content-stretch flex items-center left-0 pl-0 pr-[96px] py-[95px] top-0 w-[963px]">
                  <div className="grid-cols-[repeat(1,_fit-content(100%))] grid-rows-[fit-content(100%)_minmax(0px,_1fr)_fit-content(100%)_minmax(0px,_1fr)_fit-content(100%)_minmax(0px,_1fr)_fit-content(100%)_minmax(0px,_1fr)] h-[3000px] inline-grid mr-[-96px] relative shrink-0">
                    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start relative self-start shrink-0 w-[369px]">
                      <Wrapper>
                        <img alt="" className="absolute h-[121.01%] left-[-9.38%] max-w-none top-0 w-[109.37%]" src={imgRectangle8} />
                      </Wrapper>
                      <p className="capitalize font-['Times_New_Roman:Bold',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">Step 1 – Problem Identification</p>
                      <p className="font-['Times_New_Roman:Regular',sans-serif] h-[60px] leading-[20px] not-italic relative shrink-0 text-[18px] text-white w-[357px]">As a student who receives packages on a weekly basis, I found the existing package pickup process inefficient and frustrating.</p>
                    </div>
                    <div className="[grid-area:7_/_1] content-stretch flex flex-col gap-[16px] items-center relative self-start shrink-0 w-[369px]">
                      <Wrapper>
                        <img alt="" className="absolute h-[167.38%] left-0 max-w-none top-[-29.81%] w-full" src={imgRectangle9} />
                      </Wrapper>
                      <p className="capitalize font-['Times_New_Roman:Bold',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">Step 7 – Software System Development</p>
                      <div className="font-['Times_New_Roman:Regular',sans-serif] h-[120px] leading-[0] not-italic relative shrink-0 text-[18px] text-white w-[357px]">
                        <p className="leading-[20px] mb-0">A full software stack was developed, including:</p>
                        <ul className="list-disc">
                          <li className="mb-0 ms-[27px]">
                            <span className="leading-[20px]">Frontend: React + TypeScript</span>
                          </li>
                          <li className="mb-0 ms-[27px]">
                            <span className="leading-[20px]">Backend: Django + Django REST Framework</span>
                          </li>
                          <li className="mb-0 ms-[27px]">
                            <span className="leading-[20px]">Database: MySQL</span>
                          </li>
                          <li className="ms-[27px]">
                            <span className="leading-[20px]">Robot Client: Python</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="[grid-area:5_/_1] content-stretch flex flex-col gap-[16px] items-start relative self-start shrink-0 w-[369px]">
                      <div className="h-[250px] relative rounded-[20px] shrink-0 w-full">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle10} />
                      </div>
                      <p className="capitalize font-['Times_New_Roman:Bold',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">Step 5 – Control System Development</p>
                      <p className="font-['Times_New_Roman:Regular',sans-serif] h-[60px] leading-[20px] not-italic relative shrink-0 text-[18px] text-white w-[357px]">New motion control algorithms were developed to support the differential drive system.</p>
                    </div>
                    <div className="[grid-area:3_/_1] content-stretch flex flex-col gap-[16px] items-start relative self-start shrink-0 w-[369px]">
                      <div className="h-[250px] relative rounded-[20px] shrink-0 w-full">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle11} />
                      </div>
                      <p className="capitalize font-['Times_New_Roman:Bold',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">Step 3 – Technical Foundation</p>
                      <p className="font-['Times_New_Roman:Regular',sans-serif] h-[60px] leading-[20px] not-italic relative shrink-0 text-[18px] text-white w-[357px]">The project was built on a mature Raspberry Pi–based robotic platform discovered through research, which already supported autonomous navigation.</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center mr-[-96px] px-[201px] py-0 relative shrink-0">
                    <div className="bg-[#ff923d] h-[3130px] relative shrink-0 w-[12px]">
                      <div className="absolute h-[1711.569px] left-[calc(50%-1px)] top-[calc(50%-641.14px)] translate-x-[-50%] translate-y-[-50%] w-[58px]">
                        <div className="absolute inset-[0_0_-54.71%_0]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 2648">
                            <g id="Frame 20">
                              <circle cx="29" cy="29" fill="var(--fill-0, #ED24FF)" id="Ellipse 1" r="29" />
                              <circle cx="29" cy="399" fill="var(--fill-0, #ED24FF)" id="Ellipse 2" r="29" />
                              <circle cx="29" cy="769" fill="var(--fill-0, #ED24FF)" id="Ellipse 3" r="29" />
                              <circle cx="29" cy="1139" fill="var(--fill-0, #ED24FF)" id="Ellipse 4" r="29" />
                              <circle cx="29" cy="1509" fill="var(--fill-0, #ED24FF)" id="Ellipse 5" r="29" />
                              <circle cx="29" cy="1879" fill="var(--fill-0, #ED24FF)" id="Ellipse 6" r="29" />
                              <circle cx="29" cy="2249" fill="var(--fill-0, #ED24FF)" id="Ellipse 7" r="29" />
                              <circle cx="29" cy="2619" fill="var(--fill-0, #ED24FF)" id="Ellipse 8" r="29" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-cols-[repeat(1,_fit-content(100%))] grid-rows-[minmax(0px,_1fr)_fit-content(100%)_minmax(0px,_1fr)_fit-content(100%)_minmax(0px,_1fr)_fit-content(100%)_minmax(0px,_1fr)_fit-content(100%)] h-[3000px] inline-grid mr-[-96px] relative shrink-0">
                    <div className="[grid-area:8_/_1] content-stretch flex flex-col gap-[16px] items-start relative self-start shrink-0 w-[372px]">
                      <Wrapper>
                        <img alt="" className="absolute h-[157.29%] left-[-0.13%] max-w-none top-[-19.1%] w-full" src={imgRectangle12} />
                      </Wrapper>
                      <p className="capitalize font-['Times_New_Roman:Bold',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">{`Step 8 – System Integration & Deployment`}</p>
                      <p className="font-['Times_New_Roman:Regular',sans-serif] h-[160px] leading-[20px] not-italic relative shrink-0 text-[18px] text-white w-[357px]">Hardware and software were fully integrated to deliver a one-stop campus delivery solution, combining order management, role-based collaboration, robot dispatching, real-time delivery tracking, and secure package verification—forming a complete end-to-end delivery pipeline from order placement to final handoff.</p>
                    </div>
                    <div className="[grid-area:6_/_1] content-stretch flex flex-col gap-[16px] items-start relative self-start shrink-0 w-[372px]">
                      <div className="h-[250px] relative rounded-[20px] shrink-0 w-full">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle13} />
                      </div>
                      <p className="capitalize font-['Times_New_Roman:Bold',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">{`Step 6 – Field Testing & Validation`}</p>
                      <p className="font-['Times_New_Roman:Regular',sans-serif] h-[60px] leading-[20px] not-italic relative shrink-0 text-[18px] text-white w-[357px]">The redesigned locomotion system was tested on the Zhejiang University campus, achieving successful initial functional validation.</p>
                    </div>
                    <div className="[grid-area:4_/_1] content-stretch flex flex-col gap-[16px] items-start relative self-start shrink-0 w-[372px]">
                      <div className="h-[250px] relative rounded-[20px] shrink-0 w-full">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle14} />
                      </div>
                      <p className="capitalize font-['Times_New_Roman:Bold',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">Step 4 – Mechanical Redesign</p>
                      <p className="font-['Times_New_Roman:Regular',sans-serif] h-[60px] leading-[20px] not-italic relative shrink-0 text-[18px] text-white w-[357px]">The original Ackermann steering system was replaced with a differential drive mechanism. The overall chassis structure was redesigned to accommodate parcel storage while significantly reducing the turning radius.</p>
                    </div>
                    <div className="[grid-area:2_/_1] content-stretch flex flex-col gap-[16px] items-start relative self-start shrink-0 w-[372px]">
                      <div className="h-[250px] relative rounded-[20px] shrink-0 w-full">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle15} />
                      </div>
                      <p className="capitalize font-['Times_New_Roman:Bold',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[20px] text-white w-[min-content]">Step 2 – Idea Formation</p>
                      <p className="font-['Times_New_Roman:Regular',sans-serif] h-[60px] leading-[20px] not-italic relative shrink-0 text-[18px] text-white w-[357px]">I envisioned an autonomous delivery robot capable of transporting packages directly to dorms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black content-stretch flex h-[400px] items-center justify-center relative shrink-0 w-full" data-name="尾部">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-[330px]">
          <LogoImage additionalClassNames="aspect-[1202/256] w-full" />
          <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-center text-white w-full">Contact: 668134@culver.org</p>
        </div>
      </div>
    </div>
  );
}