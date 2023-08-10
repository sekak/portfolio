import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start gap-7 my-10">
      <a
        className="hover:opacity-50 transition duration-500"
        href="http://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="http://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="http://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/twitter.png" />
      </a>{" "}
      <a
        className="hover:opacity-50 transition duration-500"
        href="http://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
