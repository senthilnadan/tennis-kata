const score = require("./score");

test("Score Love All love for players", () => {
  expect(score([])).toBe("Love All");
});

test("Score 15 love for player 1", () => {
  expect(score([1])).toBe("15 Love");
});

test("Score 30 love for player 1", () => {
  expect(score([1, 1])).toBe("30 Love");
});

test("Score 45 love for player 1", () => {
  expect(score([1, 1, 1])).toBe("45 Love");
});

test("player 1 wins the game", () => {
  expect(score([1, 1, 1, 1])).toBe("Game Player1");
});

test("Score Love 15 for player 2", () => {
  expect(score([2])).toBe("Love 15");
});

test("Score Love 30 for player 2", () => {
  expect(score([2, 2])).toBe("Love 30");
});

test("Score Love 45 for player 2", () => {
  expect(score([2, 2, 2])).toBe("Love 45");
});

test("player 2 wins the game", () => {
  expect(score([2, 2, 2, 2])).toBe("Game Player2");
});

test("Score 15 for both players", () => {
  expect(score([1, 2])).toBe("15 each");
});

test("Score 15 for both players", () => {
  expect(score([2, 1])).toBe("15 each");
});

test("Score 30 for both players", () => {
  expect(score([1, 2, 1, 2])).toBe("30 each");
});

test("Score 30 for both players", () => {
  expect(score([1, 1, 2, 2])).toBe("30 each");
});

test("Score 30 for both players", () => {
  expect(score([2, 2, 1, 1])).toBe("30 each");
});

test("Score 30 for both players", () => {
  expect(score([2, 1, 2, 1])).toBe("30 each");
});

test("Score deuce for both players", () => {
  expect(score([1, 1, 2, 2, 1, 2])).toBe("Deuce");
});

test("Score unequal for players 40 15", () => {
  expect(score([1, 2, 1, 1])).toBe("40 15");
});

test("Score unequal for players 40 30", () => {
  expect(score([1, 2, 1, 1, 2])).toBe("40 30");
});

test("Player 1 has and Advantage", () => {
  expect(score([1, 2, 1, 1, 2, 2, 1])).toBe("Advantage Player 1");
});

test("Player 2 has and Advantage", () => {
  expect(score([1, 2, 1, 1, 2, 2, 2])).toBe("Advantage Player 2");
});

test("Player 1 wins game after deuce", () => {
  expect(score([1, 2, 1, 1, 2, 2, 1, 1])).toBe("Game Player 1");
});

test("Player 2 wins game after deuce", () => {
  expect(score([1, 2, 1, 1, 2, 2, 2, 2])).toBe("Game Player 2");
});

test("Deuce After Advantage", () => {
  expect(score([1, 2, 1, 1, 2, 2, 1, 2])).toBe("Deuce");
});
