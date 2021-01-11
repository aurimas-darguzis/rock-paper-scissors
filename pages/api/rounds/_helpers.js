import { state, gestures } from "../../../constants";

export const playGame = ({ playerGesture }) => {
  if (gestures.indexOf(playerGesture) < 0) {
    throw new Error("Player Gesture does not exist!");
  }

  const ComputerGesture = gestures[Math.floor(Math.random() * gestures.length)];

  const winner = state[playerGesture][ComputerGesture];
  return { winner };
};
