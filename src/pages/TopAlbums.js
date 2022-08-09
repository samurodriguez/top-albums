import { Link } from "react-router-dom";
import useTopAlbums from "../hooks/useTopAlbums";
import AlbumCard from "../components/AlbumCard";
import LoadingIcon from "../components/LoadingIcon";

const TopAlbums = () => {
  const { albums, loading } = useTopAlbums();

  return (
    <section>
      {loading && <LoadingIcon />}

      {albums.length > 0 && (
        <ul className="album-list">
          {albums.map((album) => (
            <li key={album.id}>
              <Link to={`/albums/${album.id}`}>
                <AlbumCard album={album} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TopAlbums;
