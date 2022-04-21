import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (url) => {
      setLoading(true);

      try {
        const response = await axios.get(url).then((response) => response.data);
        setData(response);
      } catch (err) {
        console.error(err);
        setError(err);
      }

      setLoading(false);
    };
    fetchData(url);
  }, []);
  return { data, loading, error };
};
