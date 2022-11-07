import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((result) => setResult(result))
      .catch((e) => setError("Error de servidor"))
      .finally(() => setLoading(false));
  }, [url]);

  return { result, error, loading };
};

export default useFetch;
