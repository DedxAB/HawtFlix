import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          This website dedicated to providing you with the best movie
          reviews and recommendations. Our team of experienced reviewers watches
          the latest movies and TV shows so you don't have to. I hope you'll take some time to explore our website and find some great movies and TV shows to watch.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a href="http://facebook.com">
              <FaFacebookF />
            </a>
          </span>
          <span className="icon">
            <a href="https://www.instagram.com/sumit_ig09/">
              <FaInstagram />
            </a>
          </span>
          <span className="icon">
            <a href="https://twitter.com/sumit_tw09">
              <FaTwitter />
            </a>
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
