import { playGame } from "../../pages/api/rounds/_helpers";
import { rock, paper, scissors, spock, lizard, state } from "../../constants";

describe("Game Logic", () => {
  test("Scissors beats Paper", () => {
    expect(state[scissors][paper]).toEqual("Player");
  });
  test("Paper beats Rock", () => {
    expect(state[paper][rock]).toEqual("Player");
  });
  test("Rock beats Lizard", () => {
    expect(state[rock][lizard]).toEqual("Player");
  });
  test("Lizard beats Spock", () => {
    expect(state[lizard][spock]).toEqual("Player");
  });
  test("Spock beats Scissors", () => {
    expect(state[spock][scissors]).toEqual("Player");
  });
  test("Scissors beats Lizard", () => {
    expect(state[scissors][lizard]).toEqual("Player");
  });
  test("Lizard beats Paper", () => {
    expect(state[lizard][paper]).toEqual("Player");
  });
  test("Paper beats Spock", () => {
    expect(state[paper][spock]).toEqual("Player");
  });
  test("Spock beats Rock", () => {
    expect(state[spock][rock]).toEqual("Player");
  });
  test("Rock beats Scissors", () => {
    expect(state[rock][scissors]).toEqual("Player");
  });

  test("returns Draw when same gestures are picked up", () => {
    expect(state[rock][rock]).toEqual("draw");
    expect(state[paper][paper]).toEqual("draw");
    expect(state[scissors][scissors]).toEqual("draw");
    expect(state[lizard][lizard]).toEqual("draw");
    expect(state[spock][spock]).toEqual("draw");
  });

  test("returns undefined if computer gesture is in a bad format", () => {
    expect(state[rock]["bad format"]).toEqual(undefined);
  });
});
