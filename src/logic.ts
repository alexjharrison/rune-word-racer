import type { RuneClient } from "rune-games-sdk/multiplayer";
import { commonWords } from "./words";

export const initState = (playerIds: string[] = []) => ({
  allPlayerIds: playerIds,
  currentPlayerIdx: 0,
  turnStartTimeMs: 0,
  turnTimeElapsedMs: 0,
  currentGuess: "",
  targetWord: commonWords[Math.floor(Math.random() * commonWords.length)],
  guesses: playerIds.reduce<Record<string, string[]>>(
    (acc, id) => ({ ...acc, [id]: [] }),
    {}
  ),
});

export type GameState = ReturnType<typeof initState>;

export type GameActions = {
  updateCurrentGuess: (params: { word: string }) => void;
  submitWord: () => void;
};

declare global {
  const Rune: RuneClient<GameState, GameActions>;
}

Rune.initLogic({
  minPlayers: 1,
  maxPlayers: 2,
  setup: initState,
  actions: {
    updateCurrentGuess: ({ word }, { game }) => {
      game.currentGuess = word;
    },
    submitWord: (_, { game, playerId }) => {
      if (game.currentGuess === game.targetWord)
        Rune.gameOver({
          players: game.allPlayerIds.reduce(
            (acc, id) => ({
              ...acc,
              [id]: playerId === id ? "WON" : "LOST",
            }),
            {}
          ),
        });
      game.guesses[playerId].push(game.currentGuess);
      game.currentPlayerIdx =
        (game.currentPlayerIdx + 1) % game.allPlayerIds.length;
      game.turnStartTimeMs = Rune.gameTime();
      game.turnTimeElapsedMs = 0;
      game.currentGuess = "";
    },
  },
  update: ({ game }) => {
    game.turnTimeElapsedMs = Math.round(Rune.gameTime() - game.turnStartTimeMs);
    if (game.turnTimeElapsedMs > 30000) {
      game.currentPlayerIdx =
        (game.currentPlayerIdx + 1) % game.allPlayerIds.length;
      game.turnStartTimeMs = Rune.gameTime();
      game.turnTimeElapsedMs = 0;
      game.currentGuess = "";
    }
  },
  updatesPerSecond: 10,
});
