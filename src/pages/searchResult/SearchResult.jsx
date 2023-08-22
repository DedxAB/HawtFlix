import InfiniteScroll from "react-infinite-scroll-component";
import noResult from "../../assets/no-results.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };

  const fetchNextPageData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          // only add the results part, old results + new results 
          setData({
            ...data,
            results: [...data.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    fetchInitialData();
  }, [query]);

  return <div className="searchResultsPage"></div>;
};

export default SearchResult;
