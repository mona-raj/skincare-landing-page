import React from "react";

const Footer = () => {
  return (
    <footer className="h-[70vh] bg-accent text-[#E7E8E0] relative overflow-hidden">
      <div className="flex justify-between pt-[10vh] pl-[10vw] pr-[10vw] pb-[5vh]">
        <div className="flex flex-col justify-between gap-[18vh] max-w-[26%]">
          <h2 className="text-4xl leading-[1.2em]">
            Join The Skincare Community Now.
          </h2>
          <ul className="flex justify-between text-[0.8em] leading-[1.2em]">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-[18vh]">
          <div>
            <p className="text-[1.2em]">
              Get in Touch
            </p>
            <h2 className="text-4xl leading-[1.2em]">
              contact.skincare.com
            </h2>
          </div>
          <ul className="flex justify-between text-[0.8em]">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
      </div>
      <h1 className="text-[#3D4B4680] font-bold uppercase text-[18em] tracking-wider absolute top-[45%] left-[-5%]">
        skincare
      </h1>
    </footer>
  );
};

export default Footer;
