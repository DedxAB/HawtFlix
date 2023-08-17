import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

  const title = mediaType === "movie" ? "Similar Movies" : "Similar TV Shows";

  return (
    <Carousel
      data={data?.results}
      loading={loading}
      endPoint={mediaType}
      title={title}
    />
  );
};

export default Similar;
