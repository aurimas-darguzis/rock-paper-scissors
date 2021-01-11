import { state, gestures } from "../../../constants";

export const playGame = ({ playerGesture }) => {
  if (gestures.indexOf(playerGesture) < 0) {
    throw new Error("Player Gesture does not exist!");
  }

  const computerGesture = gestures[Math.floor(Math.random() * gestures.length)];

  const winner = state[playerGesture][computerGesture];
  return { winner };
};
