import { ref, readonly, computed } from "vue";
import { GameActions, GameState, initState } from "./logic";
import {
  OnChange,
  OnChangeAction,
  OnChangeEvent,
  PlayerId,
  Players,
} from "rune-games-sdk";

type onChangeParams = Parameters<OnChange<GameState, GameActions>>[0];

const _game = ref<GameState>(initState());
const _action = ref<OnChangeAction<GameActions>>();
const _event = ref<OnChangeEvent>();
const _yourPlayerId = ref<PlayerId>();
const _players = ref<Players>({});
const _rollbacks = ref<OnChangeAction<GameActions>[]>([]);
const _previousGame = ref<GameState>(initState());
const _futureGame = ref<GameState>();

export const onChange = (newState: onChangeParams) => {
  _game.value = newState.game;
  _action.value = newState.action;
  _event.value = newState.event;
  _yourPlayerId.value = newState.yourPlayerId;
  _players.value = newState.players;
  _rollbacks.value = newState.rollbacks;
  _previousGame.value = newState.previousGame;
  _futureGame.value = newState.futureGame;
};

export const game = readonly(computed(() => _game.value));
export const action = readonly(computed(() => _action.value));
export const event = readonly(computed(() => _event.value));
export const yourPlayerId = readonly(computed(() => _yourPlayerId.value));
export const players = readonly(computed(() => _players.value));
export const rollbacks = readonly(computed(() => _rollbacks.value));
export const previousGame = readonly(computed(() => _previousGame.value));
export const futureGame = readonly(computed(() => _futureGame.value));

export const currentWord = ref("");
export const isMyTurn = computed(
  () =>
    game.value.allPlayerIds[game.value.currentPlayerIdx] === yourPlayerId.value
);

export const keyboardStatus = computed(() =>
  triggeredLetters(_game.value.guesses[_yourPlayerId.value || ""])
);

function triggeredLetters(words: string[] = []) {
  const wrongLocation = new Set<string>();
  const correctLocation = new Set<string>();
  const target = game.value.targetWord;
  const hash = target
    .split("")
    .reduce<Record<string, Set<number>>>((acc, letter, i) => {
      if (acc[letter]) acc[letter].add(i);
      else acc[letter] = new Set([i]);
      return acc;
    }, {});
  for (const word of words) {
    word.split("").forEach((letter, i) => {
      if (correctLocation.has(letter)) return;

      if (!hash[letter]) return;
      wrongLocation.add(letter);

      if (!hash[letter].has(i)) return;
      wrongLocation.delete(letter);
      correctLocation.add(letter);
    });
  }
  return { wrongLocation, correctLocation };
}
