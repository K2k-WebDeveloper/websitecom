import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg from '../../../assets/bg.webp';


function Landing() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of animation in milliseconds
      easing: 'ease-in-out', // easing function for the animation
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div
        className='bg-cover bg-center h-[85vh] opacity-85'
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='py-10'>
          

          <h2
            className='flex justify-center text-[#fff] pt-28 font-bold text-[30px] lg:text-[40px]'
            data-aos="fade-down"
            data-aos-delay="200"
          >
            IT FUTURE NETWORK
          </h2>

          <h2
            className='flex justify-center text-[#fff] py-9 font-bold text-[15px] lg:text-[30px]'
            data-aos="fade-down"
            data-aos-delay="400"
          >
           Your Digital Compass in IT Industry
          </h2>

          <div className="flex justify-center items-center py-6">
          <a href="https://wa.me/31645859570">
  <button
    className="text-[#fff] py-3 font-bold text-[30px] bg-[#151529] hover:bg-[#28288f] rounded-lg"
    data-aos="fade-up"
    data-aos-delay="600"
  >
    Get Started
  </button>
</a>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Landing;
