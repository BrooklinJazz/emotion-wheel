import { Machine } from "xstate";

export const emotionStateMachine = Machine({
  id: "emotionMachine",
  initial: "init",
  states: {
    init: { on: { START: "selecting" } },
    selecting: { on: { ANGER: "anger" } },
    anger: {},
    fear: {},
    joy: {},
    disgust: {},
    sad: {},
    surprise: {}
  }
});
