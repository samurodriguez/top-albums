const AlbumCard = ({ album }) => {
  const { name, artistName, artworkUrl100 } = album;

  return (
    <article className="album-card">
      <img src={artworkUrl100.replace("100x100", "300x300")} alt={name} />
      <h2 className="ellipsis">{name}</h2>
      <h3 className="ellipsis">{artistName}</h3>
    </article>
  );
};

export default AlbumCard;
