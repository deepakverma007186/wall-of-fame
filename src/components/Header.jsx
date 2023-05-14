import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex space-x-10 bg-blue-300">
        {/* <Link to="/">Home</Link> */}
        <Link to="/member">Member</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
};

export default Header;
