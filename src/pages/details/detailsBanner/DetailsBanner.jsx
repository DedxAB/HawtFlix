import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { useParams } from "react-router-dom";
import Img from "../../../components/lazyLoad/Img";
import PosterFallback from "../../../assets/no-poster.png";
import Genres from "../../../components/genres/Genres";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import "./style.scss";
import CircleRating from "../../../components/circleRating/CircleRating";
import { PlayButton } from "../PlayButton";
import VideoPopup from "../../../components/videoPopup/VideoPopup";

const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { url } = useSelector((state) => state.home);
  const _genres = data?.genres?.map((g) => g.id);

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {data && (
            <>
              <div className="backdrop-img">
                <Img
                  src={url.backdrop + (data.backdrop_path || data.poster_path)}
                />
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    {data.poster_path ? (
                      <Img
                        src={url.poster + data.poster_path}
                        className="posterImg"
                      />
                    ) : (
                      <Img src={PosterFallback} className="posterImg" />
                    )}
                  </div>
                  <div className="right">
                    <div className="title">
                      {`${data?.name || data?.title} (${dayjs(
                        data?.release_date
                      ).format("YYYY")})`}
                    </div>
                    <div className="subTitle">{data?.tagline}</div>
                    <Genres data={_genres} />
                    <div className="row">
                      <CircleRating rating={data?.vote_average.toFixed(1)} />
                      <div className="playbtn" onClick={() => {
                        setShow(true)
                        setVideoId(video.key)
                      }}>
                        <PlayButton />
                        <span className="text">Watch Trailer</span>
                      </div>
                    </div>
                    <div className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">{data?.overview}</div>
                    </div>
                    <div className="info">
                      {data.status && (
                        <div className="infoItem">
                          <span className="text bold">Status: </span>
                          <span className="text">{data.status}</span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className="infoItem">
                          <span className="text bold">Release Date: </span>
                          <span className="text">
                            {dayjs(data.release_date).format("MMM D, YYYY")}
                          </span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className="infoItem">
                          <span className="text bold">Runtime: </span>
                          <span className="text">
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>
                    {director?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Director: </span>
                        <span className="text">
                          {director?.map((d, index) => (
                            <span key={index}>
                              {d.name}
                              {director.length - 1 != index && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                    {writer?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Writer: </span>
                        <span className="text">
                          {writer?.map((w, index) => (
                            <span key={index}>
                              {w.name}
                              {writer.length - 1 != index && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                    {data?.created_by?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Creator: </span>
                        <span className="text">
                          {data?.created_by?.map((w, index) => (
                            <span key={index}>
                              {w.name}
                              {data?.created_by?.length - 1 != index && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <VideoPopup
                  show={show}
                  setShow={setShow}
                  videoId={videoId}
                  setVideoId={setVideoId}
                />
              </ContentWrapper>
            </>
          )} 
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
