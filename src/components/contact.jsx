import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (

    <>
     <Helmet>
        <title>Wattwise | Contact</title>
      </Helmet>
    <div className="w-full h-screen flex flex-col justify-end">


<div className="flex flex-col items-center justify-center h-[60vh] min-h-[30vh] max-h-[60vh]">

        <h1 className="text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3.5vw] font-bold text-center leading-[1.2]">
          Hello.
        </h1>
        <h1 className="text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3.5vw] font-bold text-center leading-[1.2]">
          Contact Us
        </h1>
        <h1 className="text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3.5vw] font-bold text-center leading-[1.2]">
          For Any Queries
        </h1>



        </div>
      
      <div className="h-[33vh] w-full flex bg-[#9288f8] p-10 md:p-16">
        
        {/* Left Side - Contact Info */}
        <div className="w-1/2 flex flex-col justify-center space-y-3">
          <h2 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] font-bold leading-[1.2] text-[#0b1a3f]">
            For commissions and project inquiries, please email:
          </h2>
          <a
            href="mailto:"
            className="text-[3vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] font-bold leading-[1.2] text-[#0b1a3f] underline"
          >
            testing123@gmail.com
          </a>
          <p className="text-[#0b1a3f]">or send a message via this form</p>
        </div>

        

        {/* Right Side - Contact Form */}
        <div className="w-1/2 flex items-center justify-center max-h-[33vh]">
  <div className="w-full max-w-md bg-[#9288f8] p-4 rounded-lg text-sm">
  <h2 className="text-[3.5vw] sm:text-[2.7vw] md:text-[2.3vw] lg:text-[1.8vw] xl:text-[1.4vw] font-bold leading-[1.2] text-[#0b1a3f] text-[#0b1a3f] mb-1">Contact</h2>
    <form className="flex flex-col gap-2">
      <div className="flex gap-2" >
        <input type="text" placeholder="First Name" className="w-full h-3 sm:h-3 text-xs sm:text-xs md:h-4 md:text-xs lg:h-6 lg:text-xs xl:h-8 xl:text-sm p-2 border rounded-md" />
        <input type="text" placeholder="Last Name" className="w-full h-3 sm:h-3 text-xs sm:text-xs md:h-4 md:text-xs lg:h-6 lg:text-xs xl:h-8 xl:text-sm p-2 border rounded-md" />
      </div>
      <input type="email" placeholder="Email *" className="w-full h-3 sm:h-3 text-xs sm:text-xs md:h-4 md:text-xs lg:h-6 lg:text-xs xl:h-8 xl:text-sm p-2 border rounded-md" />
      <textarea placeholder="Write a message" className="w-full h-5 sm:h-5 text-xs sm:text-xs md:h-7 md:text-xs lg:h-10 lg:text-xs xl:h-13 xl:text-sm p-2 border rounded-md resize-none"></textarea>
      <button className="bg-[#5c6472] text-white px-4 py-2 rounded-md w-full text-xs">Submit</button>
    </form>
  </div>
</div>

      </div>
    </div>
    </>
  );
};

export default Contact;
