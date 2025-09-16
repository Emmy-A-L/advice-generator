import { TiArrowLeft } from "react-icons/ti";
import { Link } from "react-router-dom";

const PrivacyPage = () => {
  return (
    <div className="bg-[#222732] h-screen text-white mx-auto pt-20 p-6 w-full">
      <Link to={"/"} className="flex items-center gap-1 w-fit px-2 py-1 cursor-pointer hover:bg-gray-600 hover:rounded-md ">
        <span>
          <TiArrowLeft />
        </span>
        <span>Back</span>
      </Link>
      <h1 className="text-3xl font-bold mb-6 text-[#52ffaa]">Privacy Policy</h1>

      <h2 className="text-xl font-semibold mt-6">1. No Data Collection</h2>
      <p>
        We do not collect, store, or process any personal data when you use
        AdviceGeneratorNG.
      </p>

      <h2 className="text-xl font-semibold mt-6">2. No Third-Party Cookies</h2>
      <p>We do not use third-party cookies, analytics, or tracking tools.</p>

      <h2 className="text-xl font-semibold mt-6">3. Hosting Platform</h2>
      <p>
        Our site is hosted on Netlify. While they provide hosting services, they
        do not collect personal user data on our behalf.
      </p>

      <h2 className="text-xl font-semibold mt-6">4. Contact</h2>
      <p>
        If you have any questions, you may contact us at{" "}
        <strong>nocodeemmy@gmail.com</strong>.
      </p>
    </div>
  );
};

export default PrivacyPage;
