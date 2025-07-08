"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaFilm } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";

const navLinks = [
  { name: "Trang chủ", href: "/" },
  { name: "Dự án", href: "/projects" },
  { name: "Dịch vụ", href: "/services" },
  { name: "Về chúng tôi", href: "/about" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleToggleMobileMenu();
    }
  };

  // Function to check if a link is active
  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="w-full flex justify-center fixed top-0 left-0 z-50">
      <nav
        className="w-full max-w-3xl flex items-center justify-between mt-4 px-4 py-2 bg-[rgba(13,13,13,0.2)] backdrop-blur-[9px] rounded-[44px] opacity-100 shadow-lg"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-bold text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          tabIndex={0}
          aria-label="Go to homepage"
        >
          <FaFilm className="text-2xl" aria-hidden="true" />
          <span className="tracking-widest">Hey Media</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative px-1 text-base font-medium transition-colors
    outline-none focus:outline-none focus-visible:outline-none 
    focus:ring-2 focus:ring-orange-500
    ${isActive ? "text-orange-400" : "text-white hover:text-orange-300"}`}
                  tabIndex={0}
                  aria-label={link.name}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-orange-400 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Let's Talk Button */}
        <Link
          href="/contact"
          className={`hidden md:block font-semibold px-6 py-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
            isActiveLink("/contact")
              ? "bg-orange-500 text-white"
              : "bg-white text-black hover:bg-orange-100"
          }`}
          tabIndex={0}
          aria-label="Let's Talk"
        >
          Kết nối
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={handleToggleMobileMenu}
          onKeyDown={handleKeyDown}
          className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg transition-transform duration-200 hover:scale-110 active:scale-95"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          tabIndex={0}
        >
          <div
            className={`transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isMobileMenuOpen ? (
              <IoClose className="w-6 h-6" aria-hidden="true" />
            ) : (
              <IoMenu className="w-6 h-6" aria-hidden="true" />
            )}
          </div>
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen
              ? "opacity-100 max-h-[500px]"
              : "opacity-0 max-h-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              return (
                <li
                  key={link.name}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <Link
                    href={link.href}
                    className={`block px-6 py-4 text-base font-medium transition-colors focus:outline-none focus:ring-2 ${
                      isActive
                        ? "text-orange-400 "
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                    onClick={handleToggleMobileMenu}
                    tabIndex={0}
                    aria-label={link.name}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li className="p-4">
              <Link
                href="/contact"
                className={`block w-full font-semibold px-6 py-3 rounded-full text-center shadow focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
                  isActiveLink("/contact")
                    ? "bg-orange-600 text-white"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
                onClick={handleToggleMobileMenu}
                tabIndex={0}
                aria-label="Let's Talk"
              >
                Let's Talk
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
