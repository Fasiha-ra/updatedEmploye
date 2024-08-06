import React, {useState} from "react";
import { HeaderWrap, NavigationWrap, ToggleButton } from "./Header.styles";
import Logo from "../../assets/header/logo.png";
import MainLogo from "../../assets/header/mainLogo.png";
import SearchBar from "../TextField/SearchBar";
import { Link } from "react-router-dom";
import navLinks from "./routes";
import { useLocation } from "react-router-dom";
import hamburger from "../../assets/header/hamburger.svg";
import { RxCross2 } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";
const Header = ({ toggleSidebar }) => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);
  const handleNavLinkClick = () => {
    setShowNav(false);
  };
  return (
    <HeaderWrap $navActive={showNav}>
      <div className="container">
        <div className="logos">
          <Link to="/">
            <img src={Logo} alt="logo" className="logo" />
            <img src={MainLogo} alt="MainLogo" className="mainLogo" />
          </Link>
          <ToggleButton onClick={toggleSidebar}>
          <FaLongArrowAltRight />
      </ToggleButton>
        </div>
        <div className="searchbar">
          <SearchBar />
        </div>
        <NavigationWrap $navActive={showNav}>
          {navLinks.map((value, index) => (
            <li key={index}>
              <Link to={value.link} className={location.pathname === value.link ? "item active" : "item"}
               onClick={handleNavLinkClick}
              >
              <div className="item">
                 <div className="icons"> {value.icon}</div>{value.title}
                </div>
              </Link>
            </li>
          ))}
        </NavigationWrap>
        <div
            className="hamburgerWrapper"
            onClick={() => setShowNav(!showNav)}
          >
            {showNav ? (
              <RxCross2 size={20} />
            ) : (
              <img src={hamburger} alt="hamburger" />
            )}
          </div>
      </div>
    </HeaderWrap>
  );
};

export default Header;
