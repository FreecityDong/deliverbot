import imgLogo from "figma:asset/91ecff96af41b297ca6fb9c8cdac65786784fa44.png";

export function Footer() {
  return (
    <div className="bg-black content-stretch flex min-h-[300px] md:h-[400px] items-center justify-center relative shrink-0 w-full px-4 py-8" data-name="尾部">
      <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-center justify-center relative shrink-0 w-full max-w-[330px]">
        <div className="aspect-[1202/256] w-full relative shrink-0">
          <img
            alt="CulverBot Logo"
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={imgLogo}
          />
        </div>
        <p className="font-['Times_New_Roman:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] md:text-[18px] text-center text-white w-full">
          Contact: 668134@culver.org
        </p>
      </div>
    </div>
  );
}