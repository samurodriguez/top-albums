import { useParams } from "react-router-dom";
import useAlbumWithSongs from "../hooks/useAlbumWithSongs";
import LoadingIcon from "../components/LoadingIcon";
import AlbumInfo from "../components/AlbumInfo";
import AlbumSongs from "../components/AlbumSongs";

const AlbumDetails = () => {
  const { id } = useParams();
  const { album, loading } = useAlbumWithSongs(id);

  console.log(album);

  if (!album) {
    return <p className="error-message">No se ha podido cargar el álbum...</p>;
  }

  return (
    <section className="album-details-page">
      {loading && <LoadingIcon />}

      {album.info && <AlbumInfo info={album.info} />}

      {album.songs?.length > 0 && <AlbumSongs songs={album.songs} />}
    </section>
  );
};

export default AlbumDetails;
