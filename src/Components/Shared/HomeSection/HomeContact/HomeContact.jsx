import "./HomeContact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import SectionLoading from "../../../Loading/SectionLoading/SectionLoading";

const HomeContact = () => {

    const [isLoading, setLoading] = useState(false);
    const [contact, setContact] = useState("");
    const form = useRef();
  
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  
    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);
  
      emailjs
        .sendForm("service_zw15woj", "template_6zedalj", form.current, {
          publicKey: "QCIFFc_9aZQkMdLJj",
        })
        .then(
          () => {
            Swal.fire({
              title: "Good job!",
              text: "Email Sent Successfully!",
              icon: "success",
            });
            setLoading(false);
          },
          (error) => {
            Swal.fire({
              title: "Error",
              text: "Something Went Wrong",
              icon: "error",
            });
            setLoading(false);
            console.log(error);
          }
        );
    };

    return (
        <div>
        <div className="relative flex justify-center pt-[90px]">
          <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        {/* Contact parent div  */}
        <div className="relative z-10  py-20">
          <div
            style={{ fontFamily: "Taviraj, serif" }}
            className=" lg:max-w-6xl md:max-w-3xl sm:max-w-sm lg:mx-auto md:px-7 sm: px-4"
          >
            <h1
              style={{ fontFamily: "Taviraj, serif" }}
              className="text-white text-center mb-10 text-3xl uppercase font-semibold"
            >
              Contact With Us
            </h1>
            <p
              style={{ fontFamily: "Montserrat, serif" }}
              className="text-center mb-10 text-white"
            >
              Get in touch with us for personalized assistance on your Umrah
              journey. Our dedicated team is here to answer your questions, guide
              you through package details, and provide support at every step.
              Reach out via phone, email, or by filling out our contact form, and
              we’ll get back to you promptly. Let us help make your spiritual
              journey seamless and memorable.
            </p>
  
            <div data-aos="fade-up" style={{ fontFamily: "Montserrat, serif" }}>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="border shadow-lg rounded-md px-5 py-5 bg-white"
              >
                <h1 className="text-xl mb-3">Need A Consultation? </h1>
                <p className="mb-4">
                  Drop us a line! We are here to answer your questions 24/7.
                </p>
  
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                  <input
                    required
                    className="border border-gray-300 px-3 py-2 w-full"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Full Name"
                  />
                  <input
                    required
                    className="border border-gray-300 px-3 py-2 w-full"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <input
                    className="border border-gray-300 px-3 py-2 w-full"
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                  <input
                    hidden
                    required
                    className="border border-gray-300 px-3 py-2 w-full"
                    type="number"
                    name="phone"
                    id="phone"
                    value={contact}
                    placeholder="Phone No"
                  />
                  <PhoneInput
                    country={"us"}
                    name="contact"
                    id="contact"
                    type="number"
                    value={contact} // Set the value from the state
                    onChange={setContact}
                    placeholder="Phone Number"
                    inputClass="w-full"
                  />
                </div>
                <textarea
                  className="w-full h-[100px] border border-gray-300 px-3 py-2 mt-3 "
                  name="feedback"
                  id="feedback"
                  placeholder="How can I help you? "
                />
                <div className="flex justify-center">
                  {isLoading ? (
                    <div className="my-8 px-8 py-3 bg-white rounded-sm">
                      <SectionLoading />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="my-8 bg-[#25476a] text-white font-semibold rounded-md px-8 py-2 uppercase shadow-md  hover:shadow-lg hover:shadow-gray-500"
                    >
                      Send
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
          
        </div>
      </div>
    );
};

export default HomeContact;