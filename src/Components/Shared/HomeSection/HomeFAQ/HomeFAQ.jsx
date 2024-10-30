import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const questions = [
    {
      question: "Does SoftPlatoon cover all stages of the SDLC??",
      answer: "Yes, depending on the project size, we might be able to get your MVP delivered in 2 weeks – 4 months. Subsequently, we can ensure releases of new functionality every 2–6 weeks. Get in touch, and we'll work out a way to meet your needs.."
    },
    {
      question: "Can SoftPlatoon speed up the delivery of projects?",
      answer: "Yes, depending on the project size, we might be able to get your MVP delivered in 2 weeks – 4 months. Subsequently, we can ensure releases of new functionality every 2–6 weeks. Get in touch, and we'll work out a way to meet your needs."
    },
    {
      question: "What's the cost for your software development services?",
      answer: "Software development costs for a medium/large application may range from $50,000 to $1,000,000. The total amount mainly depends on the number and complexity of software features, the number of platforms supported (web, mobile, desktop), and the type of development (custom, low-code, or platform-based). The UI design uniqueness and complexity, the number of integrations with other software systems, as well as availability, security, and performance requirements also play an important part.You can request free project cost calculation from SoftPlatoon or find more details about software development costs in our recent guide."
    },
    {
      question: "What’s your post-launch policy?",
      answer: "During the first 1–3 months after the software launch, our team:Answers your and users’ questions, resolves user issues (if any).Manages incidents, configuration changes, and updates.After 3 months, upon agreement, we’re ready to offer continuous maintenance and evolution of your software, as well as L1–L3 support (if required). We know how to nurture long-term partnerships and keep our clients happy in the long run: 62% of our revenue is coming from customers we serve for more than 2 years."
    },
    {
      question: "What is your preferred development methodology?",
      answer: "For most of our software engineering projects, we use Scrum with 2–3 week iterations. For small and midsize projects with clearly defined and unchanging requirements, projects requiring formal approvals (governmental projects and projects for big corporations), and projects with strict compliance requirements, we can opt for Waterfall. In software support and evolution projects, we mostly follow Kanban. Naturally, in many projects, it makes sense to use a combination of approaches or switch from one to another depending on the project stage. In our practice, the most common scenarios are ‘Waterfall -> Scrum’, ‘Scrum -> Kanban -> Scrum.’"
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