import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="mt-12"></div>
      <footer className="bg-secondary w-full h-[10vh]">
        <div className="flex justify-between items-center h-full p-4">
          <Link to="/" className="text-lg text-white">
            &#8592; Return to UL
          </Link>
          <Link to="/member" className="text-lg">
            Member
          </Link>
          <a
            className="text-white text-lg"
            href="http://www.universityliving.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UniversityLiving.Com
          </a>
          <Link to="/contact" className="text-lg text-white">
            Developer &#8594;
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
