import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Err04Page = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[radial-gradient(circle_at_center,rgba(82,255,170,0.08),transparent_70%)] pointer-events-none" />

      {/* Glitch-style 404 */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-[120px] sm:text-[180px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#52ffaa] to-[#52ffaa]/20 drop-shadow-[0_0_40px_rgba(82,255,170,0.25)] select-none">
          404
        </h1>

        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#52ffaa]/60 to-transparent my-6" />

        <h2 className="text-gray-100 text-xl sm:text-2xl font-bold mb-3">
          Page Not Found
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved.
          Here's some advice — head back home and try again!
        </p>

        <Link
          to="/"
          className="flex items-center gap-2.5 px-7 py-3.5 bg-[#52ffaa] text-slate-900 font-bold rounded-xl shadow-[0_0_20px_rgba(82,255,170,0.4)] hover:shadow-[0_0_35px_rgba(82,255,170,0.7)] transition-all duration-300 active:scale-95 group"
        >
          <FiArrowLeft className="text-lg transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>

      {/* Floating decorative orbs */}
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-[#52ffaa]/5 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-32 right-16 w-24 h-24 rounded-full bg-[#52ffaa]/5 blur-2xl pointer-events-none animate-pulse [animation-delay:1s]" />
    </div>
  );
};

export default Err04Page;
