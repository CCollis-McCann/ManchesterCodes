import React from 'react';
import GameCard from './GameCard';
import '../styles/Reccomended.css';

const Reccomended = ({
  gameTitle,
  reccomendedGameTitleOne,
  reccomendedGameImageOne,
  reccomendedGameTitleTwo,
  reccomendedGameImageTwo,
  reccomendedGameTitleThree,
  reccomendedGameImageThree,
  reccomendedGameTitleFour,
  reccomendedGameImageFour,
}) => {
  return (
    <div className="reccomended" id="reccomended">
      <GameCard
        title={reccomendedGameTitleOne}
        image={reccomendedGameImageOne}
        gameTitle={gameTitle}
      />
      <GameCard
        title={reccomendedGameTitleTwo}
        image={reccomendedGameImageTwo}
        gameTitle={gameTitle}
      />
      <GameCard
        title={reccomendedGameTitleThree}
        image={reccomendedGameImageThree}
        gameTitle={gameTitle}
      />
      <GameCard
        title={reccomendedGameTitleFour}
        image={reccomendedGameImageFour}
        gameTitle={gameTitle}
      />
    </div>
  );
};

export default Reccomended;
