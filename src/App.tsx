import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import FavouritesPage from "./pages/FavouritesPage";
import Err04Page from "./pages/Err04Page";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="*" element={<Err04Page />} />
      </Routes>
    </>
  );
};

export default App;
