import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-18 bg-transparent flex px-8 py-8 md:py-8 items-center z-50">
      <Link to="/" className="">
        <img
          src="/advice-generator-high-resolution-logo-transparent.png"
          alt="Advice Generator Logo"
          className="w-12 h-12"
        />
      </Link>

      <Link
        to="/favourites"
        className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 text-slate-400 hover:text-[#52ffaa] transition-colors duration-300 group"
        aria-label="Favourites"
      >
        <FaHeart className="text-lg group-hover:drop-shadow-[0_0_8px_rgba(82,255,170,0.5)] transition-all duration-300" />
        <span className="text-sm font-semibold hidden sm:inline">Favourites</span>
      </Link>
    </div>
  );
};

export default Navbar;
