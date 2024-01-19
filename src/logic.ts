import type { RuneClient } from "rune-games-sdk/multiplayer";
import { commonWords } from "./words";

export const initState = (playerIds: string[] = []) => ({
  allPlayerIds: playerIds,
  currentPlayerIdx: 0,
  targetWord: commonWords[Math.floor(Math.random() * commonWords.length)],
  guesses: playerIds.reduce<Record<string, string[]>>(
    (acc, id) => ({ ...acc, [id]: [] }),
    {}
  ),
});

export type GameState = ReturnType<typeof initState>;

export type GameActions = {
  submitWord: (params: { word: string }) => void;
};

declare global {
  const Rune: RuneClient<GameState, GameActions>;
}

Rune.initLogic({
  minPlayers: 1,
  maxPlayers: 2,
  setup: initState,
  actions: {
    submitWord: ({ word }, { game, playerId, allPlayerIds }) => {
      if (word === game.targetWord)
        Rune.gameOver({
          players: allPlayerIds.reduce(
            (acc, id) => ({
              ...acc,
              [id]: playerId === id ? "WON" : "LOST",
            }),
            {}
          ),
        });
      game.guesses[playerId].push(word);
      game.currentPlayerIdx = (game.currentPlayerIdx + 1) % allPlayerIds.length;
    },
  },
});
