import React from "react";
import img from "../../assets/6.jpg";

function Why() {
  return (
    <div className="px-4 py-5">
      <h2 className="py-3 flex justify-center font-bold text-[17px] lg:text-[25px]">
        Why us?
      </h2>
      <div className="py-4 px-6">
        <div className="lg:flex lg:justify-center lg:px-20 ">
          
          <p className="">
            IT FUTURE NETWORK was founded in 2024 we are an Information
            Technology Company with a prime objective of providing sophisticated
            business solutions to small and big companies worldwide. We believe
            in long-term relationships and hence client satisfaction is our
            priority. We always try our best to meet client expectations through
            responsiveness and outstanding performance. We are well-equipped to
            deliver an array of services such as Domain Registration and
            Hosting, Graphic Design for the Web and Print, Branding and Logo
            Development, Website design and Maintenance, Customized Software
            Development, CRM and ERP Development and Implementation, E-commerce
            Solutions, Attendance & Payroll Management Systems, Biometric &
            Access Control Systems, Mobile App Development, Desktop Applications
            Development, Search Engine Optimization, Social Media Optimization,
            Pay Per Click, Content Marketing, Online Reputation Management etc.
            Our innovative idea of advanced technology by integrating methodical
            expertise and creative understanding allows us to feel like a
            quality “One Stop Shop IT Services Provider In India”. We are an
            emerging Mid-Sized IT Company providing IT solutions worldwide. For
            the last three years, we have been in this industry and have a
            dedicated team of intellectuals and qualified professionals to offer
            the most advanced and reliable services at a low cost.
          </p>
        </div>
        <div className="flex justify-center">
            <img src={img} className=" w-[60vh] " />
          </div>
      </div>
    </div>
  );
}

export default Why;
