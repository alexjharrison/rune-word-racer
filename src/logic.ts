import type { RuneClient } from "rune-games-sdk/multiplayer";

export interface GameState {
  count: number;
}

export type GameActions = {
  increment: (params: { amount: number }) => void;
};

declare global {
  const Rune: RuneClient<GameState, GameActions>;
}

export function getCount(game: GameState) {
  return game.count;
}

export const initState: GameState = { count: 0 };

Rune.initLogic({
  minPlayers: 1,
  maxPlayers: 4,
  setup: () => initState,
  actions: {
    increment: ({ amount }, { game }) => {
      game.count += amount;
    },
  },
});
