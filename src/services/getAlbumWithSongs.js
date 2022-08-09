import { DAY_IN_MILLISECONDS } from "./constants";

const getAlbumWithSongs = async (id) => {
  try {
    const cache = JSON.parse(localStorage.getItem(`albumWithSongs-${id}`));

    const isCacheExpired = Date.now() - cache?.time > DAY_IN_MILLISECONDS;

    if (cache && !isCacheExpired) {
      return cache.data;
    }

    const res = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${id}&entity=song`
      )}`
    );

    if (res.ok) {
      const body = await res.json();

      const [info, ...songs] = JSON.parse(body.contents).results;

      const albumWithSongs = { info, songs };
      console.log(albumWithSongs);

      localStorage.setItem(
        `albumWithSongs-${id}`,
        JSON.stringify({
          data: albumWithSongs,
          time: Date.now(),
        })
      );

      return albumWithSongs;
    }

    throw new Error("Unexpected error fetching API");
  } catch (error) {
    console.error(error);
  }
};

export default getAlbumWithSongs;
