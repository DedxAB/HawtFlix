import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading("Loading...");
    setData(null); // jab jab call hoga then ye null ho jayega automatic for respective url
    setError(null); // and ye v
    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!" + err);
      });
  }, [url]);
  return { data, loading, error };
};
export default useFetch;
