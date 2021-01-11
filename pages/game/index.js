import { useState } from "react";
import { play } from "./_helpers.js";
import { rock, paper, scissors, spock, lizard } from "../../constants/index";
import styles from "../../styles/Game.module.css";

export default () => {
  const [winner, setWinner] = useState(null);

  const playGame = (gesture) => {
    play(gesture).then((results) => {
      setWinner(results.winner);
    });
  };

  if (winner)
    return (
      <div className={styles.container}>
        <h1 className={styles.winner}>
          {winner === "draw" ? "It's a draw!" : `${winner} wins!`}
        </h1>
      </div>
    );

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => playGame(rock)}>
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
