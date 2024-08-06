import React from "react";
import { FooterWrap } from "./Footer.styles";
import { FooterData } from "../Constant/Data";
import { Link } from "react-router-dom";
import logo from '../../assets/header/mainLogo.png';
const Footer = () => {
  return (
    <FooterWrap>
      <ul>
        {FooterData.map((value, index) => (
          <li key={index}>
            <Link to={value.link}>{value.title}</Link>
            <span>|</span>
          </li>
        ))}
      </ul>
      <div className="footerLogo">
      <Link to="/"> <img src={logo} alt="logo" /></Link>
        <Link to="/"><strong>Hermion Technologies Pvt. Ltd.</strong></Link>
      </div>
    </FooterWrap>
  );
};

export default Footer;
