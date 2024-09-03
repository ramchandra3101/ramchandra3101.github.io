import AboutProfile from "../../Assets/Images/AboutProfile.png";
const About = () => {
  return (
    <div className="container flex mx-auto my-32">
      <div className="flex-col py-20 ">
        <div className="w-64 h-64 md:w-80 md:h-80 relative overflow-hidden rounded-full shadow-lg mb-6">
          <img
            src={AboutProfile}
            alt="profile"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h2 className="font-bold text-xl mr-2">Ramachandra Yerramsetti</h2>
          <h3 className="text-gray-600">Software Engineer</h3>
        </div>
      </div>
      <div className="container mx-auto px-20 py-20">
        <div className="prose lg:prose-xl ">
          <p>
            At the intersection of code and creativity, you'll find
            me—Ramachandra Yerramsetti, a Software Engineer.
          </p>

          <p>
            By day, I'm immersed in the world of algorithms and data structures,
            pursuing my Master's in Computer Science at UConn. By night, I'm
            crafting narratives, translating my love for cinema into screenplays
            that bridge my technical mind with my creative spirit.
          </p>

          <p>
            My journey in tech is driven by the same passion that fuels my
            admiration for cricket legend Virat Kohli—a relentless pursuit of
            excellence and the thrill of overcoming challenges. Whether I'm
            debugging a stubborn piece of code or drafting a plot twist, I bring
            the same level of dedication and innovative thinking to every
            project.
          </p>

          <p>
            I believe in the power of diverse experiences to fuel innovation. My
            unique blend of technical expertise and creative endeavors allows me
            to approach problem-solving from multiple angles, resulting in
            solutions that are as imaginative as they are effective.
          </p>
          <p>
            In essence, I'm a coder who dreams in binary and writes in plot
            twists, always ready for the next big challenge—be it in the world
            of tech, on the pages of a screenplay, or in life itself.
          </p>
        </div>
      </div>
      <div />
    </div>
  );
};
export default About;
