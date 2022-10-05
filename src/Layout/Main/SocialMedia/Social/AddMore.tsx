import React from "react";
import { ButtonIcon } from "../../../../components/Button";
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

const AddMore = ({ append }) => {
  return (
    <div className="text-center mt-1">
      <h3 className="font-semibold">Add more</h3>
      <span className="text-sm font-normal">
        Click on the icon to add a social media profile.
      </span>
      <div className="mt-1">
        <ButtonIcon func={append} type="Website">
          <FaGlobe />
        </ButtonIcon>
        <ButtonIcon func={append} type="Email">
          <FaEnvelope />
        </ButtonIcon>
        <ButtonIcon func={append} type="Instagram">
          <FaInstagram />
        </ButtonIcon>
        <ButtonIcon func={append} type="Facebook">
          <FaFacebook />
        </ButtonIcon>
        <ButtonIcon func={append} type="Twitter">
          <FaTwitter />
        </ButtonIcon>
        <ButtonIcon func={append} type="Youtube">
          <FaYoutube />
        </ButtonIcon>
        <ButtonIcon func={append} type="Github">
          <FaGithub />
        </ButtonIcon>
        <ButtonIcon func={append} type="Linkedin">
          <FaLinkedin />
        </ButtonIcon>
      </div>
    </div>
  );
};

export default AddMore;
