import { useState, useEffect } from "react";
import getTopAlbums from "../services/getTopAlbums";

const useTopAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchAlbums = async () => {
      const data = await getTopAlbums();

      setAlbums(data);
      setLoading(false);
    };

    fetchAlbums();
  }, []);

  return { albums, loading };
};

export default useTopAlbums;
