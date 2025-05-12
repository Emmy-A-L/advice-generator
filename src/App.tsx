import { useEffect, useState } from "react";
import { GiPerspectiveDiceSixFacesFour } from "react-icons/gi";
import { TiMediaPause } from "react-icons/ti";

const App = () => {
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
    <div className="bg-[#222732] h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center text-[#52ffaa] mb-6">
        Advice Generator
      </h1>
      <div className="relative bg-[#323a49] w-full md:w-96 h-60 rounded-lg text-center flex flex-col items-center gap-4 px-6 py-3 text-white">
        <p className="text-[#52ffaa] uppercase font-bold text-sm spacing">
          Advice <span>#{adviceId}</span>
        </p>
        {loading ? (
          <div className="flex items-center justify-center">
            {/* simple loading spinner */}
            <div className="w-8 h-8 border-4 border-[#52ffaa] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <blockquote className="text-xl font-semibold text-gray-200">
            "{advice}"
          </blockquote>
        )}
        <div className="relative w-full flex items-center justify-center">
          <span className="h-0.5 w-full bg-gray-600"></span>
          <TiMediaPause className="text-white text-3xl absolute bg-[#323a49]" />
        </div>

        <GiPerspectiveDiceSixFacesFour
          className={`absolute text-4xl text-[#323a49] -bottom-4 rounded-full bg-[#52ffaa] cursor-pointer hover:scale-110 transition-transform ${
            loading ? "animate-pulse" : ""
          }`}
          onClick={() => !loading && fetchAdvice()}
        />
      </div>
    </div>
  );
};

export default App;
