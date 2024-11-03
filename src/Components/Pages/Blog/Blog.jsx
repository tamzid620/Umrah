import image1 from "../../../assets/images/p7.png";
import image2 from "../../../assets/images/p8.png";
import image3 from "../../../assets/images/p9.png";
import image4 from "../../../assets/images/p10.png";
import image5 from "../../../assets/images/p11.png";
import image6 from "../../../assets/images/p12.png";
import { Link } from "react-router-dom";

const allBlogs = [
  {
    img: image1,
    title:
      "Preparing for Your Spiritual Journey: Essential Tips for Umrah Travelers",
    date: "November 3, 2024",
    disc: "Preparing for Umrah is not just about packing a suitcase; it's a profound journey that begins within. This blog covers practical tips—from organizing your paperwork to preparing your heart. Learn about necessary documents, recommended packing lists, and spiritual preparations to make your Umrah experience as smooth and meaningful as possible.",
  },
  {
    img: image2,
    title: "What to Expect During Your First Umrah: A Beginner's Guide",
    date: "November 3, 2024",
    disc: "If you’re about to embark on your first Umrah, you may be wondering what to expect. In this blog, we walk you through each step of the journey, from arrival in Saudi Arabia to performing tawaf and sa’i. Knowing what lies ahead can help ease any nervousness, allowing you to focus on the spiritual significance of each ritual.",
  },
  {
    img: image3,
    title: "Must-Visit Sites in Makkah and Madinah Beyond the Haram",
    date: "November 3, 2024",
    disc: "While the main pilgrimage rituals take place in the Haram, there are other sacred and historical sites to explore. Discover the stories behind places like Jabal al-Noor, Mount Uhud, and the Prophet's Mosque in Madinah. Visiting these sites can deepen your understanding and connection to Islamic history.",
  },
  {
    img: image4,
    title: "Traveling to Umrah with Family: Tips for a Comfortable Trip",
    date: "November 3, 2024",
    disc: "Traveling with family, especially with children or elders, can be both rewarding and challenging. This blog offers tips for making the journey enjoyable for everyone, covering aspects like choosing family-friendly accommodations, planning prayer times around family needs, and keeping little ones engaged and respectful in holy places.",
  },
  {
    img: image5,
    title: "The Spiritual Benefits of Performing Umrah",
    date: "November 3, 2024",
    disc: "Beyond the physical rituals, Umrah is a chance for deep spiritual renewal. In this article, we explore the transformative power of this pilgrimage, from cleansing the soul to strengthening your connection with Allah. Whether it’s your first Umrah or your tenth, each journey offers unique opportunities for personal growth.",
  },
  {
    img: image6,
    title: "How to Perform Umrah Step-by-Step: A Simple Guide for Pilgrims",
    date: "November 3, 2024",
    disc: "New to Umrah and wondering about each step? This guide simplifies the process, from donning the ihram to performing the tawaf and sa’i. Whether you’re a first-time pilgrim or need a refresher, our step-by-step guide provides a clear understanding of each ritual so you can perform Umrah with confidence.",
  },
  {
    img: image3,
    title: "Packing Smart for Umrah: A Complete Checklist",
    date: "November 3, 2024",
    disc: "Knowing what to pack for Umrah can save you time, stress, and even money! This blog provides a comprehensive packing checklist, covering essentials like comfortable clothing, travel-friendly toiletries, and important documents. We also include tips on managing your luggage efficiently for a smooth travel experience.",
  },
  {
    img: image5,
    title: "Health and Wellness Tips for a Comfortable Umrah",
    date: "November 3, 2024",
    disc: "Long days and crowded spaces can be tiring, but good preparation can keep you energized and comfortable. This blog offers practical health tips, like staying hydrated, maintaining hygiene, and managing any existing health conditions, ensuring you feel your best and can fully focus on the spiritual experience.",
  },
];
const Blog = () => {
  return (
    <div>
      <div className="relative flex justify-center pt-[90px]">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <h1
          style={{ fontFamily: "Taviraj, serif" }}
          className="relative z-10 flex py-28 justify-center font-bold text-3xl text-white"
        >
          Blogs
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
          {/* cards for large medium device  */}
          <div className="md:grid md:grid-cols-1 sm: hidden gap-10">
            {allBlogs.map(({ img, title, date, disc }, index) => (
              <div
                key={index}
                style={{ fontFamily: "Montserrat, serif" }}
                className="flex gap-5 h-[250px] shadow-md hover:shadow-lg"
              >
                <div className="w-1/3">
                  <img src={img} alt="" className="w-full h-[250px] rounded-s-md" />
                </div>
                <div className="w-2/3">
                  <h1 style={{ fontFamily: "Taviraj, serif" }} className="text-xl font-semibold">
                    {title}
                  </h1>
                  <span className="text-sm font-semibold">{date}</span>
                  <p className="text-sm ">{disc}</p>
                  <button className="uppercase font-semibold text-sm hover:underline text-blue-500">
                     <Link to="/under-construction">
                    Read More...
                    </Link></button>
                </div>
              </div>
            ))}
          </div>
          {/* cards for small device  */}
          <div className=" md:hidden sm: block">
            {allBlogs.map(({ img, title, date, disc }, index) => (
              <div
                key={index}
                style={{ fontFamily: "Montserrat, serif" }}
                className="w-full shadow-md hover:shadow-lg mb-5 rounded-md"
              >
                <div className="">
                  <img src={img} alt="" className="w-full rounded-t-md" />
                </div>
                <div className="mx-2">
                  <h1 style={{ fontFamily: "Taviraj, serif" }} className="mt-3 text-xl font-semibold">
                    {title}
                  </h1>
                  <span className="text-sm font-semibold">{date}</span>
                  <p className="text-sm ">{disc}</p>
                  <button className="mb-5 uppercase font-semibold text-sm hover:underline text-blue-500">
                    <Link to="/under-construction">
                    Read More...
                    </Link>
                    </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;
