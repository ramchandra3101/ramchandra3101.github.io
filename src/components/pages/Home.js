import { Link } from "react-router-dom";
import { RESUME_URL } from "../../Assets/Contsants/Constants";

const Home = () => {
  return (
    <div className="flex items-center justify-start min-h-screen p-8 pl-16 md:pr-32 lg:pl-48">
      <div className="text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 mb-4">
          Hello, World!
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-cyan-600 mb-2">
          I am Ramachandra
        </h2>
        <h3 className="text-xl md:text-2xl text-gray-700 mb-6">
          Software Engineer
        </h3>
        <h2 className="text-lg md:text-xl text-gray-600">
          Know more{" "}
          <Link
            to="/about"
            className="text-cyan-600 font-bold hover:text-black"
          >
            about me
          </Link>{" "}
          or{" "}
          <Link
            to={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              window.open(RESUME_URL, "_blank", "noopener,noreferrer");
            }}
            className="text-cyan-600 font-bold hover:text-black"
          >
            Hire me
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Home;
