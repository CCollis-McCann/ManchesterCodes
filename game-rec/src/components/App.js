import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Nav from './Nav';
import GameDetails from './GameDetails';
import Reccomended from './Reccomended';
import axios from 'axios';

function App() {
  const [gameImage, setGameImage] = useState();
  const [gameTitle, setGameTitle] = useState();
  const [gameDetails, setGameDetails] = useState();
  const [gameRating, setGameRating] = useState();
  const [gamePrice, setGamePrice] = useState();
  const [findBest, setFindBest] = useState();

  const [reccomendedGameImageOne, setReccomendedGameImageOne] = useState();
  const [reccomendedGameTitleOne, setReccomendedGameTitleOne] = useState();
  const [reccomendedGameImageTwo, setReccomendedGameImageTwo] = useState();
  const [reccomendedGameTitleTwo, setReccomendedGameTitleTwo] = useState();
  const [reccomendedGameImageThree, setReccomendedGameImageThree] = useState();
  const [reccomendedGameTitleThree, setReccomendedGameTitleThree] = useState();
  const [reccomendedGameImageFour, setReccomendedGameImageFour] = useState();
  const [reccomendedGameTitleFour, setReccomendedGameTitleFour] = useState();

  const curDate = new Date().toISOString().substring(0, 10);
  const randomNum = Math.floor(Math.random() * 19);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.rawg.io/api/games?dates=2020-01-01,${curDate}&ordering=-added`
        );
        const { data } = await axios.get(
          `https://api.rawg.io/api/games/${res.data.results[randomNum].slug}`
        );
        setGameImage(data.background_image);
        setGameTitle(data.name);
        setGameDetails(data.description);
        setGameRating(data.rating);
        const suggested = await axios.get(
          `https://api.rawg.io/api/games/${res.data.results[randomNum].slug}/suggested`
        );
        setReccomendedGameImageOne(suggested.data.results[0].background_image);
        setReccomendedGameTitleOne(suggested.data.results[0].name);
        setReccomendedGameImageTwo(suggested.data.results[1].background_image);
        setReccomendedGameTitleTwo(suggested.data.results[1].name);
        setReccomendedGameImageThree(
          suggested.data.results[2].background_image
        );
        setReccomendedGameTitleThree(suggested.data.results[2].name);
        setReccomendedGameImageFour(suggested.data.results[3].background_image);
        setReccomendedGameTitleFour(suggested.data.results[3].name);
      } catch (err) {
        alert('Unfortunately this service is currently unavailable');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Nav
        setGameImage={setGameImage}
        setGameTitle={setGameTitle}
        setGameDetails={setGameDetails}
        setGameRating={setGameRating}
        setGamePrice={setGamePrice}
        setFindBest={setFindBest}
        setReccomendedGameTitleOne={setReccomendedGameTitleOne}
        setReccomendedGameImageOne={setReccomendedGameImageOne}
        setReccomendedGameTitleTwo={setReccomendedGameTitleTwo}
        setReccomendedGameImageTwo={setReccomendedGameImageTwo}
        setReccomendedGameTitleThree={setReccomendedGameTitleThree}
        setReccomendedGameImageThree={setReccomendedGameImageThree}
        setReccomendedGameTitleFour={setReccomendedGameTitleFour}
        setReccomendedGameImageFour={setReccomendedGameImageFour}
      />
      <GameDetails
        gameImage={gameImage}
        gameTitle={gameTitle}
        gameDetails={gameDetails}
        gameRating={gameRating}
        gamePrice={gamePrice}
        findBest={findBest}
      />
      <Reccomended
        gameTitle={gameTitle}
        reccomendedGameTitleOne={reccomendedGameTitleOne}
        reccomendedGameImageOne={reccomendedGameImageOne}
        reccomendedGameTitleTwo={reccomendedGameTitleTwo}
        reccomendedGameImageTwo={reccomendedGameImageTwo}
        reccomendedGameTitleThree={reccomendedGameTitleThree}
        reccomendedGameImageThree={reccomendedGameImageThree}
        reccomendedGameTitleFour={reccomendedGameTitleFour}
        reccomendedGameImageFour={reccomendedGameImageFour}
      />
    </div>
  );
}

export default App;
