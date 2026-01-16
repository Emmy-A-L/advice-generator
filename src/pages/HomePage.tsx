import { useEffect, useState } from "react";
import { GiPerspectiveDiceSixFacesFour } from "react-icons/gi";
import { TiMediaPause } from "react-icons/ti";
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      alert(`Error fetching advice: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[radial-gradient(circle_at_center,rgba(82,255,170,0.08),transparent_70%)] pointer-events-none" />

      <h1 className="text-slate-500 uppercase tracking-[0.4em] text-xs font-bold mb-10 z-10">
        Advice Generator
      </h1>

      {/* Main Card */}
      <main className="relative z-10 w-full max-w-[540px] bg-slate-800/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl p-8 pb-16 flex flex-col items-center text-center transition-all duration-300">
        <h2 className="text-[#52ffaa] text-xs font-extrabold tracking-[0.25em] uppercase mb-8 drop-shadow-[0_0_8px_rgba(82,255,170,0.4)]">
          Advice #{adviceId || '...'}
        </h2>

        <div className="min-h-[120px] flex items-center justify-center mb-8">
          {loading ? (
            <div className="w-8 h-8 border-4 border-[#52ffaa] border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(82,255,170,0.3)]"></div>
          ) : (
            <blockquote className="text-[24px] md:text-[28px] font-bold text-gray-100 leading-snug tracking-tight">
              "{advice}"
            </blockquote>
          )}
        </div>

        {/* Divider / Decoration */}
        <div className="w-full flex items-center justify-center gap-4 mb-4 opacity-80">
          <div className="h-[1px] bg-gray-600 flex-1 opacity-40"></div>
          <TiMediaPause className="text-gray-200 text-xl" />
          <div className="h-[1px] bg-gray-600 flex-1 opacity-40"></div>
        </div>

        {/* Floating Action Button */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
          <button
            onClick={() => !loading && fetchAdvice()}
            disabled={loading}
            className={`
              bg-[#52ffaa] p-4 rounded-full
              text-slate-900 text-3xl
              shadow-[0_0_20px_rgba(82,255,170,0.5)]
              hover:shadow-[0_0_35px_rgba(82,255,170,0.8)]
              active:scale-95
              transition-all duration-300 ease-out
              disabled:opacity-70 disabled:cursor-not-allowed
              group
            `}
            aria-label="Get new advice"
          >
            <GiPerspectiveDiceSixFacesFour
              className={`transition-transform duration-500 ease-in-out ${loading ? "animate-spin" : "group-hover:rotate-180"}`}
            />
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-slate-500 text-sm font-medium z-10">
        <p>
          © 2025 AdviceGeneratorNG • {" "}
          <Link to="/privacy" className="text-slate-400 hover:text-[#52ffaa] transition-colors underline decoration-slate-600 hover:decoration-[#52ffaa]">
            Privacy Policy
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
