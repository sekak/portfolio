import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="bg-red py-8 px-24 w-full">
      <div className="w-5/6 mx-auto ">
        <SocialMediaIcons />
        <div className="md:flex  md:justify-between justify-center text-center">
          <p className="font-semibold font-playfair text-md text-yellow">
            JANE ESPER
          </p>
          <p className="font-opensans font-semibold text-md text-yellow">
          ©2022 ESPER. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
