import AlbumTrack from "./AlbumTrack";

const AlbumSongs = ({ songs }) => {
  return (
    <ul className="album-songs">
      {songs.map((song) => (
        <li key={song.trackId}>
          <AlbumTrack song={song} />
        </li>
      ))}
    </ul>
  );
};

export default AlbumSongs;
