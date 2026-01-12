import imgLogo from "figma:asset/91ecff96af41b297ca6fb9c8cdac65786784fa44.png";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type HeaderProps = {
  currentPage: 'homepage' | 'technical' | 'applications';
};

export function Header({ currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (page: string) => {
    return page === currentPage
      ? "font-['Times_New_Roman:Bold',sans-serif] text-[#7183e4]"
      : "font-['Times_New_Roman:Regular',sans-serif] text-black";
  };

  return (
    <div className="relative shrink-0 w-full" data-name="导航">
      <div className="flex items-center px-4 sm:px-8 md:px-16 py-4 md:py-[31px] w-full justify-between">
        <div className="flex items-center gap-4 w-full">
          <a href="/" className="relative shrink-0 h-[40px] sm:h-[48px] md:h-[54px] w-[188px] sm:w-[220px] md:w-[254px]">
            <img
              alt="CulverBot Logo"
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src={imgLogo}
            />
          </a>
        </div>

        {/* Desktop navigation pinned to the far right */}
        <div className="hidden lg:flex flex-1 items-center justify-end leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap gap-8">
          <a href="/" className={`relative shrink-0 ${getLinkClass('homepage')}`}>
            Homepage
          </a>
          <a href="/technical" className={`relative shrink-0 ${getLinkClass('technical')}`}>
            System Architecture & Technical Overview
          </a>
          <a href="/applications" className={`relative shrink-0 ${getLinkClass('applications')}`}>
            Future Applications
          </a>
        </div>

        {/* Mobile menu button pinned to the right */}
        <button
          className="lg:hidden p-2 ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 border-t">
          <div className="flex flex-col py-4 px-4 gap-4 font-['Times_New_Roman:Regular',sans-serif] text-[16px]">
            <a 
              href="/" 
              className={`py-2 ${getLinkClass('homepage')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Homepage
            </a>
            <a 
              href="/technical" 
              className={`py-2 ${getLinkClass('technical')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              System Architecture & Technical Overview
            </a>
            <a 
              href="/applications" 
              className={`py-2 ${getLinkClass('applications')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Future Applications
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
