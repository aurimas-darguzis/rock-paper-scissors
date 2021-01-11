import { rock, paper, scissors, spock, lizard } from "../../../constants";

export const playGame = ({ playerGesture }) => {
  const gestures = [rock, paper, scissors, spock, lizard];
  const ComputerGesture = gestures[Math.floor(Math.random() * gestures.length)];

  const state = {
    rock: {
      scissors: "Player",
      lizard: "Player",
      paper: "Computer",
      spock: "Computer",
      rock: "draw",
    },
    paper: {
      rock: "Player",
      spock: "Player",
      scissors: "Computer",
      lizard: "Computer",
      paper: "draw",
    },
    scissors: {
      paper: "Player",
      lizard: "Player",
      spock: "Computer",
      rock: "Computer",
      scissors: "draw",
    },
    spock: {
      scissors: "Player",
      rock: "Player",
      paper: "Computer",
      lizard: "Computer",
      spock: "draw",
    },
    lizard: {
      spock: "Player",
      paper: "Player",
      rock: "Computer",
      scissors: "Computer",
      lizard: "draw",
    },
  };

  const winner = state[playerGesture][ComputerGesture];
  return { winner };
};
