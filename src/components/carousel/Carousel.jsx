import { useRef } from "react";
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";
import Img from "../lazyLoad/Img";
import PosterFallback from "../../assets/no-poster.png";
import { useSelector } from "react-redux";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import dayjs from "dayjs";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

const Carousel = ({ data, loading, endPoint, title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const navigation = (direction) => {
    const container = carouselContainer.current;

    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skeletonItemm = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlockSkeleton skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        {data?.length > 0 && (
          <>
            {title && <div className="carouselTitle">{title}</div>}
            <VscChevronLeft
              className="carouselLeftNav arrow"
              onClick={() => navigation("left")}
            />
            <VscChevronRight
              className="carouselRightNav arrow"
              onClick={() => navigation("right")}
            />
          </>
        )}

        {!loading ? (
          <>
            <div className="carouselItems" ref={carouselContainer}>
              {data?.map((item) => {
                const posterUrl = item.poster_path
                  ? url.poster + item.poster_path
                  : PosterFallback;
                return (
                  <div
                    key={item.id}
                    className="carouselItem"
                    onClick={() =>
                      navigate(`/${item.media_type || endPoint}/${item.id}`)
                    }
                  >
                    <div className="posterBlock">
                      <Img src={posterUrl} />
                      <CircleRating rating={item.vote_average.toFixed(1)} />
                      <Genres data={item.genre_ids.slice(0, 2)} />
                    </div>
                    <div className="textBlock">
                      <span className="title">{item.title || item.name}</span>
                      <span>
                        {dayjs(
                          item?.release_date || item?.first_air_date
                        ).format("MMM D, YYYY")}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="loadingSkeleton">
            {skeletonItemm()}
            {skeletonItemm()}
            {skeletonItemm()}
            {skeletonItemm()}
            {skeletonItemm()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
