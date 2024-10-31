import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const questions = [
    {
      question: "What’s included in your Umrah packages?",
      answer: "Our packages usually cover everything you’ll need for a smooth journey—visa processing, flights, hotel stays, airport transfers, and even guided tours. We handle the details so you can focus on your spiritual experience."
    },
    {
      question: "Can I customize my Umrah trip?",
      answer: "Absolutely! We understand that every traveler is unique, so we offer flexible packages that can be tailored to fit your specific needs, whether you're traveling solo, with family, or in a group."
    },
    {
      question: "How close are the accommodations to the Haram?",
      answer: "We know proximity to the holy sites is important, so we partner with hotels close to the Haram in both Makkah and Madinah. This makes it easy for you to attend prayers and have a convenient stay."
    },
    {
      question: "What documents do I need for the Umrah visa?",
      answer: "Typically, you’ll need a valid passport, a recent passport-sized photo, proof of required vaccinations (like meningitis), and a filled-out visa application. Don’t worry—our team will guide you through each step."
    },
    {
      question: "What if I need help during my trip?",
      answer: "We’ve got you covered! Our team is available 24/7 during your journey, ready to assist with any questions, needs, or unexpected issues to make sure you have a safe and fulfilling pilgrimage."
    },
  ];

const HomeFAQ = () => {

    const [openIndex, setOpenIndex] = useState(null) ;
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex ===index ? null : index) ;
    }

    return (
        <div className=" py-[60px] bg-white">
        <div className=" lg:max-w-5xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-5 sm: mx-4">
        <div
          style={{ fontFamily: "Open Sans, sans-serif" }}
          className=" lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4"
        >
          <h1
            data-aos="fade-down"
            style={{ fontFamily: "Sumana,-serif" }}
            className="font-bold text-5xl mb-5"
          >
            Frequently Asked Questions
          </h1>
  {/* accordion div  */}
          <div
            data-aos="fade-down"
            style={{ fontFamily: "Ubuntu,serif" }}
            className="mt-10"
          >    {questions.map((item, index) => (
            <div key={index} className="mb-2">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full text-left bg-[#25476a] hover:bg-[#21a1eb] text-white font-semibold py-4 px-6 rounded-lg focus:outline-none"
              >
                {item.question}
              <IoIosArrowDown />
              </button>
              {openIndex === index && (
                <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-purple-900">
                  {item.answer}
                </div>
              )}
            </div>
          ))} 
        </div>
        </div>
        </div>
        </div>
    );
};

export default HomeFAQ;