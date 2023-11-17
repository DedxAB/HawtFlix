import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";

const Similar = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

  const title = mediaType === "movie" ? "Similar Movies" : "Similar TV Shows";

  return (
    <>
      {data?.results?.length > 0 && (
        <div className="carouselSection">
          <ContentWrapper>
            <div className="carouselTitle">{title}</div>
          </ContentWrapper>
          <Carousel
            data={data?.results}
            loading={loading}
            endPoint={mediaType}
          />
        </div>
      )}
    </>
  );
};

export default Similar;
