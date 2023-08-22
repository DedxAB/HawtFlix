import InfiniteScroll from "react-infinite-scroll-component";
import noResult from "../../assets/no-results.png";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  return <div className="searchResultsPage">SearchResult</div>;
};

export default SearchResult;
