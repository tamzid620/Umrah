

const Blog = () => {
    return (
        <div>
        <div className="relative flex justify-center pt-[90px]">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <h1
            style={{ fontFamily: "Taviraj, serif" }}
            className="relative z-10 flex py-28 justify-center font-bold text-3xl text-white"
          >
            Blog
          </h1>
        </div>
        {/* Contact parent div  */}
        <div
          style={{ fontFamily: "Montserrat, serif" }}
          className="bg-white py-20"
        >
          <div
            style={{ fontFamily: "Taviraj, serif" }}
            className=" lg:max-w-6xl md:max-w-3xl sm:max-w-sm lg:mx-auto md:px-7 sm: px-4 leading-10 text-lg"
          >
            
        </div>
        </div>
        </div>
    );
};

export default Blog;