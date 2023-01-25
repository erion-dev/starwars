import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError("Error happend try later");
      } finally {
        setIsloading(false);
      }
    })();
  }, [url]);

  return { data, error, isloading };
}

export default useFetch;
