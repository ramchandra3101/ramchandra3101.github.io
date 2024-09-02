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
      <div className="md:ml-12 py-20 px-20">
        <p className="text-gray-600 my-4"></p>
        <p className="text-gray-600 my-4"></p>
      </div>
    </div>
  );
};
export default About;
