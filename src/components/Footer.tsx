import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Enerzon</h3>
            <p className="text-gray-400">
              Leading energy solutions for a sustainable future.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/platform"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Platform
                </Link>
              </li>
              <li>
                <Link
                  to="/usecase"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Use Case
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 flex flex-col md:flex-row items-center md:items-start justify-between">
          <p className="text-gray-400 text-sm md:text-left text-center w-full md:w-auto mb-4 md:mb-0">
            © 2025 Enerzon. All rights reserved.
          </p>
          <Link
            to="/privacy-policy"
            className="text-gray-400 hover:text-white text-sm transition-colors md:ml-auto"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
