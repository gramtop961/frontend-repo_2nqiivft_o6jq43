import { Menu, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#C40048] grid place-items-center text-white font-bold">
              UBD
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#C40048] leading-tight">
                Universiti Brunei Darussalam
              </p>
              <p className="text-xs text-gray-500 leading-tight">Online Application</p>
            </div>
          </a>

          {/* Center: Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#discover" className="text-gray-700 hover:text-[#C40048] transition-colors">
              Discover
            </a>
            <a href="#courses" className="text-gray-700 hover:text-[#C40048] transition-colors">
              Admission
            </a>
            <a href="#campus" className="text-gray-700 hover:text-[#C40048] transition-colors">
              Campus Life
            </a>
            <a href="#international" className="text-gray-700 hover:text-[#C40048] transition-colors">
              International
            </a>
          </nav>

          {/* Right: Icons */}
          <div className="flex items-center gap-2">
            <button aria-label="Search" className="p-2 rounded-full hover:bg-pink-50 text-gray-700 hover:text-[#C40048]">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Profile" className="p-2 rounded-full hover:bg-pink-50 text-gray-700 hover:text-[#C40048]">
              <User className="h-5 w-5" />
            </button>
            <button aria-label="Menu" className="md:hidden p-2 rounded-full hover:bg-pink-50 text-gray-700 hover:text-[#C40048]">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
