import { Link } from "react-router-dom";
import { MAPS_URL } from "../Assets/Contsants/Constants";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-b from-transparent to-cyan-100 text-black py-12">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">Let's Talk</h1>
          <p className="text-lg text-gray-600 mb-6">
            Every great collaboration begins with a conversation.
          </p>
          <button className="bg-gray-500 text-white font-bold py-3 px-6 rounded-full hover:bg-cyan-600">
            <Link to="/contact">Tell me about your project</Link>
          </button>

          <p className="text-sm py-10">
            &copy; {currentYear} Ramachandra Yerramsetti. All rights reserved.
          </p>
        </div>
        <div className="w-1/4">
          <div className="mb-6">
            <h2 className="text-xl font-bold">Email</h2>
            <p className="text-gray-600">rcyerramsetti@protonmail.com</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold">Phone</h2>
            <p className="text-gray-600">+1 (959)-232-0757</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Address</h2>
            <p className="text-gray-600">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(MAPS_URL, "_blank", "noopener,noreferrer");
                }}
              >
                <Link to={MAPS_URL}>
                  221 Trumbull Street, Apt 2602
                  <br />
                  Hartford, Connecticut, United States, 06103
                </Link>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
