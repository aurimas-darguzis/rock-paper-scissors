import { useState } from "react";
import { play } from "./_helpers.js";
import { rock, paper, scissors, spock, lizard } from "../../constants/index";
import styles from "../../styles/Game.module.css";

const Game = () => {
  const [winner, setWinner] = useState(null);
  const [error, setError] = useState(null);

  const playGame = (gesture) => {
    play(gesture)
      .then((results) => {
        setError(null);
        setWinner(results.winner);
      })
      .catch(() => setError(true));
  };

  if (error) {
    return (
      <div>
        something went wrong :( <br /> please refresh the page
      </div>
    );
  }

  if (winner)
    return (
      <div className={styles.container}>
        <h1 className={styles.winner}>
          {winner === "draw" ? "It's a draw!" : `${winner} wins!`}
        </h1>
      </div>
    );

  return (
    <div className={styles.container} data-testid="game-container">
      <button
        data-testid="rock-button"
        className={styles.button}
        onClick={() => playGame(rock)}
      >
        rock
      </button>
      <button className={styles.button} onClick={() => playGame(paper)}>
        paper
      </button>
      <button className={styles.button} onClick={() => playGame(scissors)}>
        scissors
      </button>
      <button className={styles.button} onClick={() => playGame(spock)}>
        spok
      </button>
      <button className={styles.button} onClick={() => playGame(lizard)}>
        lizard
      </button>
    </div>
  );
};

export default Game;
