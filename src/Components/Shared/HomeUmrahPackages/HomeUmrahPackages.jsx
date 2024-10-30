import Aos from "aos";
import "aos/dist/aos.css";
import image1 from "../../../assets/images/p7.png";
import image2 from "../../../assets/images/p8.png";
import image3 from "../../../assets/images/p9.png";
import image4 from "../../../assets/images/p10.png";
import image5 from "../../../assets/images/p11.png";
import image6 from "../../../assets/images/p12.png";
import { Link } from "react-router-dom";

const data = [
  {
    img: image1,
    title: "Economy Umrah Package",
    price: "Starts from $900 - $1,500 per person",
    duration: "7-10 days",
  },
  {
    img: image2,
    title: "Standard Umrah Package",
    price: "Starts from $1,500 - $2,500 per person",
    duration: "10-14 days",
  },
  {
    img: image3,
    title: " Luxury Umrah Package",
    price: "Starts from $3,000 - $5,000+ per person",
    duration: " 10-14 days",
  },
  {
    img: image4,
    title: "Ramadan Umrah Package ",
    price: "Starts from $2,500 - $6,000 per person",
    duration: "10-15 days",
  },
  {
    img: image5,
    title: "Weekend Umrah Package ",
    price: "Starts from $500 - $1,000 per person",
    duration: "3-5 days",
  },
  {
    img: image6,
    title: "Family Umrah Package",
    price: "Starts from $3,000 - $7,000 per family",
    duration: "10-15 days",
  },
];

const HomeUmrahPackages = () => {
  Aos.init();

  return (
      <div className="relative flex justify-center ">
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
        <div className="relative z-10 my-20 lg:max-w-5xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-5 sm: mx-4">
          <p
            style={{ fontFamily: "Montserrat, serif" }}
            className="mb-3 text-center text-white font-semibold"
          >
            What we Offer
          </p>
          <h1
            style={{ fontFamily: "Taviraj, serif" }}
            className="flex justify-center font-bold text-3xl text-white"
          >
            Umrah Packages
          </h1>
          {/* support parent div  */}
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-5 "
          >
            {/* ------------------------------------- */}
            {data.map(({ img, title, price, duration }, index) => (
              <div
                style={{ fontFamily: "Montserrat, serif" }}
                key={index}
                className="relative bg-[#25476a] text-white  hover:shadow-lg hover:shadow-gray-500
               text-center leading-7 rounded-md h-[400px]"
              >
                <img
                  className=" w-full h-[200px] rounded-t-md"
                  src={img}
                  alt=""
                />
                <div className="relative px-3 pt-4 mb-14">
                  <h1
                    style={{ fontFamily: "Taviraj, serif" }}
                    className="text-xl font-semibold"
                  >
                    {title}
                  </h1>
                  <p className=" text-sm ">{price}</p>
                  <p className="mt-2 flex justify-center ">
                    <span className="mt-3 bg-[#21a1eb] px-3 rounded-md w-[120px] text-sm">
                      {duration}
                    </span>
                  </p>
                </div>
                <button className="absolute bottom-3 left-28 bg-gray-300 text-black font-semibold rounded-md px-3 py-1 hover:bg-[#21a1eb] hover:text-white">
                  Know More
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-20">
            <Link to="/umrah-packages">
              <button className=" bg-[#25476a] text-white font-semibold rounded-md px-8 py-2 uppercase shadow-md  hover:shadow-lg hover:shadow-gray-500">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default HomeUmrahPackages;
