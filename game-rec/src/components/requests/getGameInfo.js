import axios from 'axios';

const getGameInfo = async (
  value,
  setGameImage,
  setGameTitle,
  setGameDetails,
  setGameRating,
  setReccomendedGameTitleOne,
  setReccomendedGameImageOne,
  setReccomendedGameTitleTwo,
  setReccomendedGameImageTwo,
  setReccomendedGameTitleThree,
  setReccomendedGameImageThree,
  setReccomendedGameImageFour,
  setReccomendedGameTitleFour
) => {
  //   const setBackground = img => {
  //     document.getElementById('nav').style.backgroundImage = `url(${img})`;
  //     document.getElementById('nav').style.backgroundSize = 'cover';
  //     document.getElementById('nav').style.backgroundPosition = 'center';
  //   };
  if (!value) {
    return Promise.resolve([]);
  } else {
    const newValue = value.replace(/ /g, '-');

    try {
      const res = await axios.get(`https://api.rawg.io/api/games/${newValue}`);
      setGameImage(res.data.background_image);
      setGameTitle(res.data.name);
      setGameDetails(res.data.description);
      setGameRating(res.data.rating);

      const suggested = await axios.get(
        `https://api.rawg.io/api/games/${newValue}/suggested`
      );
      setReccomendedGameImageOne(suggested.data.results[0].background_image);
      setReccomendedGameTitleOne(suggested.data.results[0].name);
      setReccomendedGameImageTwo(suggested.data.results[1].background_image);
      setReccomendedGameTitleTwo(suggested.data.results[1].name);
      setReccomendedGameImageThree(suggested.data.results[2].background_image);
      setReccomendedGameTitleThree(suggested.data.results[2].name);
      setReccomendedGameImageFour(suggested.data.results[3].background_image);
      setReccomendedGameTitleFour(suggested.data.results[3].name);
    } catch (err) {
      alert('Unfortunately this service is currently unavailable');
    }
  }
};

export default getGameInfo;
