const AlbumTrack = ({ song }) => {
  const { trackName, previewUrl } = song;

  return (
    <>
      <h2>{trackName}</h2>
      <audio controls>
        <source src={previewUrl} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default AlbumTrack;
