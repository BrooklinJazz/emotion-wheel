import { Machine } from "xstate";
import { EmoActions } from "./actions";

export const emotionStateMachine = Machine({
  id: "emotionMachine",
  initial: "init",
  states: {
    init: { on: { [EmoActions.START]: "selecting" } },
    selecting: { on: { ANGER: "anger" } },
    anger: {},
    fear: {},
    joy: {},
    disgust: {},
    sad: {},
    surprise: {}
  }
});
