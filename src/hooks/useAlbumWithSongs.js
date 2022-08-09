import { useState, useEffect } from "react";
import getAlbumWithSongs from "../services/getAlbumWithSongs";

const useAlbumWithSongs = (id) => {
  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchAlbumWithSongs = async () => {
      const data = await getAlbumWithSongs(id);

      setAlbum(data);
      setLoading(false);
    };

    fetchAlbumWithSongs();
  }, [id]);

  return { album, loading };
};

export default useAlbumWithSongs;
