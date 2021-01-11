export const rock = "rock";
export const paper = "paper";
export const scissors = "scissors";
export const spock = "spock";
export const lizard = "lizard";

export const gestures = [rock, paper, scissors, spock, lizard];

export const state = {
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
