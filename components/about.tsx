import React from "react";

const AboutUs = () => {
  return (
    <>
      <section>
        <div
          className="h-[100vh] flex z-[10] items-center relative"
          id="aboutus"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center">
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 notonscreen">
                  Well, Hello There!
                </h2>
                <h3 className="text-2xl lg:text-4xl font-bold text-white mb-8 notonscreen">
                  Allow us to introduce ourselves...
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center bg-[#F1C779] rounded-3xl shadow-lg p-8 lg:p-12 mt-4 notonscreen">
                <div className="text-[#021915] font-bold text-sm lg:text-base xl:text-lg mb-4 notonscreen">
                  We are the YBL, a youth-based organization focused on sparking
                  innovation.
                </div>
                <div className="text-[#021915] font-bold text-sm lg:text-base xl:text-lg mb-4 notonscreen">
                  We are a turbocharged community where aspiring young
                  entrepreneurs thrive! We inspire innovation and empower the
                  next generation of business leaders.
                </div>
                <div className="text-[#021915] font-bold text-sm lg:text-base xl:text-lg mb-4 notonscreen">
                  We ignite the spark of inspiration and empower the next
                  generation of visionary leaders.
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
