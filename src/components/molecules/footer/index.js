import React from "react";
import { IGithub, IInstagram, Ifacebook, LogoMrr } from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-soc" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoMrr} alt="Logo" />
        </div>
        <div className="soc-wrapper">
          <Icon img={Ifacebook} />
          <Icon img={IInstagram} />
          <Icon img={IGithub} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
