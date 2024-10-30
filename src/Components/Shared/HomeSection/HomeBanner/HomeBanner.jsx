import Aos from "aos";
import "aos/dist/aos.css";
import homeBanner1 from "../../../../assets/images/Umrah-Banner.jpeg";

const HomeBanner = () => {
  Aos.init();

  const backgroundStyles = {
    backgroundImage: `url(${homeBanner1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="lg:pt-[92px] md:pt-[80px] sm: pt-[100px]">
      <div
        style={backgroundStyles}
        className="relative flex items-center justify-center w-full lg:h-[800px] md:h-[500px] sm: h-[500px]"
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="w-full max-w-md relative flex justify-center">
          {/* content section -------------- */}
          <div className="text-white  text-center">
            <div className="lg:w-[700px] md:max-w-full sm: max-w-full">
              <h1
                data-aos="fade-down"
                data-aos-duration="1000"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="font-semibold text-4xl uppercase "
              >
                A leading Best Travel Agent in Bangladesh !
              </h1>
              <button
                data-aos="fade-down"
                data-aos-duration="2000"
                className="mt-10 bg-gray-100 text-black hover:bg-[#25476a] hover:text-white
                 px-4 py-2 rounded font-bold"
              >
                Free Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
