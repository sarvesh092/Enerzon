import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-3xl mx-auto bg-gray-900 bg-opacity-80 rounded-xl shadow-lg p-10">
        <h1 className="text-3xl font-bold mb-6 text-orange-400">
          Privacy Policy
        </h1>
        <p className="mb-4 text-gray-300">
          Your privacy is important to us. This Privacy Policy explains how
          Enerzon collects, uses, and protects your information when you use our
          platform.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">
          Information We Collect
        </h2>
        <p className="mb-4 text-gray-400">
          We may collect personal information such as your name, email address,
          and usage data to provide and improve our services.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">
          How We Use Information
        </h2>
        <p className="mb-4 text-gray-400">
          Information is used to operate, maintain, and enhance our platform,
          communicate with users, and comply with legal obligations.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">
          Your Rights
        </h2>
        <p className="mb-4 text-gray-400">
          You have the right to access, update, or delete your personal
          information. Contact us for any privacy-related requests.
        </p>
        <p className="mt-8">
          <Link to="/" className="text-orange-400 hover:underline">
            &larr; Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
