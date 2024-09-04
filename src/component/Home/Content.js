import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/1.webp";
import img2 from "../../assets/2.webp";
import img3 from "../../assets/3.webp";
import img4 from "../../assets/4.webp";
import img5 from "../../assets/5.webp";

function Content() {
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
        Why IT Is Necessary to Expand Our Business?
      </h2>
      <div className="py-4 px-6">
        <h3 className="py-5 font-extrabold" data-aos="fade-right">
          Introduction
        </h3>
        <div className="lg:flex" data-aos="fade-up">
          <p className="lg:pr-48">
            In today’s ever-changing business environment, Information
            Technology (IT) has emerged out to be as a vital component of
            business expansion. As businesses strive for profitability and
            efficiency, equipping advanced technology has become the strategic
            priority over the years. It not only simplifies business operations
            but also creates pathways for development opportunities, providing
            businesses with the tools necessary to navigate the complexities of
            the digital world. Thus, it becomes a necessity to understand why IT
            is necessary for every organization looking to expand its scope.
          </p>
          <img src={img1} className="h-44 lg:pr-52" />
        </div>

        <div>
          <h3 className="py-5 font-extrabold" data-aos="fade-right">
            Operational Efficiency
          </h3>
          <div className="lg:flex" data-aos="fade-up">
            <p className="lg:pr-48">
              Without any doubt, IT plays an important role in improving the
              overall operational efficiency of businesses. The advancement of
              technology and automation helps to make the ordinary operations
              easier, eliminating errors, and enhancing the overall
              productivity. This enhancement of efficiently allows organization
              to better equip the resources, saving up time as well as resources
              that redirects the business towards growth and success. In
              addition, Information Technology improves the decision-making
              power through the business intelligence as well as statistical
              intelligence, providing valuable insights to influence the
              strategic growth of the businesses.
            </p>
            <img src={img2} className="h-44 lg:pr-52" />
          </div>
        </div>

        <div>
          <h3 className="py-5 font-extrabold" data-aos="fade-right">
            Improved Profitability
          </h3>
          <div className="lg:flex" data-aos="fade-up">
            <p className="lg:pr-48">
              With the efficient utilization of resources, a company can try to
              make more product or offer services at a lower cost. Selling more
              of these product or services will helps to increase your margins.
            </p>
            <img src={img3} className="h-44 lg:pr-52" />
          </div>
        </div>

        <div>
          <h3 className="py-5 font-extrabold" data-aos="fade-right">
            Increased Business Growth
          </h3>
          <div className="lg:flex" data-aos="fade-up">
            <p className="lg:pr-48">
              With the use of efficient resources and capital, you can increase
              the share in market before the expansion issue arises. With more
              cash flow you can expand the scope of business, employ new staff,
              and take more risk to enhance the growth of business.
            </p>
            <img src={img4} className="h-44 lg:pr-52" />
          </div>
        </div>

        <div>
          <h3 className="py-5 font-extrabold" data-aos="fade-right">
            The Future
          </h3>
          <div className="lg:flex" data-aos="fade-up">
            <p className="lg:pr-48">
              The innovative and advanced technology has gained huge popularity
              significantly since the beginning of the twentieth century, and
              this trend will keep gaining in the decades to come. As the scope
              of IT services, the overall efficiency and effectiveness of
              business processes keeps on increasing. This will makes the
              business to continue rely on IT to succeed.
            </p>
            <img src={img5} className="h-44 lg:pr-52" />
          </div>
        </div>

        <div>
          <h3 className="py-5 font-extrabold" data-aos="fade-right">
            Conclusion
          </h3>
          <div className="lg:flex" data-aos="fade-up">
            <p className="lg:pr-48">
              In conclusion, the integration of Information Technology into
              business operations is not merely a modern convenience into this
              digital world, but an essential requirement for an organization
              seeking to expand their scope. IT enabled efficiency gains,
              strategic insights, and global outreach provides a solid platform
              for the long-term growth. As the organizations embark on the
              journey of expansion, enhancing technological advancement becomes
              not just an option but a necessary step in an ever-changing
              business environment. This enables firms to navigate the
              complexities of the digital era as well as grab the opportunities
              that awaits..
            </p>
            <img src={img2} className="h-44 lg:pr-52" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
