import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-auto h-20 bottom-2 left-4 right-4 rounded-4xl bg-slate-800/40 backdrop-blur-xl border border-white/5 md:fixed md:top-0 md:left-0 md:h-18 md:bg-transparent md:backdrop-blur-none md:border-0 flex px-8 py-8 md:py-8 items-center z-50">
      <Link to="/" className="">
        <img
          src="/icon.png"
          alt="Advice Generator Logo"
          className="w-10 h-10"
        />
      </Link>

      <Link
        to="/favourites"
        className="absolute w-10 h-10 right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 text-slate-400 hover:text-[#52ffaa] transition-colors duration-300 group"
        aria-label="Favourites"
      >
        <FaHeart className="text-4xl group-hover:drop-shadow-[0_0_8px_rgba(82,255,170,0.5)] transition-all duration-300" />
        <span className="text-sm font-semibold hidden sm:inline">Favourites</span>
      </Link>
    </div>
  );
};

export default Navbar;
