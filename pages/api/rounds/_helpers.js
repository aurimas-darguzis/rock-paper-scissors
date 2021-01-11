import { rock, paper, scissors, spock, lizard } from "../../../constants";

export const playGame = ({ playerGesture }) => {
  const gestures = [rock, paper, scissors, spock, lizard];
  const computerGesture = gestures[Math.floor(Math.random() * gestures.length)];

  const state = {
    rock: {
      scissors: "player",
      lizard: "player",
      paper: "computer",
      spock: "computer",
      rock: "draw",
    },
    paper: {
      rock: "player",
      spock: "player",
      scissors: "computer",
      lizard: "computer",
      paper: "draw",
    },
    scissors: {
      paper: "player",
      lizard: "player",
      spock: "computer",
      rock: "computer",
      scissors: "draw",
    },
    spock: {
      scissors: "player",
      rock: "player",
      paper: "computer",
      lizard: "computer",
      spock: "draw",
    },
    lizard: {
      spock: "player",
      paper: "player",
      rock: "computer",
      scissors: "computer",
      lizard: "draw",
    },
  };

  const winner = state[playerGesture][computerGesture];
  return { winner };
};
