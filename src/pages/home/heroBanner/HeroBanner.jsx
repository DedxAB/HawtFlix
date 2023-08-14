import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoad/Img";
import "./style.scss";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  const [query, setQuery] = useState("");
  const navigate = useNavigate(); // This is for navigate to the search page after search something and hit enter in the keyboard
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`); // this will navigate to the search page if user hit enter keyword and if the search query length is not empty
    }
  };

  useEffect(() => {
    const bg = `${url.backdrop}${
      data?.results?.[Math.floor(Math.random() * 20)].backdrop_path
    }`;
    // console.log(bg);
    setBackground(bg);
  }, [data]); // this useEffect for background image data and we append this url to the image url like this https://image.tmdb.org/t/p/original/backgroundImage => url.backdrop + '/backgroundImage'

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              className=""
              type="text"
              placeholder="Search for a movie or TV show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button className="">Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
