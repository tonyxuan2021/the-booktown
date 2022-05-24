import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__social__wrapper">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
      </div>

      <p className="footer__copyright">
        © {new Date().getFullYear()} Copyright: The BookTown
      </p>
    </div>
  );
};

export default Footer;
