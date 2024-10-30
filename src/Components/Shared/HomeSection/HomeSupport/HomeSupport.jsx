import icon1 from "../../../../assets/icons/price.png";
import icon2 from "../../../../assets/icons/verified.png";
import icon3 from "../../../../assets/icons/like.png";
import icon4 from "../../../../assets/icons/guidelines.png";
import Aos from "aos";
import "aos/dist/aos.css";

const data = [
  {
    icon: icon1,
    title: "Best Price",
  },
  {
    icon: icon2,
    title: "Safe and Secure",
  },
  {
    icon: icon3,
    title: "Best Travel Agents",
  },
  {
    icon: icon4,
    title: "Travel Guidelines",
  },
];

const HomeSupport = () => {

    Aos.init();

    return (
        <div className="bg-white">
        <div
        data-aos="fade-down"
        data-aos-duration="2000"
        className=" py-20 lg:max-w-5xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-5 sm: mx-4 "
      >
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-5">
          {data.map(({ icon, title }, index) => (
            <div key={index} className="p-5">
              <div className="flex justify-center">
                <img className="w-[80px]" src={icon} alt="" />
              </div>
              <h1
                style={{ fontFamily: "Taviraj, serif" }}
                className="text-center text-xl mt-5 font-semibold"
              >
                {title}
              </h1>
            </div>
          ))}
        </div>
      </div>
        </div>
    );
};

export default HomeSupport;