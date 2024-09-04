import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/1.webp";
import img2 from "../../../assets/2.webp";

function Work() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out", // easing function
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <div className="px-10 py-5">
      <h2
        className="py-3 flex justify-center font-bold text-[17px] lg:text-[25px]"
        data-aos="fade-up"
      >
        Embark on a Tech-Driven Journey with IT FUTURE NETWORK
      </h2>
      <div className="py-4 px-6">
        <div className=" flex justify-center" data-aos="fade-up">
          <p className=" flex justify-center">
            Join us as we seamlessly blend innovation with the digital frontier.
            At the heart of the bustling IT industry, IT FUTURE NETWORK is your
            trusted partner, dedicated to delivering top-notch IT solutions and
            support for businesses. Our mission is to empower the digital
            landscape with deep understanding and expertise. Beyond being a
            leader in IT, IT FUTURE NETWORK stands as your most reliable ally in
            navigating the ever-evolving digital world. We are passionate about
            driving your business's success, channeling our innovation into the
            dynamic digital environment. At IT FUTURE NETWORK, we offer a
            comprehensive suite of advanced IT services designed to keep your
            business running efficiently and securely. From 24/7 managed IT
            services to state-of-the-art cloud solutions, network security, and
            disaster recovery, we provide everything your business needs to stay
            ahead in the future.
          </p>
        </div>

        <div>
          <h3 className="py-5 font-extrabold" data-aos="fade-right">
          Learn More About Us
          </h3>
          <div className="lg:flex" data-aos="fade-up">
            <p className="lg:pr-48">
              We offer a comprehensive suite of IT services designed to keep
              your business running smoothly and securely. From managed IT
              services and cloud solutions to network security and disaster
              recovery, we have everything you need to stay ahead of the curve.
              <li>
              Managed IT Services: Say goodbye to IT headaches! We'll handle your IT infrastructure 24/7, freeing you to focus on what you do best.
            </li>
            <li>Cloud Solutions: Migrate your data and applications to the cloud for increased scalability, accessibility, and security.</li>
            <li>Network Security: Protect your valuable data from cyber threats with cutting-edge security solutions and expert monitoring.</li>
            </p>
            
            <img src={img2} className="h-44 lg:pr-52" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
