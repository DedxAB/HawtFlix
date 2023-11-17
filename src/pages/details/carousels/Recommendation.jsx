import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import "./style.scss";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  const title =
    mediaType === "tv" ? "Recomended TV Shows" : "Recomended Movies";

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

export default Recommendation;
