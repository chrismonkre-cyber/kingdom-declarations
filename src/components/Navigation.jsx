import { Link, useLocation } from "react-router-dom";
import { Home, Sun, BookOpen, PenLine, Library, Info } from "lucide-react";

const NAV_ITEMS = [
  { path: "/", label: "Home", icon: Home },
  { path: "/daily", label: "Daily", icon: Sun },
  { path: "/declarations", label: "Declarations", icon: BookOpen },
  { path: "/journal", label: "Journal", icon: PenLine },
  { path: "/resources", label: "Resources", icon: Library },
  { path: "/about", label: "About", icon: Info },
];

export default function Navigation() {
  const { pathname } = useLocation();
  const LOGO_URL = "https://media.base44.com/images/public/6a14b4612922ae0aa777f0ce/214e1a5c8_icon-512.png";

  return (
    <>
      {/* Desktop top nav */}
      <nav className="hidden md:flex items-center justify-between px-6 py-3 bg-black/70 backdrop-blur-md border-b border-amber-500/30 sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-3 font-black text-lg tracking-wide" style={{ color: "#d4a843" }}>
          <img
            src={LOGO_URL}
            alt="Kingdom Mandate Ministry Logo"
            className="w-8 h-8 rounded-full object-cover"
          />
          Kingdom Declarations
        </Link>
        <div className="flex gap-1">
          {NAV_ITEMS.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                pathname === path
                  ? "bg-amber-500/20 text-amber-300"
                  : "text-amber-100/80 hover:text-amber-200 hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center py-2 px-1 bg-black/85 backdrop-blur-md border-t border-amber-500/30">
        {NAV_ITEMS.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-[10px] font-semibold transition-all ${
              pathname === path
                ? "text-amber-300"
                : "text-amber-100/60"
            }`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}