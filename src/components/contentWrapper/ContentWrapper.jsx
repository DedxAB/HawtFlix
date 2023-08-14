
import "./style.scss";

const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;

// this contentWrapper file is main div of a page and we render all files, divs into it so that we can center all divs just like container class in bootstrap
