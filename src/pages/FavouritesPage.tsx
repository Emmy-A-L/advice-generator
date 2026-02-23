import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

interface Favourite {
  id: number;
  advice: string;
}

const FavouritesPage = () => {
  const [favourites, setFavourites] = useState<Favourite[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favourites");
    if (stored) {
      setFavourites(JSON.parse(stored));
    }
  }, []);

  const removeFavourite = (id: number) => {
    const updated = favourites.filter((fav) => fav.id !== id);
    setFavourites(updated);
    localStorage.setItem("favourites", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center px-4 py-8 pt-28 relative overflow-hidden font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[radial-gradient(circle_at_center,rgba(82,255,170,0.08),transparent_70%)] pointer-events-none" />

      <h1 className="text-slate-500 uppercase tracking-[0.4em] text-xs font-bold mb-2 z-10">
        Advice Generator
      </h1>

      <h2 className="text-gray-100 text-2xl md:text-3xl font-bold mb-2 z-10 flex items-center gap-3">
        <FaHeart className="text-[#52ffaa] text-xl drop-shadow-[0_0_8px_rgba(82,255,170,0.5)]" />
        Your Favourites
      </h2>
      <p className="text-slate-500 text-sm mb-10 z-10">
        {favourites.length} saved {favourites.length === 1 ? "advice" : "advices"}
      </p>

      {favourites.length === 0 ? (
        <div className="z-10 flex flex-col items-center gap-6 mt-12">
          <div className="w-20 h-20 rounded-full bg-slate-800/60 border border-white/5 flex items-center justify-center">
            <FaHeart className="text-slate-600 text-3xl" />
          </div>
          <p className="text-slate-400 text-lg font-medium">
            No favourites yet
          </p>
          <p className="text-slate-500 text-sm max-w-xs text-center">
            Tap the heart icon on any advice to save it here for later.
          </p>
          <Link
            to="/"
            className="mt-4 px-6 py-3 bg-[#52ffaa] text-slate-900 font-bold rounded-xl shadow-[0_0_20px_rgba(82,255,170,0.3)] hover:shadow-[0_0_35px_rgba(82,255,170,0.6)] transition-all duration-300 active:scale-95"
          >
            Discover Advice
          </Link>
        </div>
      ) : (
        <div className="z-10 w-full max-w-[600px] flex flex-col gap-4">
          {favourites.map((fav, index) => (
            <div
              key={fav.id}
              className="group relative bg-slate-800/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 pr-14 shadow-lg hover:shadow-[0_0_20px_rgba(82,255,170,0.08)] hover:border-[#52ffaa]/20 transition-all duration-300"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <span className="text-[#52ffaa] text-[10px] font-extrabold tracking-[0.25em] uppercase mb-3 block drop-shadow-[0_0_6px_rgba(82,255,170,0.3)]">
                Advice #{fav.id}
              </span>
              <blockquote className="text-gray-100 text-base md:text-lg font-semibold leading-relaxed">
                "{fav.advice}"
              </blockquote>

              {/* Remove button */}
              <button
                onClick={() => removeFavourite(fav.id)}
                className="absolute top-5 right-5 text-slate-600 hover:text-red-400 transition-colors duration-200 p-1.5 rounded-lg hover:bg-red-400/10"
                aria-label={`Remove advice #${fav.id} from favourites`}
              >
                <FiTrash2 className="text-lg" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto pt-16 pb-8 text-center text-slate-500 text-sm font-medium z-10">
        <p>
          © 2025 AdviceGeneratorNG •{" "}
          <Link
            to="/privacy"
            className="text-slate-400 hover:text-[#52ffaa] transition-colors underline decoration-slate-600 hover:decoration-[#52ffaa]"
          >
            Privacy Policy
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default FavouritesPage;
