import AboutProfile from "../../Assets/Images/AboutProfile.png";
import UCONN_storrs from "../../Assets/Images/UCONN_storrs.jpg";
import KLU from "../../Assets/Images/KLU.jpg";

const About = () => {
  return (
    <div className="container mx-auto my-32 flex flex-col items-center">
      {/* Profile Section */}
      <div className="flex flex-col items-center py-20">
        <div className="w-64 h-64 md:w-80 md:h-80 relative overflow-hidden rounded-full shadow-lg mb-6">
          <img
            src={AboutProfile}
            alt="profile"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h2 className="font-bold text-xl md:text-2xl">
            Ramachandra Yerramsetti
          </h2>
          <h3 className="text-gray-600 md:text-lg">Software Engineer</h3>
        </div>
      </div>

      {/* About Description */}
      <div className="container mx-auto px-6 md:px-20 py-10">
        <div className="prose prose-lg lg:prose-xl max-w-3xl mx-auto">
          <p className="font-bold mb-6">
            At the intersection of code and creativity, you'll find
            me—Ramachandra Yerramsetti, a Software Engineer.
          </p>
          <p className="mb-6">
            By day, I'm immersed in the world of algorithms and data structures,
            pursuing my Master's in Computer Science at UConn. By night, I'm
            crafting narratives, translating my love for cinema into screenplays
            that bridge my technical mind with my creative spirit.
          </p>
          <p className="mb-6">
            My journey in tech is driven by the same passion that fuels my
            admiration for cricket legend Virat Kohli—a relentless pursuit of
            excellence and the thrill of overcoming challenges. Whether I'm
            debugging a stubborn piece of code or drafting a plot twist, I bring
            the same level of dedication and innovative thinking to every
            project.
          </p>
          <p className="mb-6">
            I believe in the power of diverse experiences to fuel innovation. My
            unique blend of technical expertise and creative endeavors allows me
            to approach problem-solving from multiple angles, resulting in
            solutions that are as imaginative as they are effective.
          </p>
          <p className="mb-6">
            In essence, I'm a coder who dreams in binary and writes in plot
            twists, always ready for the next big challenge—be it in the world
            of tech, on the pages of a screenplay, or in life itself.
          </p>
        </div>

        {/* Education Section */}
        <div className="mt-16 ">
          <h2 className="text-3xl font-bold mb-20 text-center ">Education</h2>
          <div className=" grid grid-cols-1 gap-12 max-w-5xl md:translate-x-40">
            {/* UConn Education Block */}
            <div className="flex items-center space-x-6">
              <a href={"https://uconn.edu/"}>
                <img
                  src={UCONN_storrs}
                  alt="UCONN"
                  className="w-32 h-32 object-cover rounded-lg shadow-md"
                />
              </a>
              <div>
                <p className="text-xl font-bold">University of Connecticut</p>
                <p className="text-gray-600">
                  Master of Engineering in Computer Science
                </p>
                <p className="text-gray-500">2023 - 2025</p>
              </div>
            </div>

            {/* KLU Education Block */}
            <div className="flex items-center space-x-6">
              <a href="https://www.kluniversity.in/default.aspx">
                <img
                  src={KLU}
                  alt="KLU"
                  className="w-32 h-32 object-cover rounded-lg shadow-md"
                />
              </a>
              <div>
                <p className="text-xl font-bold">K L University</p>
                <p className="text-gray-600">
                  B.Tech in Electrical and Electronics Engineering
                </p>
                <p className="text-gray-500">2015 - 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
