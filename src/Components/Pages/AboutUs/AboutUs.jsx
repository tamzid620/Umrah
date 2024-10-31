const AboutUs = () => {
  return (
    <div>
      <div className="relative flex justify-center pt-[90px]">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <h1
          style={{ fontFamily: "Taviraj, serif" }}
          className="relative z-10 flex py-28 justify-center font-bold text-3xl text-white"
        >
          About Us
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
          <h1 className="font-semibold ">At Umrah,</h1>
          <p className="mb-5">
            we believe that every journey is a story, and the story of Umrah is
            one that carries the soul to new heights. We don’t just arrange
            trips; we guide pilgrims on a spiritual path they will remember
            forever. Born from a passion to serve, our agency combines profound
            respect for tradition with a dedication to each pilgrim's unique
            experience.
          </p>
          <p className="mb-5">
            Every member of our team is committed to not only facilitating your
            travel but understanding your journey. We know that for each person,
            Umrah is a personal calling, and we strive to honor that by
            providing unparalleled support, guidance, and care. From
            pre-departure guidance to heartfelt assistance along the way, we
            stand by you so that your focus remains on the sacred experience.
          </p>
          <p className="mb-5">
            Our agency is not just a service; it’s a family of travelers and
            believers. We’re here to lighten your path, so that every step feels
            more meaningful, every prayer is easier, and every moment brings you
            closer to the divine. Let us be part of your story, and allow us the
            honor of helping you fulfill your calling.
          </p>
          <p className="mb-5">
            Our mission is to make your Umrah experience one of deep connection,
            peace, and spiritual enrichment. With years of experience, we’ve
            designed our services to honor each pilgrim's unique path, offering
            you a journey as personal as your faith.
          </p>
          <p className="mb-5">
            From the moment you decide to embark on this pilgrimage, we are here
            to ease every step of the way. Our team is devoted to handling all
            logistical details so that your heart and mind can focus solely on
            your purpose. With comprehensive packages, tailored guidance, and
            unwavering support, we work tirelessly to ensure that you feel
            supported, safe, and informed throughout your pilgrimage.
          </p>
          {/*------------------- Why Choose Us section--------------- */}
          <h1 className="font-semibold mb-5">Why Choose Us?</h1>
          <p className="mb-5">
            <span className="font-semibold me-2">
              • Experience You Can Trust:{" "}
            </span>{" "}
            We bring years of specialized experience in Umrah travel, a deep
            understanding of rituals, and thorough knowledge of the sacred
            cities. This experience allows us to anticipate and meet the needs
            of our clients, no matter their background or familiarity with the
            journey.
          </p>
          <p className="mb-5">
            <span className="font-semibold me-2">
              • Personalized Approach:{" "}
            </span>{" "}
            Every journey of faith is unique. We listen to your needs and
            expectations, customizing each detail so you can focus on your
            spiritual calling. From selecting accommodations that bring comfort
            to arranging guided visits that enlighten, we believe in making your
            experience fulfilling at every step.
          </p>
          <p className="mb-5">
            <span className="font-semibold me-2">
              • Commitment to Comfort and Safety:{" "}
            </span>
            Pilgrimage should be an experience of peace, not worry. Our team
            ensures every aspect of your journey is organized with your comfort
            and security in mind, from departure to return.
          </p>
          {/*------------------- Our Promise to You section--------------- */}
          <h1 className="font-semibold mb-5">Our Promise to You</h1>
          <p className="mb-5">
            In the essence of Umrah, our promise is to walk alongside you with
            empathy and support, creating an atmosphere where every moment is
            cherished. We handle the complexities, the planning, and the details
            so you can immerse yourself in what truly matters—the purity of
            worship, the intimacy of prayers, and the overwhelming sense of
            closeness to the divine.
          </p>
          <p className="mb-5">
            When you choose Umrah, you’re choosing a team dedicated
            to making your pilgrimage as meaningful as possible. Join us, and
            let us serve you on this extraordinary journey of faith.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
