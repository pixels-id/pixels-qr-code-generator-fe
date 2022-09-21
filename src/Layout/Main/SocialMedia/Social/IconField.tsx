import React from "react";
import {
  FaGlobe,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const IconField = ({ field }) => {
  switch (field.type) {
    case "Website":
      return <FaGlobe className="inline mb-1 mr-1 text-green-900" />;
    case "Email":
      return <FaEnvelope className="inline mb-1 mr-1 text-green-900" />;
    case "Instagram":
      return <FaInstagram className="inline mb-1 mr-1 text-green-900" />;
    case "Facebook":
      return <FaFacebook className="inline mb-1 mr-1 text-green-900" />;
    case "Twitter":
      return <FaTwitter className="inline mb-1 mr-1 text-green-900" />;
    case "Youtube":
      return <FaYoutube className="inline mb-1 mr-1 text-green-900" />;
    case "Github":
      return <FaGithub className="inline mb-1 mr-1 text-green-900" />;
    case "Linkedin":
      return <FaLinkedin className="inline mb-1 mr-1 text-green-900" />;
    default:
      return <FaGlobe className="inline mb-1 mr-1 text-green-900" />;
  }
};

export default IconField;
