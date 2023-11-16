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
          This website dedicated to providing you with the best movie reviews
          and recommendations. Our team of experienced reviewers watches the
          latest movies and TV shows so you don't have to. I hope you'll take
          some time to explore our website and find some great movies and TV
          shows to watch.
        </div>
        <div className="socialIcons">
          <span
            className="icon"
            onClick={() => window.open("https://www.facebook.com", "_blank")}
          >
            <FaFacebookF />
          </span>
          <span
            className="icon"
            onClick={() =>
              window.open("https://www.instagram.com/sumit_ig09/", "_blank")
            }
          >
            <FaInstagram />
          </span>
          <span
            className="icon"
            onClick={() => {
              window.open("https://twitter.com/sumit_tw09", "_blank");
            }}
          >
            <FaTwitter />
          </span>
          <span
            className="icon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/arnab-bhoumik-b8976a24a",
                "_blank"
              )
            }
          >
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
