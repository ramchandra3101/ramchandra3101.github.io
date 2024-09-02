import logo from "../Assets/Icons/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    handlescroll();
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  const handlescroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-br from-white via-cyan-100 to-cyan-300"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" className="w-24 h-24 ml-4 mr-2" />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-10">
            <li className="text-gray-600 py-2 hover:text-gray-800  ">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-600  py-2 hover:text-gray-80 ">
              <Link to="/about">About Me</Link>
            </li>
            <li className="text-gray-600 py-2 hover:text-gray-800">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="text-gray-600 py-2 hover:text-gray-800">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="bg-black text-white border border-gray-300 px-4 py-2 rounded hover:bg-white hover:text-black">
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
