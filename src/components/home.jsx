import React, { useEffect, useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Home = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((prevOpacity) => (prevOpacity === 1 ? 0 : 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Wattwise | Home</title>
      </Helmet>
      <div
        className="h-screen w-full bg-cover bg-fixed bg-center flex flex-col justify-center items-center text-white px-6"
        style={{ backgroundImage: "url('/wattbg.jpg')" }}
      >
        <div className="flex flex-col items-center mt-[-70vh] md:mt-[-70vh] lg:mt-[-70vh] xl:mt-[-70vh]">
          <div className="flex items-center">
            <h1 className="text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3.5vw] font-bold text-center leading-[1.2]">
              Wattwise: Monitoring Electrical Energy Efficiency
            </h1>
          </div>
          <p className="text-[2.4vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.3vw] text-center max-w-[80vw] md:max-w-[65vw] lg:max-w-[50vw] leading-[3.5vh] mt-[2vh]">
          Wattwise is a cutting-edge web-based application designed to monitor and optimize electricity usage across the BITS Pilani Goa campus. By providing real-time energy tracking, insightful analytics, and actionable recommendations, Wattwise empowers students, faculty, and administrators to make informed decisions that reduce waste and promote sustainability.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;