import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="mt-12"></div>
      <footer className="bg-secondary w-full h-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mx-2 h-full gap-2 p-4">
          <Link to="/" className="text-lg text-white">
            &#8592; Return to UL
          </Link>
          {/* <Link to="/member" className="text-lg">
            Member
          </Link> */}
          <a
            className="text-white text-lg font-semibold"
            href="http://www.universityliving.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UniversityLiving.Com
          </a>
          <Link
            target="_blank"
            to="https://deepakgsbv7186-portfolio.netlify.app/"
            className="text-lg text-white"
          >
            Developer &#8594;
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
